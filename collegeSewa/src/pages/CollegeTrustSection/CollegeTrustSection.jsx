import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CollegeTrustSection.css";

const CollegeTrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-overlay">
        <div className="container text-center text-white">
          <h2 className="trust-title mb-3">
            Start Your College Journey with <span>CollegeSewa.com</span>
          </h2>
          <p className="trust-subtitle mb-5">
            Get personalized guidance, compare colleges, and apply to your dream institution — all in one place.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="trust-card">
                <h3>5,00,000+</h3>
                <p>Students Trusted Us</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="trust-card">
                <h3>10,000+</h3>
                <p>Colleges in Our Database</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="trust-card">
                <h3>24/7</h3>
                <p>Expert Counselling Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeTrustSection;
