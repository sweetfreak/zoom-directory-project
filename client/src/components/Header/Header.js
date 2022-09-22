import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import auth from "../../utils/auth";
import Navbar from "../Nav/NavBar";
import SearchTool from "../SearchTool/SearchTool";
function Header(props) {
  //current page
  const [currentPage, handlePageChange] = useState("Login");

  const loggedIn = auth.loggedIn();

  // const renderPage = () => {
    // switch (currentPage) {
    //   case "Login":
    //     return <LoginForm></LoginForm>;
    //   case "Sign Up":
    //     return <SignUpForm></SignUpForm>;
    //   default:
    //     return <LoginForm></LoginForm>;
    // }
  // };

  return (
    <div>
      <header>
      <a href="/" className="site-title ">
        EZ-Zoom
      </a>
      <Navbar/>
      {loggedIn && (
        <div><SearchTool/></div>
      )}
        {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      </header>
     
    </div>
  );
}

export default Header;
