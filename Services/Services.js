import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of e-commerce solutions to make your online
          shopping experience seamless and enjoyable.
        </p>

        <div className="services-cards">
          <div className="service-card">
            <h2>Fast Delivery</h2>
            <p>Get your products delivered quickly to your doorstep.</p>
          </div>
          <div className="service-card">
            <h2>24/7 Support</h2>
            <p>Our support team is always available to help you.</p>
          </div>
          <div className="service-card">
            <h2>Secure Payments</h2>
            <p>Pay safely using multiple payment options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
