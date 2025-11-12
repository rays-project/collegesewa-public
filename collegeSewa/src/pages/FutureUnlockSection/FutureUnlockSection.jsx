import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FutureUnlockSection.css";

const FutureUnlockSection = () => {
  return (
    <section className="future-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side Text */}
          <div className="col-lg-6 col-md-10 text-md-start text-center mb-4 mb-lg-0">
            <h2 className="headline animate-slide">🎯 Unlock Your Future with</h2>
            <h1 className="main-title animate-slide">
              Online Degrees from <span>Top Universities!</span>
            </h1>
            <p className="description mt-3 animate-fade">
              Upgrade your career with flexible, recognized, and industry-ready
              online programs from India’s most reputed institutions.
            </p>

            <div className="features mt-4">
              <div className="feature-item animate-fade">✅ 100% Online</div>
              <div className="feature-item animate-fade">🕒 Flexible Learning</div>
              <div className="feature-item animate-fade">🏛 Govt. & UGC Approved</div>
            </div>

            <button className="btn get-btn mt-4 animate-pop">
              🎓 Get Free Counselling
            </button>
          </div>

          {/* Right Side Visual Cards */}
          <div className="col-lg-5 col-md-10">
            <div className="info-cards">
              <div className="info-card shadow-sm animate-up">
                <h4>📘 Explore Programs</h4>
                <p>Discover 100+ UG & PG courses designed for your career goals.</p>
              </div>
              <div className="info-card shadow-sm animate-up delay-1">
                <h4>🎓 Learn from Experts</h4>
                <p>Get access to lectures from India’s top professors & mentors.</p>
              </div>
              <div className="info-card shadow-sm animate-up delay-2">
                <h4>💼 Job Assistance</h4>
                <p>Enhance your resume with real-world projects & placement help.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureUnlockSection;
