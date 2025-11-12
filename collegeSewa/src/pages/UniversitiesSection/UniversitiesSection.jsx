import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faGlobeAsia,
  faLayerGroup,
  faAward,
  faChartLine,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./UniversitiesSection.css";

const UniversitiesSection = () => {
  return (
    <section className="uni-pro-wrapper">

      {/* Floating Background Shapes */}
      <div className="uni-shape shape1"></div>
      <div className="uni-shape shape2"></div>

      <div className="uni-pro-container">

        {/* Left Side Content */}
        <div className="uni-left">
          <h4 className="uni-tag">
            <FontAwesomeIcon icon={faGlobeAsia} /> 100+ Universities • India-wide
          </h4>

          <h2 className="uni-title">
            Explore India’s <span>Top Accredited Universities</span>
          </h2>

          <p className="uni-desc">
            Choose from the nation’s most trusted institutions. Compare rankings,
            placements, courses, fees & admission insights — all verified.
          </p>

          {/* Features */}
          <div className="uni-features-list">

            <div className="uni-feature">
              <FontAwesomeIcon icon={faAward} />
              <div>
                <h3>NIRF + NAAC Ranked</h3>
                <p>Top certified institutions</p>
              </div>
            </div>

            <div className="uni-feature">
              <FontAwesomeIcon icon={faChartLine} />
              <div>
                <h3>Placement Data</h3>
                <p>Real salary insights</p>
              </div>
            </div>

            <div className="uni-feature">
              <FontAwesomeIcon icon={faLayerGroup} />
              <div>
                <h3>All Streams</h3>
                <p>Engineering, Medical, MBA & more</p>
              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="uni-stats-box">
            <div className="uni-stat">
              <h2>100+</h2>
              <p>Universities</p>
            </div>

            <div className="uni-stat">
              <h2>50+</h2>
              <p>Courses</p>
            </div>

            <div className="uni-stat">
              <h2>25+</h2>
              <p>States</p>
            </div>
          </div>

          <button className="uni-btn">Explore All Universities</button>

        </div>

        {/* Right Glass Illustration */}
        <div className="uni-right">
          <div className="uni-glass-card">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
              alt="university"
            />
            <div className="uni-glass-overlay">
              <h3>Top Ranking Colleges</h3>
              <p>
                Verified information from India’s leading universities.
              </p>
              <span>
                <FontAwesomeIcon icon={faStar} /> 4.9 Rating
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniversitiesSection;
