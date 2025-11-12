import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faComments,
  faUserGraduate,
  faChalkboardTeacher,
  faHeadset,
  faCertificate,
  faUsers,
  faUniversity,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./FreeCounsellingSection.css";

const FreeCounsellingSection = () => {
  return (
    <section className="free-counselling-pro">
      <div className="counselling-wrapper">
        {/* Left Section */}
        <div className="counselling-left">
          <h4 className="subtitle">100% Free Service — No Hidden Charges</h4>
          <h2 className="title">
            Get <span>FREE Expert Counselling</span>
          </h2>
          <p className="description">
            Talk to our experienced counselors and find your perfect college match.  
            We’ve helped over <strong>1 Lakh+</strong> students achieve their dreams!
          </p>

          <div className="features-list">
            <div className="feature-item">
              <FontAwesomeIcon icon={faUserGraduate} />
              <div>
                <h5>Personalized Guidance</h5>
                <p>Based on your goals</p>
              </div>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              <div>
                <h5>Expert Counselors</h5>
                <p>15+ years experience</p>
              </div>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faHeadset} />
              <div>
                <h5>24/7 Support</h5>
                <p>Always here for you</p>
              </div>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faCertificate} />
              <div>
                <h5>100% Free</h5>
                <p>No payment required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="counselling-right">
          <div className="counselling-card">
            <img
              src="https://www.shutterstock.com/image-photo/indian-psychologist-advising-middle-aged-600nw-2368780783.jpg"
              alt="Counsellor"
              className="counsellor-img"
            />
            <h3>Talk to Our Experts</h3>
            <p>Our certified counselors are available 24/7 for guidance.</p>
            <div className="btn-group">
              <button className="btn-primary">
                <FontAwesomeIcon icon={faPhone} /> Call Now
              </button>
              <button className="btn-outline">
                <FontAwesomeIcon icon={faComments} /> Chat
              </button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <FontAwesomeIcon icon={faUsers} />
              <h4>1L+</h4>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faUniversity} />
              <h4>500+</h4>
              <p>Colleges</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faStar} />
              <h4>4.9★</h4>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCounsellingSection;
