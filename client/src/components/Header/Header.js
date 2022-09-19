import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "../Signup/Signup";
import LoginForm from "../Login/Login";
import Navbar from "../Nav/NavBar";

function Header() {
  //current page
  const [currentPage, handlePageChange] = useState("Login");

  const renderPage = () => {
    switch (currentPage) {
      case "Login":
        return <LoginForm></LoginForm>;
      case "Sign Up":
        return <SignUpForm></SignUpForm>;
      default:
        return <LoginForm></LoginForm>;
    }
  };

  return (
    <div>
      <header>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div>{renderPage()}</div>
    </div>
  );
}

export default Header;
