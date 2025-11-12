import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./applicationStartSection.css";

const ApplicationStartSection = () => {
  return (
    <section className="application-section py-5">
      <div className="bg-overlay"></div>

      <div className="container text-center position-relative">
        <h2 className="application-title mb-3">
          Let’s Start Your <span>Application</span>
        </h2>
        <p className="application-subtitle mb-5">
          Fill out our simple form and get matched with the best colleges for your goals.
        </p>

        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-5 col-sm-10">
            <div className="app-card">
              <div className="app-icon">
                🎓
              </div>
              <h4>Start Application</h4>
              <p>
                Begin your admission journey by submitting your details and explore top colleges suited to your career.
              </p>
              <button className="btn btn-gradient mt-3">Start Application</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-5 col-sm-10">
            <div className="app-card">
              <div className="app-icon">
                💬
              </div>
              <h4>Talk to Nearest Expert</h4>
              <p>
                Connect with expert counsellors for personalized admission support and detailed course guidance.
              </p>
              <button className="btn btn-outline-gradient mt-3">Book Free Counselling</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationStartSection;
