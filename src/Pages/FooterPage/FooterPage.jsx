import React from "react";
import { Row, Col } from "reactstrap";
import './Footerpage.css'; 
import Logo from "../../assets/Images/Logo.png";

const FooterPage = () => {
  return (
    <Row
      className="d-flex flex-row justify-content-around py-5"
      style={{ backgroundColor: "rgb(179, 217, 255,0.2)" }}
    >
      <Col md={2} className="d-flex flex-column p-5">
        <img src={Logo} alt="Logo" width="200px" height="100px" />
      </Col>
      <Col md={2}>
        <Col className="fs-3 mb-3" style={{ color: "#4da6ff" }}>
          Company
        </Col>
        <p className="social-icon">About Us</p>
        <p className="social-icon">Our Team</p>
        <p className="social-icon">Our Blog</p>
        <p className="social-icon">Careers</p>
      </Col>

      <Col md={5}>
        <Col className="fs-3 mb-5" style={{ color: "#4da6ff" }}>
          Follow Us
        </Col>

        <Col className="d-flex flex-row justify-content-around">
          <Col md={1} className="fs-2">
            <i className="fa-brands fa-x-twitter social-icon"></i>
          </Col>

          <Col md={1} className="fs-2">
            <i className="fa-brands fa-instagram social-icon"></i>
          </Col>
          <Col md={1} className="fs-2">
            <i className="fa-brands fa-facebook social-icon"></i>
          </Col>

          <Col md={1} className="fs-2">
            <i className="fa-brands fa-youtube social-icon"></i>
          </Col>
          <Col md={1} className="fs-2">
            <i className="fa-brands fa-linkedin social-icon"></i>
          </Col>
          <Col md={1} className="fs-2">
          
          
          <i class="fa-solid fa-envelope social-icon"></i></Col>
        </Col>
      </Col>
    </Row>
  );
};

export default FooterPage;
