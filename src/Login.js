/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Login.css";
import { provider } from "./firebase";
import { Button } from "@material-ui/core";
import WhiteLogo from "./Components/WhiteLogo.png";
import LoginImage from "./Login.png";
import Google_Logo from "./Google_Logo.png";
import { auth } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <head>
        <title>Login</title>
      </head>
      <h1 className="login_heading">Login</h1>
      <div className="login_wrapper">
        <div className="image_container">
          <img src={LoginImage} alt="Login Image" />
        </div>
        <div className="login_container">
          <img src={WhiteLogo} alt="" />
          <div className="login_text">
            <h1>Sign in to Chitthi</h1>
          </div>
          <Button onClick={signIn} className="button">
            <img className="google_logo" src={Google_Logo} alt="" />
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </div>
      <div className="gradient_login"></div>
      <div className="gradient_login2"></div>
    </div>
  );
}

export default Login;
