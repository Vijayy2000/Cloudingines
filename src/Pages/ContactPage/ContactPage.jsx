import React from "react";
import { Row, Col, Button } from "reactstrap";
import Logo from "../../assets/Images/Contact.svg";

const ContactPage = () => {
  return (
    <>
      <Row
        className="contact-page d-flex flex-row justify-content-around mx- p-5"
        style={{ backgroundColor: "rgb(179, 217, 255,0.2)" }}
      >
        <Col className="text-start fs-1" style={{ color: "#0059b3", fontWeight: "500" }}>
          Contact Us
        </Col>
        <a className="text-start text-decoration-none fw-bold text-black" href="info@cloudingines.com">info@cloudingines.com</a>
        <a className="text-start text-decoration-none fw-bold text-black" href=" 678-862-5549"> 678-862-5549</a>

        {/* Responsive Image Section */}
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-3">
          <img src={Logo} alt="Logo" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
        </Col>

        {/* Form Section */}
        <Col xs={12} md={5}>
          <Col className="text-start px-4 fs-3">Get in Touch</Col>

          <form className="p-4">
            <Row className="mb-3">
              <Col xs={12} md={5} className="mb-2">
                <label htmlFor="firstName">First Name</label>
              </Col>
              <Col xs={12} md={7}>
                <input type="text" id="firstName" className="form-control w-100" placeholder="First Name" required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={5} className="mb-2">
                <label htmlFor="lastName">Last Name</label>
              </Col>
              <Col xs={12} md={7}>
                <input type="text" id="lastName" className="form-control w-100" placeholder="Last Name" required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={5} className="mb-2">
                <label htmlFor="email">Email</label>
              </Col>
              <Col xs={12} md={7}>
                <input type="email" id="email" className="form-control w-100" placeholder="Email" required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={5} className="mb-2">
                <label htmlFor="phone">Phone</label>
              </Col>
              <Col xs={12} md={7}>
                <input type="tel" id="phone" className="form-control w-100" placeholder="Phone" required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={5} className="mb-2">
                <label htmlFor="subject">Subject</label>
              </Col>
              <Col xs={12} md={7}>
                <input type="text" id="subject" className="form-control w-100" placeholder="Subject" required />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={5} className="mb-2">
                <label htmlFor="message">Message</label>
              </Col>
              <Col xs={12} md={7}>
                <textarea id="message" className="form-control w-100" placeholder="Message" rows="3" required></textarea>
              </Col>
            </Row>

            <Button color="primary" className="mt-3 w-100" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default ContactPage;
