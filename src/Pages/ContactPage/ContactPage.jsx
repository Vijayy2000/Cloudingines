import React from "react";
import { Row, Col, Button } from "reactstrap";
import Logo from "../../assets/Images/Contact.svg";

const ContactPage = () => {
  return (
    <>
      <Row
        className="contact-page d-flex flex-row justify-content-around mx- p-5"
        style={{ backgroundColor: "rgb(179, 217, 255,0.2)", }}
      >
        <Col className="text-start fs-1 "  style={{ color: "#0059b3", fontWeight:"500" }}>Contact Us</Col>
        <p className="text-start">Feel free to contact us for any query</p>
        <Col md={4} className="d-flex justify-content-around ">
          <img
            src={Logo}
            alt="Logo"
            style={{  height: "auto" }}
          />
        </Col>
        <Col md={5} className="">
        <Col className="text-start px-4 fs-3">Get in Touch</Col>
          {/* HTML Form */}
          <form className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="firstName" className="">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control w-75"
                placeholder="First Name"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="lastName" className="">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control w-75"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="email" className="me-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control w-75"
                placeholder="Email"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="phone" className="me-3">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control w-75"
                placeholder="Phone"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="subject" className="me-3">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="form-control w-75"
                placeholder="Subject"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="message" className="me-3">
                Message
              </label>
              <textarea
                id="message"
                className="form-control w-75"
                placeholder="Message"
                rows="1"
                required
              ></textarea>
            </div>

            <Button color="primary" className="mt-3" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default ContactPage;
