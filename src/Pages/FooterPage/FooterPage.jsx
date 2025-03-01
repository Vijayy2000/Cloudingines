import React from "react";
import { Row, Col } from "reactstrap";

import Logo from "../../assets/Images/Logo.png";

const FooterPage = () => {
  return (
    <Row className="d-flex flex-row justify-content-around py-5" style={{backgroundColor:"	rgb(179, 217, 255,0.2)"}}>
      <Col md={2} className="d-flex flex-column p-5">
        <img src={Logo} alt="Logo" width="200px" height="100px" />
      </Col>
      <Col md={2}>
        <Col className="fs-3 mb-3" style={{color:"#4da6ff"}}>Company</Col>
        <p>About Us</p>
        <p>Our Team</p>
        <p>Our Blog</p>
        <p>Careers</p>
      </Col>

      <Col md={5} >

      <Col className="fs-3 mb-5 " style={{color:"#4da6ff"}}>Follow Us</Col>

      <Col  className="d-flex flex-row justify-content-around">
        <Col md={1} className="fs-2">
          <i class="fa-brands fa-x-twitter"></i>
        </Col>

        <Col md={1} className="fs-2">
          <i class="fa-brands fa-instagram"></i>
        </Col>
        <Col md={1} className="fs-2">
          <i class="fa-brands fa-facebook"></i>
        </Col>

        <Col md={1} className="fs-2">
          <i class="fa-brands fa-youtube"></i>
        </Col>
        <Col md={1} className="fs-2">

          <i class="fa-brands fa-linkedin"></i>
        </Col>
      </Col>
      
      
      </Col>

      
    </Row>
  );
};

export default FooterPage;
