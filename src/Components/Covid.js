import React, { useState, useEffect } from "react";
import "./Covid.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import numeral from "numeral";

function Covid() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        //All of the data from the country response
        setCountryInfo(data);
      });
  };

  // console.log("COUNTRY INFO >>>>", countryInfo);

  return (
    <div className="covid-section">
      <div className="leftSection">
        <div className="covid_header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="countries_dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* <MenuItem value="india">India</MenuItem> */}
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="covid_stats">
          <InfoBox
            // onClick={(e) => setCasesType("cases")}
            title="Total Cases"
            active={casesType === "cases"}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            // onClick={(e) => setCasesType("recovered")}
            title="Total Recovered"
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            // onClick={(e) => setCasesType("deaths")}
            title="Total Deaths"
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
        <div className="covid_stats">
          <InfoBox
            title="Daily Cases"
            total={numeral(countryInfo.todayCases).format("0.0a")}
          />
          <InfoBox
            title="Daily Recovered"
            total={numeral(countryInfo.todayCases).format("0.0a")}
          />
          <InfoBox
            title="Daily Deaths"
            total={numeral(countryInfo.todayCases).format("0.0a")}
          />
        </div>
      </div>
      <div className="rightSection">
        <div className="covid_chart">
          <LineGraph casesType={casesType} />
        </div>
      </div>
    </div>
  );
}

export default Covid;
