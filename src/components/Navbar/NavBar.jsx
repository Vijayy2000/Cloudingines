import React from "react";
import { Row, Col } from "reactstrap";
import Logo from "../../assets/Images/Logo.png";

const NavBar = () => {
  return (
    <Row className="d-flex flex-row justify-content-start p-3" style={{ backgroundColor: "rgb(179, 217, 255, 0.8)" ,}}>
      <Col md={3}>
        <img src={Logo} alt="logo" width="100px" height="60px" className="ms-5" />
      </Col>
      <Col md={6} className="d-flex flex-row justify-content-around mt-3">
        {/* Using a tags instead of NavLink to scroll to sections */}
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About Us
        </a>
        <a href="#contact" className="nav-link">
          Contact Us
        </a>
        <a href="#services" className="nav-link">
          Services
        </a>
      </Col>
    </Row>
  );
};

export default NavBar;
