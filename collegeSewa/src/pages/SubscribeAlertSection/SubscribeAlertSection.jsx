import React from "react";
import "./SubscribeAlertSection.css";

const SubscribeSectionPro = () => {
  return (
    <section className="subscribe-pro-section">
      {/* Background animation circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>

      <div className="container text-center">
        <div className="subscribe-card">
          <h2 className="title">Never Miss an Important Deadline!</h2>
          <p className="subtitle">
            Get instant notifications about exam alerts, application dates, admit cards, and results.
          </p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input"
            />
            <button className="btn">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSectionPro;
