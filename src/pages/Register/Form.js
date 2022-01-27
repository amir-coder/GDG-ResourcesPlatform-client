import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import './Form.css'


function Form() {
  const [values, setValues] = useState({
    fullName: "",
    username: "",
    email: "",
    discordId: "",
    password: "",
    password2: "",
  });
  const [cookies , setCookies] = useCookies(["token"])
  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/user/api/register", values).then( res => {
        if (res.data.error) {
            setValues({
              fullName: "",
              username: "",
              email: "",
              discordId: "",
              password: "",
              password2: "",
            })
            setErrors(res.data.error)
        }  else {
          setCookies('token' , res .data.token)
          Navigate('/ressources/AI')
        }
    })
  };

  
  return (
    <div>
    <div className="form-content">
      <a href="#">
        <i class="fas fa-arrow-left"></i>
      </a>
      <h1>Ressources</h1>
      <form className="form" onSubmit={(e) =>handleSubmit(e)}>
        <input
          type="text"
          name="fullName"
          className="form-input"
          placeholder="Fullname"
          value={values.fullName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          className="form-input"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          {...(errors.email && <p> {errors.email} </p>)}
        />

        <input
          type="text"
          name="discordId"
          className="form-input"
          placeholder="Discord ID"
          value={values.discordId}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          required
          className="form-input"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password2"
          className="form-input"
          placeholder="Confirm password"
          required
          value={values.password2}
          onChange={handleChange}
        />
        <br />
        <p className="error">{errors}</p>
        <div className="links">
          <p className="form-input-login">
            Already have an account?<a href="#"> Login</a>
          </p>
          <div className="form-input-button" onClick={(e)=>handleSubmit(e)} type="submit">
            Sign up
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;
