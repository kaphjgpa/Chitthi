import React, { useState } from "react";
import { db } from "../firebase";
import "./Contact.css";
import ContactImage from "./Contact.png";
// import WhiteLogo from "./WhiteLogo.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted to our server.");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact_background">
      <div className="contact_heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact_wrapper">
        <div className="contact_img">
          <img src={ContactImage} alt="Contact Image" />
        </div>
        <div className="contact_form">
          <form className="form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone Number</label>
            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label>Message</label>
            <textarea
              className="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              disabled={!name}
              disabled={!email}
              disabled={!phone}
              disabled={!message}
              type="submit"
              style={{ background: loader ? "#da2d2d" : " rgb(2, 2, 110)" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="gradient_contact"></div>
      <div className="gradient_contact2"></div>
    </div>
  );
};

export default Contact;
