import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/Images/Logo.png";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Row
  className="navbar-container d-flex align-items-center p-3"
  style={{ marginBottom: isMobile ? "200px" : "0px" }} // Add margin when mobile menu is open
>

      <Col xs={6} md={3} className="d-flex align-items-center">
        {/* <img src={} alt="logo" className="logo ms-3" /> */}
        <h2 style={{color:'blue', paddingTop:'15px', paddingLeft:'15px', fontWeight:'bold'}}>CLOUDINGINES</h2>
      </Col>

      {/* Desktop Menu */}
      <Col md={6} className="nav-links d-none d-md-flex justify-content-around">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact Us</a>
      </Col>

      {/* Hamburger Menu Button (Visible only on Mobile) */}
      <Col xs={6} className="d-flex d-md-none justify-content-end pe-3">
        <button className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </Col>

      {/* Mobile Menu */}
      {isMobile && (
        <Col xs={12} className="mobile-menu">
          <a href="#home" className="mobile-nav-link" onClick={() => setIsMobile(false)}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobile(false)}>About Us</a>
          <a href="#services" className="mobile-nav-link" onClick={() => setIsMobile(false)}>Services</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobile(false)}>Contact Us</a>

        </Col>
      )}
    </Row>
  );
};

export default NavBar;
