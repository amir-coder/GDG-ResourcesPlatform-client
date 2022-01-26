import React from "react";
import useForm from "../../Components/useForm";
import validate from "../../validateInfo";
import './Form.css'

function Form() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  console.log(errors.email);
  return (
    <div className="form-content">
      <a href="#">
        <i class="fas fa-arrow-left"></i>
      </a>
      <h1>Ressources</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          className="form-input"
          placeholder="Fullname"
          value={values.fullname}
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
          name="discord"
          className="form-input"
          placeholder="Discord ID"
          value={values.discord}
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
        <div className="links">
          <p className="form-input-login">
            Already have an account?<a href="#"> Login</a>
          </p>
          <button className="form-input-button" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
