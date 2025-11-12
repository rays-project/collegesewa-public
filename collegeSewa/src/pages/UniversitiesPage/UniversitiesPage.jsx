import React from "react";
import "./UniversitySection.css";

const universities = [
  { name: "Amity University Online", courses: "78 Courses", rank: "#1", rating: "4.8⭐", students: "10K+" },
  { name: "Jain University Online", courses: "69 Courses", rank: "#2", rating: "4.7⭐", students: "8K+" },
  { name: "DPU University Online", courses: "38 Courses", rank: "#3", rating: "4.6⭐", students: "6K+" },
  { name: "Liverpool John Moores University", courses: "28 Courses", rank: "#4", rating: "4.9⭐", students: "12K+" },
  { name: "Golden Gate University", courses: "35 Courses", rank: "#5", rating: "4.7⭐", students: "9K+" },
  { name: "Manipal Mangal Online", courses: "37 Courses", rank: "#6", rating: "4.8⭐", students: "7K+" },
  { name: "IIM Nagpur", courses: "5 Courses", rank: "#7", rating: "4.9⭐", students: "5K+" },
  { name: "Rushford Business School", courses: "12 Courses", rank: "#8", rating: "4.6⭐", students: "4K+" },
  { name: "IIM Indore", courses: "16 Courses", rank: "#9", rating: "4.8⭐", students: "9K+" },
  { name: "NMIMS Online", courses: "24 Courses", rank: "#10", rating: "4.9⭐", students: "10K+" },
];

const UniversitySection = () => {
  return (
    <section className="university-section py-5">
      <div className="overlay"></div>
      <div className="container position-relative text-center">
        <h2 className="section-title titl  settop mb-3 animate-fade ">
          🎓 Explore 100+ Top Online Universities
        </h2>
        <p className="section-subtitle mb-5 animate-fade">
          Compare India’s leading universities across{" "}
          <strong>30+ key factors</strong> like placement, reviews & courses.
        </p>

        <div className="row g-4">
          {universities.map((u, i) => (
            <div className="col-md-4 col-lg-3 col-sm-6" key={i}>
              <div className="university-card animate-up">
                <div className="glow-border"></div>
                <h5 className="uni-name">{u.name}</h5>
                <p className="course-count">{u.courses}</p>
                <div className="divider"></div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="rating">{u.rating}</span>
                  <span className="students">👥 {u.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn view-more-btn mt-5 animate-fade">
          VIEW MORE UNIVERSITIES
        </button>
      </div>
    </section>
  );
};

export default UniversitySection;
