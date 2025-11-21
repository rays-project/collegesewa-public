import React, { useState, useRef, useEffect } from "react";
import {
  FaStar,
  FaUsers,
  FaRupeeSign,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import "./mode.css";

const VideoAndCollegesPage = () => {
  const [currentVideo] = useState("https://www.youtube.com/embed/DWRcNpR6Kdc");
  const [modeFilter, setModeFilter] = useState("Online");
  const [showViewMore, setShowViewMore] = useState(false);

  const listRef = useRef(null);
  const hasScrolled = useRef(false);

 const colleges = [
  { rank: 1, name: "IIT Bombay", rating: 4.9, students: "10000+", fees: "8L", mode: "Regular" },
  { rank: 2, name: "IIT Delhi", rating: 4.9, students: "9500+", fees: "8L", mode: "Regular" },
  { rank: 3, name: "BITS Pilani", rating: 4.8, students: "15000+", fees: "18L", mode: "Regular" },
  { rank: 4, name: "NIT Trichy", rating: 4.7, students: "8000+", fees: "5.5L", mode: "Regular" },
  { rank: 5, name: "IIIT Hyderabad", rating: 4.8, students: "4000+", fees: "10L", mode: "Regular" },

  // ---------- ONLINE ----------
  { rank: 6, name: "IIT Madras - Online BS Degree", rating: 4.8, students: "5000+", fees: "2.5L", mode: "Online" },
  { rank: 7, name: "BITS Pilani - Work Integrated Learning", rating: 4.7, students: "3000+", fees: "4L", mode: "Online" },
  { rank: 8, name: "Amity Online University", rating: 4.5, students: "10000+", fees: "1.5L", mode: "Online" },
  { rank: 9, name: "Manipal Online", rating: 4.6, students: "8000+", fees: "2L", mode: "Online" },

  // ---------- DISTANCE ----------
  // ---------- DISTANCE ----------
{ rank: 10, name: "IGNOU University", rating: 4.6, students: "200000+", fees: "25K", mode: "Distance" },
{ rank: 11, name: "Symbiosis Centre for Distance Learning", rating: 4.4, students: "12000+", fees: "55K", mode: "Distance" },
{ rank: 12, name: "Annamalai University Distance", rating: 4.3, students: "15000+", fees: "30K", mode: "Distance" },
{ rank: 13, name: "Lovely Professional University", rating: 4.3, students: "7000+", fees: "3L", mode: "Regular" },
  { rank: 14, name: "VIT Vellore", rating: 4.5, students: "9000+", fees: "6L", mode: "Regular" },
  { rank: 15, name: "SRM University", rating: 4.2, students: "6000+", fees: "5L", mode: "Online" },

// ------- NEW ADDED (4 Distance Colleges) -------
{ rank: 16, name: "Sikkim Manipal University Distance", rating: 4.2, students: "18000+", fees: "35K", mode: "Distance" },
{ rank: 17, name: "Amity University Distance", rating: 4.3, students: "22000+", fees: "45K", mode: "Distance" },
{ rank: 18, name: "Dr. BR Ambedkar Open University", rating: 4.1, students: "25000+", fees: "20K", }


  
];


  let filteredColleges = colleges;

 if (modeFilter === "Online") filteredColleges = colleges.filter(c => c.mode === "Online");
if (modeFilter === "Regular") filteredColleges = colleges.filter(c => c.mode === "Regular");
if (modeFilter === "Distance") filteredColleges = colleges.filter(c => c.mode === "Distance");

  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;
      if (listRef.current.scrollTop > 50 && !hasScrolled.current) {
        hasScrolled.current = true;
        setShowViewMore(true);
      }
    };
    const el = listRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mode-wrapper">
      <div className="container">
        <div className="row g-5">

          {/* LEFT SECTION */}
          <div className="col-lg-6">
            <h3 className="section-title">🎥 Featured Video</h3>

            <div className="glass-card video-card">
              <div className="ratio ratio-16x9">
                <iframe src={currentVideo} allowFullScreen></iframe>
              </div>
            </div>

            <div className="row g-3 mt-2">
              {[
                { icon: <FaUniversity />, title: "10,000+", text: "Colleges" },
                { icon: <FaUserGraduate />, title: "5L+", text: "Students Helped" },
                { icon: <FaStar />, title: "200+", text: "Courses" },
              ].map((item, i) => (
                <div className="col-4" key={i}>
                  <div className="mini-box">
                    <div className="mini-icon">{item.icon}</div>
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-lg-6">
            <h3 className="section-title1">🏛 Top Colleges</h3>

            {/* FILTER BUTTONS */}
            <div className="filter-row">
              {["Online", "Distance", "Regular"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setModeFilter(btn)}
                  className={`filter-btn ${modeFilter === btn ? "active" : ""}`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* LIST */}
            <div className="college-list" ref={listRef}>
              {filteredColleges.map((c) => (
                <div className="college-box" key={c.rank}>
                  

                  <div>
                    <h5 className="college-name"> {c.name}</h5>
                    <span className="mode-chip">{c.mode}</span>
                  </div>

                  <div className="stats">
                    <span className="rank-box"><FaStar /> {c.rating}</span>
                    <span><FaUsers /> {c.students}</span>
                    <span><FaRupeeSign /> {c.fees}</span>
                  </div>
                </div>
              ))}
            </div>

            {showViewMore && (
              <button className="view-btn">🔽 View More</button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoAndCollegesPage;
