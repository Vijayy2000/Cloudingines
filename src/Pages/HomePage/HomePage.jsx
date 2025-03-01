import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your images
import image1 from "../../assets/Images/BigData.jpg";
import image2 from "../../assets/Images/Chess.jpg";
import image3 from "../../assets/Images/Cloud-services.jpg";

function CarouselPage() {
  return (
    <div className="container mt-5 ">
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="d-block w-full carousel-img" src={image1} alt="Big Data" />
          <Carousel.Caption>
            <h3>Big Data Solutions</h3>
            <p>Unlock insights with our cutting-edge data analytics services.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={image2} alt="Business Intelligence" />
          <Carousel.Caption>
            <h3>Business Intelligence</h3>
            <p>Turn data into actionable insights with our BI tools.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={image3} alt="Cloud Services" />
          <Carousel.Caption>
            <h3>Cloud Services</h3>
            <p>Reliable and scalable cloud solutions for your business.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
