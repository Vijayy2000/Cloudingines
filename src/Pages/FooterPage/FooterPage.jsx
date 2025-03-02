import React from "react";
import { Row, Col } from "reactstrap";
import "./Footerpage.css";
import Logo from "../../assets/Images/Logo.png";

const FooterPage = () => {
  return (
    <Row className="footer-container d-flex flex-md-row flex-column justify-content-around align-items-center py-5">
      
      {/* Logo Section */}
      <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-3">
          {/* <img src={} alt="Logo" className="img-fluid" style={{ maxWidth: "54%", height: "auto" }} /> */}
          <h2 style={{color:'blue', marginTop:'30px', fontWeight:'bold'}}>CLOUDINGINES</h2>
        </Col>

      {/* Company Links - Centered on Mobile */}
      <Col xs={12} md={2} className="company-links text-center text-md-start mb-3 mb-md-0">
        <Col className="fs-3 mb-3 footer-title">Company</Col>
        <p className="social-icon">About Us</p>
        <p className="social-icon">Our Team</p>
        <p className="social-icon">Our Blog</p>
        <p className="social-icon">Careers</p>
      </Col>

      {/* Social Media Icons */}
      <Col xs={12} md={5} className="text-center text-md-start">
        <Col className="fs-3 mb-4 footer-title">Follow Us</Col>
        <Col className="d-flex justify-content-center justify-content-md-between gap-3" style={{fontSize:'25px'}}>
          <i className="fa-brands fa-x-twitter social-icon"></i>
          <i className="fa-brands fa-instagram social-icon"></i>
          <i className="fa-brands fa-facebook social-icon"></i>
          <i className="fa-brands fa-youtube social-icon"></i>
          <i className="fa-brands fa-linkedin social-icon"></i>
          <i className="fa-solid fa-envelope social-icon"></i>
        </Col>
      </Col>

    </Row>
  );
};

export default FooterPage;
