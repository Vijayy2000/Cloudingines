// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="about-us-section p-5">
//       <div className="container">
//         <h1 className="mb-4">About Us</h1>
//         <p>
//           <strong>Who We Are</strong>
//           <br />
//           Cloudingines is a tech firm based in Milton, GA, specializing in Big Data, Cloud Services, Digital Transformations, Mobility Solutions, NLP, Software Development, and Integration. Our team brings together experts in tech, management, and business, ensuring a comprehensive approach to solving client challenges.
//         </p>
//         <p>
//           <strong>What We Do</strong>
//           <br />
//           We provide flexible Software Development & Integration services, aligning our work with your business goals. Our team collaborates closely with clients, offering tailored solutions across Big Data, Cloud, and more. At Cloudingines, client satisfaction and long-term partnerships are at the heart of everything we do.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../assets/Images/About.jpg";

const AboutUs = () => {
  return (
    <>
      <Row
        style={{ backgroundColor: "rgb(179, 217, 255,0.2)" }}
        className="p-5"
      >
         <h1 className="mb-4 text-start" style={{ color: "#0059b3" }}>
              About Us
            </h1>
        <Row className="d-flex flex-row justify-content-around mx-2">
          {/* Image Column */}
          <Col md={5} className="d-flex flex-column justify-content-center">
            <img
              src={Logo}
              alt="About Us"
              className="img-fluid "
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>

          {/* Text Content Column */}
          <Col md={6}>
           
            <p>
              <Col className=" fs-3 " style={{ color: "#0059b3" }}>
                {" "}
                Who We Are {" "}
                {/* <span style={{ color: "darkblue" }}>What We Do</span> */}
              </Col>
              <br />
              Cloudingines is a full-service tech software firm based in Milton, GA.Our <span style={{color:"darkblue", fontWeight:"500"}}>expert technical team</span>  maintains strong core competencies in Big Data, Business Intelligence & Analytics, Cloud Services, Digital Transformations, Mobility Solutions, Natural Language Processing, APIs, Software Development & Integration, as well as Staffing and Staff Augmentation. 
            </p>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AboutUs;
