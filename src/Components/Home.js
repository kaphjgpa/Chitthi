import React from "react";
import "./Home.css";
import BlackLogo from "./BlackLogo.png";
import Star from "./Star.png";
import "./arch.png";

function Home() {
  return (
    <div className="home">
      <div className="hero_section">
        <div className="hero_left">
          <h1 className="hero_text">
            We have make "Secure" web
            <span className="with_underline"> messenger</span> that respect your
            privacy.
          </h1>
          <p className="hero_subheading">
            We do not believe in tracking our customers and collecting data from
            our precious users.
          </p>
        </div>
        <div className="hero_right">
          <img src={BlackLogo} alt="logo" />
        </div>
      </div>
      <div className="gradient1 hue_shift "></div>
      <div className="gradient2 hue_shift "></div>
      <div className="testimonials">
        <div className="heading">
          <h2>Client testimonials</h2>
        </div>
        <div className="client_row1">
          <div className="client1">
            <div className="stars">
              <img className="star" src={Star} alt="" />
              <h4>
                "They’ve captured the essence of our business and what it
                represents in a practical and engaging way."
              </h4>
              <p>
                "Chitthi were able to effectively bring concepts in my head to
                reality. They’ve gone beyond simply building a website and have
                captured the essence of our business and what it represents in a
                practical and engaging way. I really enjoyed the whole process
                and learnt to define parts of my company better than I did
                before."
              </p>
            </div>
            <div className="client_wrapper">
              <img
                src="https://assets.website-files.com/5ff7b78d10acdeee000e23dc/600e41690f494b4dc8aa8456_Tristan.jpg"
                alt=""
              />
              <h4>RAVINDRA SINGH</h4>
              <p>Co-founder, Yolo Media</p>
            </div>
          </div>
          <div className="client2">
            <div className="stars">
              <img className="star" src={Star} alt="" />
              <h4>
                “They have a strong work ethic, which made the whole process
                feel seamless.”
              </h4>
              <p>
                "Surendra and Rahul are an exceptional team with brilliant
                ideas. They have a strong work ethic, which made the whole
                process feel seamless. I hope to work with them again in the
                future as we continue to grow the business."
              </p>
            </div>
            <div className="client_wrapper">
              <img
                src="https://image.shutterstock.com/image-photo/sardar-smiling-ground-260nw-1782332165.jpg"
                alt=""
              />
              <h4>HARPREET SINGH</h4>
              <p>Manager, Bakers</p>
            </div>
          </div>
        </div>
        <div className="client_row1">
          <div className="client1">
            <div className="stars">
              <img className="star" src={Star} alt="" />
              <h4>
                “There is a lot of thought put behind every step of the
                process.”
              </h4>
              <p>
                "Working with Chitthi was a great experience. You can tell there
                is a lot of thought put behind every step of the process. I
                don’t think they could have done a better job!"
              </p>
            </div>
            <div className="client_wrapper">
              <img
                src="https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_1518,h_2277,c_limit/Ira%20Guha,%20founder%20and%20CEO%20Asan%20Cup.jpg"
                alt=""
              />
              <h4>DEEPIKA CHAOUHAN</h4>
              <p>Owner, Pizzeria</p>
            </div>
          </div>
          <div className="client2">
            <div className="stars">
              <img className="star" src={Star} alt="" />
              <h4>“Their drive to help us succeed is second to none.”</h4>
              <p>
                "We have loved working with the team at Chitthi. They have
                brought a sense of professionalism to our online presence that
                we didn’t have before. Their passion for designing websites and
                their drive to help us succeed is second to none."
              </p>
            </div>
            <div className="client_wrapper">
              <img
                src="https://assets.website-files.com/5ff7b78d10acdeee000e23dc/5ffd1a49c61ef50142618a68_Jack%20Alpe.jpg"
                alt=""
              />
              <h4>SAMMEER KHANNA</h4>
              <p>Founder, Zen Garden</p>
            </div>
          </div>
        </div>
        {/* <div className="gradient3 hue_shift "></div> */}
        <div className="gradient4 hue_shift "></div>
        <div className="gradient5 hue_shift "></div>
        <div className="gradient6 hue_shift "></div>
        {/* <div className="gradient7 hue_shift "></div>
        <div className="gradient8 hue_shift "></div> */}
        <div className="gradient9 hue_shift "></div>
        <div className="gradient10 hue_shift "></div>
        {/* <div className="gradient11 hue_shift "></div> */}
        <div className="gradient12 hue_shift "></div>
        <div className="gradient13 hue_shift "></div>
        {/* <div className="gradient14 hue_shift "></div> */}
        <div className="gradient15 hue_shift "></div>
        {/* <div className="gradient16 hue_shift "></div> */}
        <div className="gradient17 hue_shift "></div>
        <div className="gradient18 hue_shift "></div>
      </div>
    </div>
  );
}

export default Home;
