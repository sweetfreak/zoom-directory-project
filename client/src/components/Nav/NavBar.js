import React from "react";
//, { useState }
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
// import SignUpForm from "./Signup";
// import LoginForm from "./Login";
// import Footer from "./Footer";
import SearchTool from "../SearchTool/SearchTool"

import Auth from "../../utils/auth";

function Navbar(props) {

  const loggedIn = Auth.loggedIn();

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar">
      <ul>  
        {!loggedIn ? (
        <div>
          <li>
            <a href="#Signup"> Signup </a>
          </li>
          <li>
            <a href="#Login"> Login </a>
          </li> 
        </div>  
        ) : (
          <div>
            <li>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </li>
            <li>
              <SearchTool/>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
