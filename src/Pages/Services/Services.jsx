

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../assets/Images/Staff-Aug-Globe.png";

const Services = () => {
  return (
    <>
      <Row
        style={{ backgroundColor: "rgb(179, 217, 255,0.2)" }}
        className="p-5"
      >
         <h1 className="mb-4 text-start" style={{ color: "#0059b3" }}>
              Services
            </h1>
        <Row className="d-flex flex-row justify-content-around mx-2">
         

          {/* Text Content Column */}
          <Col md={6}>
           
            <p>
              <Col className=" fs-3 " style={{ color: "#0059b3" }}>
                {" "}
                What We Do ,{" "}
                <span style={{ color: "darkblue" }}>Team Augmentation</span>
              </Col>
              <br />
              Finding specialized cloud-IT, big data, and BI specialists, particularly for smaller companies that only require their contribution on a project basis, may be difficult especially upon short-notice. Cloudingines is here to provide temporary and <span style={{color:"darkblue" , fontWeight:"600"}}>flexible staff augmentation solutions</span> that will help your team drive existing projects to completion at a fraction of the cost and administrative hassle of adding permanent employees to your team. We will present you with several staff augmentation options that vary in the ratio of<span style={{color:"darkblue" , fontWeight:"600"}}> Managers, Engineers, and QA specialists</span> your team needs.  
            </p>
          </Col>
           {/* Image Column */}
           <Col md={5} className="d-flex flex-column justify-content-center">
            <img
              src={Logo}
              alt="About Us"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Services;
