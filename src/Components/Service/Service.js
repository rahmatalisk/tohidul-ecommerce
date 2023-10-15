import React from "react";
import "./Service.scss";

const Service = () => {
  const services = [
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
    {
      name: 1,
    },
  ];
  return (
    <section id="service">
      <div className="shape2" style={{ backgroundColor: "#5b3649" }}></div>
      <div className="shape1" style={{ backgroundColor: "#354f7a" }}></div>
      <div className="container">
        <div className="service-content-wrapper">
          <h2>Our Service</h2>
          <div className="box-container">
            {services.map((it, i) => (
              <div key={i} className="box">
                <div className="box-content"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
