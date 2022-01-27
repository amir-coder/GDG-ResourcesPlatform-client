import React from "react";
import "./Home.css";
import gdg from "../../img/Logo-gdg.png";
import wtm from "../../img/Logo-wtm.png";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="login-signup">
        <div type="button" className="login" onClick={()=>navigate("/login")}>
          Login
        </div>
        <div type="button" className="signup" onClick={()=>navigate("/register")}>
          Signup
        </div>
      </div>
      <div className="main">
        <h1 className="gdg-ressources">Ressources</h1>
        <p className="texte">
          This is where gdg members improve <br /> their skills in all feilds
        </p>
        <div type="button" className="start-btn" onClick={()=>navigate("/ressources/AI")}>
          Get started
        </div>
      </div>
      <footer className="logos">
        <img src={gdg} alt="logo gdg"></img>
        <img src={wtm} alt="logo wtm"></img>
      </footer>
    </div>
  );
};

export default Homepage;