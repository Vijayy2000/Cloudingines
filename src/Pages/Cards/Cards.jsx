import React from "react";
import BigData from '../../assets/Images/BigData.jpg';
import Chess from '../../assets/Images/Chess.jpg';
import Staff from '../../assets/Images/staff.jpg';
import mob from '../../assets/Images/Mob.jpg';
import cloud from '../../assets/Images/Cloud-services.jpg';
import soft from '../../assets/Images/Software-Dev.jpg';

function CardList() {
  return (
    <div className="container " style={{marginTop:'50PX'}}>
      {/* <h2 className="text-center mb-4">Our Services</h2> */}
      <div className="row">
        {/* Services Array */}
        {[ 
          { img: BigData, title: "BIG DATA", text: "Tackle Big Problems with Big Data at CloudIngest. We provide data platforms as a service to help you discover novel patterns and fascinating associations. Let us help you utilize your data to make better decisions." },
          { img: Chess, title: "BUSINESS INTELLIGENCE", text: "We can help you transform your raw data into tactical insights using flexible integrations, workflows, and graph analytics to generate real-time custom reports that put you at an advantage." },
          { img: Staff, title: "STAFF AUGMENTATION", text: "Outsource the entirety of your development with us or integrate our premiere IT-Team with your existing staff! We offer flexible work arrangements, including telecommunication, and guaranteed customer satisfaction." },
          { img: mob, title: "MOBILITY", text: "Enable collaboration through secure mobility solutions! CloudIngest will help encrypt and back up your data, providing structured adaptability to changes to the market and your internal organization." },
          { img: cloud, title: "CLOUD SERVICES", text: "With 24/7 on-demand availability and a pay-as-you-go model that crushes up-front costs, Cloud Services is a great solution for anyone looking for high-computing power even during hours of peak demand." },
          { img: soft, title: "SOFTWARE DEVELOPMENT", text: "Outsource to a full-stack development firm from production conception to solution integration. Quality assurance is included! We are experts in SQL, Java, PHP, and Python." }
        ].map((service, index) => (
          <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
            <div className="card shadow h-100">
              <img src={service.img} className="card-img-top p-3 card-img-custom" alt={service.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-info text-center">{service.title}</h5>
                <p className="card-text flex-grow-1">{service.text}</p>
                <a href="#" className="btn btn-custom mt-auto">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
