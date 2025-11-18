import React from "react";
import Typewriter from "typewriter-effect";
import "../../pages/HeroSection/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background */}
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7972975/pexels-photo-7972975.jpeg?cs=srgb&dl=pexels-george-pak-7972975.jpg&fm=jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-md-6 hero-text">
              <h1>
                Discover Top{" "}
                <span className="typewriter-text">
                  <Typewriter
                    options={{
                      strings: [
                        "B.Tech Colleges in India",
                        "MBA Colleges in India",
                        "Engineering Colleges in India",
                        "Top Universities in India",
                        "Medical Colleges in India",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 70,
                      deleteSpeed: 40,
                      pauseFor: 1800,
                    }}
                  />
                </span>
              </h1>

              <p>
                Explore verified college reviews, placements, fees, and admission details — all in one place with{" "}
                <span>CollegeSewa</span>.
              </p>

              <div className="button-group">
                <button className="primary-btn">🔍 Search Colleges</button>
                <button className="outline-btn">Learn More</button>
              </div>

              <div className="hero-points">
                ✅ Verified Reviews &nbsp;•&nbsp; 🎯 Placement Stats &nbsp;•&nbsp; 📊 Cutoff Trends
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-6 text-center hero-img-col position-relative">
  <div
    id="heroImageCarousel"
    className="carousel slide shadow-lg rounded-4 overflow-hidden"
    data-bs-ride="carousel"
    data-bs-interval="3500"
    data-bs-pause="hover"
  >
    <div className="carousel-inner">

      <div className="carousel-item active">
        <img
          src="https://www.insidehighered.com/sites/default/files/2024-02/GettyImages-1072191138.jpg"
          alt="Students learning"
          className="hero-wall-img"
        />
      </div>

      <div className="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
          alt="Students learning"
          className="hero-wall-img"
        />
      </div>

      <div className="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
          alt="Students learning"
          className="hero-wall-img"
        />
      </div>

    </div>

    {/* Controls */}
    <button
      className="carousel-control-prev hero-wall-btn"
      type="button"
      data-bs-target="#heroImageCarousel"
      data-bs-slide="prev"
    >
      <span className="hero-wall-icon">‹</span>
    </button>

    <button
      className="carousel-control-next hero-wall-btn"
      type="button"
      data-bs-target="#heroImageCarousel"
      data-bs-slide="next"
    >
      <span className="hero-wall-icon">›</span>
    </button>
  </div>

  {/* Small Floating Tag */}
  <div className="hero-wall-badge">🎓 CollegeSewa</div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
