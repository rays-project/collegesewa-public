import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaUsers, FaRupeeSign, FaUniversity, FaUserGraduate } from "react-icons/fa";
import './mode.css'

const VideoAndCollegesPage = () => {
  const [currentVideo] = useState("https://www.youtube.com/embed/DWRcNpR6Kdc");
  const [modeFilter, setModeFilter] = useState("All");
  const [showViewMore, setShowViewMore] = useState(false);

  const listRef = useRef(null);
  const hasScrolled = useRef(false); // Track if user has scrolled

  const colleges = [
    { rank: 1, name: "IIT Bombay", rating: 4.9, students: "10000+", fees: "8L", mode: "Regular" },
    { rank: 2, name: "IIT Delhi", rating: 4.9, students: "9500+", fees: "8L", mode: "Regular" },
    { rank: 3, name: "BITS Pilani", rating: 4.8, students: "15000+", fees: "18L", mode: "Regular" },
    { rank: 4, name: "NIT Trichy", rating: 4.7, students: "8000+", fees: "5.5L", mode: "Regular" },
    { rank: 5, name: "IIIT Hyderabad", rating: 4.8, students: "4000+", fees: "10L", mode: "Regular" },
    { rank: 6, name: "IIT Madras - Online BS Degree", rating: 4.8, students: "5000+", fees: "2.5L", mode: "Online" },
    { rank: 7, name: "BITS Pilani - Work Integrated Learning", rating: 4.7, students: "3000+", fees: "4L", mode: "Online" },
    { rank: 8, name: "Amity Online University", rating: 4.5, students: "10000+", fees: "1.5L", mode: "Online" },
    { rank: 9, name: "Manipal Online", rating: 4.6, students: "8000+", fees: "2L", mode: "Online" },
    { rank: 10, name: "Lovely Professional University", rating: 4.3, students: "7000+", fees: "3L", mode: "Regular" },
    { rank: 11, name: "VIT Vellore", rating: 4.5, students: "9000+", fees: "6L", mode: "Regular" },
    { rank: 12, name: "SRM University", rating: 4.2, students: "6000+", fees: "5L", mode: "Online" },
  ];

  const filteredColleges =
    modeFilter === "All" ? colleges : colleges.filter((c) => c.mode === modeFilter);

  // Detect scroll (show "View More" only after user scrolls)
  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop > 50 && !hasScrolled.current) {
        hasScrolled.current = true;
        setShowViewMore(true);
      }
    };
    const el = listRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f7fb", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container">
        <div className="row g-5">
          {/* ===== Left Column ===== */}
          <div className="col-lg-6">
            <h3 className="text-dark mb-4 fw-bold">🎥 Featured Video</h3>

            <div className="card shadow-sm mb-4 rounded-4 overflow-hidden border-0">
              <div className="ratio ratio-16x9">
                <iframe
                  src={currentVideo}
                  title="Featured Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="row g-3 text-center">
              {[
                { icon: <FaUniversity />, title: "10,000+", text: "Colleges" },
                { icon: <FaUserGraduate />, title: "5L+", text: "Students Helped" },
                { icon: <FaStar />, title: "200+", text: "Courses" },
              ].map((item, i) => (
                <div className="col-6 col-md-4" key={i}>
                  <div className="card py-3 border-0 rounded-4 shadow-sm bg-white hover-card">
                    <div className="text-warning fs-3">{item.icon}</div>
                    <h4 className="text-warning mb-1">{item.title}</h4>
                    <p className="mb-0 text-muted small">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Right Column ===== */}
          <div className="col-lg-6 position-relative">
            <h3 className="text-dark mb-3 fw-bold">🏛️ Top Colleges</h3>

            {/* Filter Buttons */}
            <div className="mb-3">
              {["All", "Online", "Regular"].map((mode) => (
                <button
                  key={mode}
                  className={`btn btn-sm me-2 mb-2 fw-semibold filter-btn ${
                    modeFilter === mode ? "active-filter" : ""
                  }`}
                  onClick={() => setModeFilter(mode)}
                >
                  {mode} Mode
                </button>
              ))}
            </div>

            {/* Colleges List */}
            <div
              ref={listRef}
              className="list-group shadow-sm bg-white rounded-4 p-3"
              style={{
                maxHeight: "450px",
                overflowY: "auto",
              }}
            >
              {filteredColleges.map((c) => (
                <div
                  key={c.rank}
                  className="list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row mb-2 rounded-3 p-3 border-0 shadow-sm college-card"
                >
                  <div>
                    <h6 className="mb-1 fw-bold text-dark">
                      {c.rank}. {c.name}
                    </h6>
                    <small className="text-secondary">{c.mode} Mode</small>
                  </div>
                  <div className="d-flex gap-3 mt-2 mt-md-0 text-muted">
                    <span title="Rating">
                      <FaStar className="text-warning" /> {c.rating}
                    </span>
                    <span title="Students">
                      <FaUsers /> {c.students}
                    </span>
                    <span title="Fees">
                      <FaRupeeSign /> {c.fees}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            {showViewMore && (
              <div className="text-center mt-3">
                <button className="btn btn-warning px-4 py-2 fw-semibold rounded-pill shadow-sm view-more-btn">
                  🔽 View More Colleges
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
  /* Info cards */
  .hover-card {
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
  }
  .hover-card:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    background-color: #fff9e6;
    transform: none; /* no upward movement */
  }

  /* College list item */
  .college-card {
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
  }
  .college-card:hover {
    background-color: #fffbea;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    transform: none; /* stop upward animation */
  }

  /* Filter buttons */
  .filter-btn {
    background: white;
    border: 2px solid #ffc107;
    color: #333;
    border-radius: 20px;
    padding: 12px 30px;  /* smaller button */
    font-size: 13px;
    transition: all 0.3s ease;
  }
  .filter-btn:hover {
    background: #ffe082;
    color: #000;
    box-shadow: 0 0 6px rgba(255,193,7,0.5);
    transform: none; /* no movement */
  }
  .active-filter {
    background: linear-gradient(90deg, #ffb300, #ffca28);
    color: #000;
    border: none;
    box-shadow: 0 0 10px rgba(255,193,7,0.6);
  }

  /* View More button */
  .view-more-btn {
    font-size: 14px;
    padding: 6px 16px;
    border-radius: 30px;
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease;
  }
  .view-more-btn:hover {
    background: #ffca28;
    box-shadow: 0 0 8px rgba(255,193,7,0.6);
    transform: none; /* no upward movement */
  }

  .list-group::-webkit-scrollbar {
    display: none;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`}</style>

    </div>
  );
};

export default VideoAndCollegesPage;
