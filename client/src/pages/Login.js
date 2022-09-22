// see SignupForm.js for comments
import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { loginUser } from '../utils/API';
import Auth from "../utils/auth";

// importing mutations
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";

import email from "../images/email.png";
import password from "../images/password.png";

function LoginForm(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container main">
      <div className="sub-main ">
        <form onSubmit={handleFormSubmit} className="formInput">
          <h1>Login</h1>
          <div className="flex-row space-between my-2 ">
            <img src={email} alt="email" className="credential" />
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              className="credential-entry"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="flex-row space-between my-2 ">
            <img src={password} alt="password" className="credential" />

            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              className="credential-entry"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <br />
          <div className="flex-row flex-end ">
            <button className="submit-btn" type="submit">Login</button>
          </div>
          <br />
          <div className="forgot-password">
            <Link to="/signup">← Go to Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
