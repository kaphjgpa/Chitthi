import React from "react";
import Encryption from "./Encryption.png";
import DataMining from "./DataMining.png";
import NoAd from "./NoAd.png";
import Privacy from "./Privacy.png";
import Surendra from "./Surendra.jpg";
import Rahul from "./Rahul.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about_heading">
        <h1>Features</h1>
      </div>
      <div className="topic">
        <div className="topic_image">
          <img src={Encryption} alt="topic Logo" />
        </div>
        <div className="topic_info">
          <h1>Encryption</h1>
          <p>
            "We heavily focused on encryption of users data, so your data is end
            to end encrypted with firebase servers. Which are 256 bit
            encrypted."
          </p>
        </div>
      </div>
      <div className="gradient19 hue_shift "></div>
      <div className="gradient20 hue_shift "></div>
      <div className="gradient21 hue_shift "></div>
      <div className="topic">
        <div className="topic_image">
          <img src={Privacy} alt="topic Logo" />
        </div>
        <div className="topic_info">
          <h1>Privacy</h1>
          <p>
            "Privacy is one of the most important thing for a user. And we
            respect your privacy. So except you, no one can access your
            messages."
          </p>
        </div>
      </div>
      <div className="gradient22 hue_shift "></div>
      <div className="gradient23 hue_shift "></div>
      <div className="gradient24 hue_shift "></div>
      <div className="topic">
        <div className="topic_image">
          <img src={NoAd} alt="topic Logo" />
        </div>
        <div className="topic_info">
          <h1>No Advertisment</h1>
          <p>
            "We have experience how advertisements can ruin the users experience
            and can manipulates the user choices and we have no intensions to
            make profit."
          </p>
        </div>
      </div>
      <div className="gradient25 hue_shift "></div>
      <div className="gradient26 hue_shift "></div>
      <div className="gradient27 hue_shift "></div>
      <div className="topic">
        <div className="topic_image">
          <img src={DataMining} alt="topic Logo" />
        </div>
        <div className="topic_info">
          <h1>No Data Mining</h1>
          <p>
            "Data mining if one of most hottest topic of all time. As we have
            earlier mention, we have no intension to make profit and we respect
            your privacy."
          </p>
        </div>
      </div>
      <div className="gradient28 hue_shift "></div>
      <div className="gradient29 hue_shift "></div>
      <div className="gradient30 hue_shift "></div>
      <div className="team">
        <div className="team_heading">
          <h1>Team</h1>
        </div>
        <div className="team_wrapper">
          <div className="surendra">
            <img src={Surendra} alt="" />
            <p>
              Surendra, takes care of the day to day problems and finding
              solutions of the current problems. He also takes care of the core
              functionality of the Chitthi.
            </p>
          </div>
          <div className="rahul">
            <img src={Rahul} alt="" />
            <p>
              Rahul, takes care of the look and feel (UI/UX) of the Chitthi. One
              can say that he is a Resource Manager of Chitthi.
            </p>
          </div>
        </div>
        <div className="gradient69 hue_shift "></div>
        <div className="gradient60 hue_shift "></div>
      </div>
    </div>
  );
}

export default About;
