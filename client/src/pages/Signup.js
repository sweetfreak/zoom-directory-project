import React, { useState } from "react";
import { Form, Button, Alert, Dropdown } from "react-bootstrap";
// import { createUser } from '../utils/API';
import Auth from "../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";

import email from "../images/email.png";
import password from "../images/password.png";
import dept from "../images/add-user.png";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    department: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      department: "",
      email: "",
      password: "",
    });
  };

  const getInitialState = () => {
    const value = "HR";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="main">
      <div className="sub-main">
        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your signup!
          </Alert>
          <h1>Signup Page</h1>

          <Form.Group>
            <img src={email} alt="email" className="credential formInput" />
            <Form.Control
              type="email"
              placeholder="Your email address"
              name="email"
              className="credential-entry"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback> */}
          </Form.Group>
          <br />
          <Form.Group>
            <img src={password} alt="password" className="credential formInput" />
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              className="credential-entry"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback> */}
          </Form.Group>
          <br />
          <Form.Group>
            <Dropdown>
              <img src={dept} alt="dept" className="dept" />
              <label htmlFor="department"> Department:</label>
              <select value={value} onChange={handleChange}>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Legal">Legal</option>
                <option value="Advertising">Advertising</option>
              </select>
            </Dropdown>
          </Form.Group>
          <br />
          <Button
            disabled={
              !(
                userFormData.department &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="success"
            className="submit-btn"
          >
            Submit
          </Button>
          {error && <div>Sign up failed</div>}
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
