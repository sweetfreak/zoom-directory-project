import React from "react";
//, { useState }
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
// import SignUpForm from "./Signup";
// import LoginForm from "./Login";
// import Footer from "./Footer";

// import Auth from "../utils/auth";

function Navbar(props) {
  return (
    <nav className="navbar">
      <a href="/" className="site-title ">
        Zoom Directory
      </a>
      
      <ul>
        <li>
          <a href="#Signup"> Signup </a>
        </li>
        <li>
          <a href="#Login"> Login </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
