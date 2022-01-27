import React from "react";
import "./App.css";
import gdg from "./img/Logo-gdg.png";
import wtm from "./img/Logo-wtm.png";

const Homepage = () => {
  return (
    <div className="container">
      <div className="login-signup">
        <button type="button" className="login">
          Login
        </button>
        <button type="button" className="signup">
          Signup
        </button>
      </div>
      <div className="main">
        <h1 className="gdg-ressources">Ressources</h1>
        <p className="texte">
          This is where gdg members improve <br /> their skills in all feilds
        </p>
        <button type="button" className="start-btn">
          Get started
        </button>
      </div>
      <footer className="logos">
        <img src={gdg} alt="logo gdg"></img>
        <img src={wtm} alt="logo wtm"></img>
      </footer>
    </div>
  );
};

export default Homepage;
