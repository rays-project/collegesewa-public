import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faUserGraduate,
  faUserTie,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import "./GuidanceSection.css";

const GuidanceSection = () => {
  return (
    <section className="guidance-pro">
      <div className="guidance-overlay"></div>

      <div className="guidance-container">
        {/* Left Content */}
        <div className="guidance-left">
          <h2>
            Get <span>Personalised Guidance</span>
          </h2>
          <p>
            Fill in your details and our expert counselors will guide you to
            the best college fit for your career goals.
          </p>

          <div className="guidance-stats">
            <div className="stat-card">
              <FontAwesomeIcon icon={faHeadset} className="stat-icon" />
              <div>
                <h4>24/7</h4>
                <p>Support Available</p>
              </div>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon={faHandsHelping} className="stat-icon" />
              <div>
                <h4>100%</h4>
                <p>Free Counselling</p>
              </div>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon={faUserGraduate} className="stat-icon" />
              <div>
                <h4>5L+</h4>
                <p>Students Helped</p>
              </div>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon={faUserTie} className="stat-icon" />
              <div>
                <h4>Expert</h4>
                <p>Counselors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="guidance-right">
          <div className="guidance-form">
            <h3>Get Free Counselling</h3>
            <form>
              <input type="text" placeholder="Your Full Name" />
              <input type="tel" placeholder="Your Mobile Number" />
              <input type="email" placeholder="Your Email Address" />
              <input type="text" placeholder="Select Program (e.g. Computer Science)" />
              <button type="submit">Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;
