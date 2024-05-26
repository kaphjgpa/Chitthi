import React from "react";
// import "./CovidHeader.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function CovidHeader({ countries, setCountries, getCountriesData }) {
  return (
    <div className="covid_header">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="countries_dropdown" >
        <Select variant="outlined" value="abc" >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value={country.value}>{country.name}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CovidHeader;
