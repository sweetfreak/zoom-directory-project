import React from "react";
import Navbar from "../components/Nav/NavBar";
import SearchTool from "../components/SearchTool/SearchTool";
import { Row, Col } from "react-bootstrap";

import Auth from "../utils/auth";
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const loggedIn = Auth.loggedIn();

  //if not logged in, redirect to login/signup page
  return (
    <main className="d-flex p-2">
      <center>
        <div>
          <h1>Welcome to the COMPANY Directory</h1>
          <h3>Choose a department from the drop down menu above.</h3>
        </div>
      </center>
      <div class="home-details-container">
        <Row>
          <Col lg={4} md={12}>
            <h2>Your info:</h2>
            <ul></ul>
            <li>Name:</li>
            <li>Title:</li>
            <li>Employee ID:</li>
            <li>Department Page:</li>
            <li>Manager: </li>

            <h2>Zoom ID:</h2>
            <button>Start Call</button>

            <h2>Back-end Info:</h2>
            <li>Email:</li>
            <li>Phone:</li>
            <li>Start Date:</li>
            <li>Your Salary:</li>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={12}></Col>
          <h2>Bio:</h2>
          <button>Edit Bio</button>
        </Row>
      </div>
    </main>
  );
};

export default Home;
