import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";
import { Link } from "react-router-dom";
// import logo from '../../assets/image/logo1.jpg'

const Header = () => {
  const universityData = {
    Engineering: {
      programs: ["B.Tech", "M.Tech", "B.E.", "Diploma"],
      specializations: [
        "Computer Science",
        "Mechanical",
        "Electrical",
        "Civil",
        "Electronics",
        "IT",
      ],
    },
    Medical: {
      programs: ["MBBS", "BDS", "Nursing", "Pharmacy"],
      specializations: ["Cardiology", "Neurology", "Surgery", "Pediatrics"],
    },
    Management: {
      programs: ["BBA", "MBA", "PGDM"],
      specializations: ["Finance", "Marketing", "HR", "Operations"],
    },
    "Arts & Science": {
      programs: ["BA", "BSc", "MA", "MSc"],
      specializations: ["Physics", "Chemistry", "English", "Economics"],
    },
    Law: {
      programs: ["LLB", "LLM"],
      specializations: ["Criminal Law", "Corporate Law", "Civil Law"],
    },
    Architecture: {
      programs: ["B.Arch", "M.Arch"],
      specializations: ["Urban Design", "Landscape", "Interior Design"],
    },
  };

  // ======= Data for Exams Dropdown =======
  const examData = {
    Engineering: {
      exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE", "KCET"],
      features: ["Exam Dates", "Syllabus", "Previous Papers", "Mock Tests", "Cutoffs"],
    },
    Medical: {
      exams: ["NEET UG", "AIIMS", "JIPMER"],
      features: ["Exam Dates", "Syllabus", "Mock Tests", "Cutoffs"],
    },
    Management: {
      exams: ["CAT", "XAT", "MAT", "SNAP"],
      features: ["Exam Dates", "Syllabus", "Previous Papers", "Mock Tests"],
    },
    Law: {
      exams: ["CLAT", "AILET", "LSAT"],
      features: ["Exam Dates", "Syllabus", "Mock Tests"],
    },
    Design: {
      exams: ["NID DAT", "UCEED", "CEED"],
      features: ["Exam Dates", "Syllabus", "Cutoffs"],
    },
  };

  // ======= Data for Programs Dropdown =======
  const programData = {
    "UG Courses": {
      programs: ["B.Tech / B.E.", "BBA", "B.Sc", "BA", "B.Com", "BCA", "LLB"],
      studyModes: ["Full-time", "Part-time", "Distance Learning", "Online"],
    },
    "PG Courses": {
      programs: ["M.Tech", "MBA", "M.Sc", "MA", "LLM"],
      studyModes: ["Full-time", "Part-time", "Online"],
    },
    Diploma: {
      programs: ["Diploma in Engineering", "Diploma in Management", "Diploma in Design"],
      studyModes: ["Full-time", "Distance Learning"],
    },
    Doctoral: {
      programs: ["Ph.D.", "Doctor of Management", "Doctor of Law"],
      studyModes: ["Full-time", "Part-time"],
    },
    Certificate: {
      programs: ["Certificate in Data Science", "Certificate in Business Analytics"],
      studyModes: ["Online", "Distance Learning"],
    },
  };

  // ======= State Management =======
  const [activeStream, setActiveStream] = useState("Engineering");
  const [activeCategory, setActiveCategory] = useState("Engineering");
  const [activeLevel, setActiveLevel] = useState("UG Courses");

  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open

  const dropdownRefs = {
    universities: useRef(null),
    exams: useRef(null),
    programs: useRef(null),
  };

  // ======= Handle Outside Click =======
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.universities.current &&
        !dropdownRefs.universities.current.contains(event.target) &&
        dropdownRefs.exams.current &&
        !dropdownRefs.exams.current.contains(event.target) &&
        dropdownRefs.programs.current &&
        !dropdownRefs.programs.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
   
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-3 py-2 shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">
          {/* <img
              src={logo}
              alt="Logo"
              className="logo-img rounded-circle"
              /> */}

              CollegeSewa
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* B.Tech Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="btechDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                B.Tech
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">B.Tech</a></li>
                <li><a className="dropdown-item" href="#">MBA</a></li>
                <li><a className="dropdown-item" href="#">MCA</a></li>
                <li><a className="dropdown-item" href="#">BCA</a></li>
              </ul>
            </li>

            {/* City Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="cityDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Delhi
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Punjab</a></li>
                <li><a className="dropdown-item" href="#">Uttar Pradesh</a></li>
                <li><a className="dropdown-item" href="#">Assam</a></li>
                <li><a className="dropdown-item" href="#">Gujarat</a></li>
              </ul>
            </li>

            {/* Universities Mega Dropdown */}
            <li className="nav-item dropdown mega-parent" ref={dropdownRefs.universities}>
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === "universities" ? null : "universities");
                }}
              >
                Universities
              </a>

              {openDropdown === "universities" && (
                <div className="dropdown-menu show p-3 mega-dropdown">
                  <div className="table-responsive">
                    <table className="table table-borderless m-0">
                      <thead>
                        <tr>
                          <th>Streams</th>
                          <th>Programs</th>
                          <th>Specializations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {Object.keys(universityData).map((stream) => (
                              <button
                                key={stream}
                                className={`dropdown-link btn-sm w-100 text-start mb-1 ${
                                  activeStream === stream ? "active-stream" : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveStream(stream);
                                }}
                              >
                                {stream}
                              </button>
                            ))}
                          </td>
                          <td>
                            {universityData[activeStream].programs.map((program, i) => (
                              <a
                                key={i}
                                href="#"
                                className="dropdown-link d-block mb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {program}
                              </a>
                            ))}
                          </td>
                          <td>
                            {universityData[activeStream].specializations.map((spec, i) => (
                              <a
                                key={i}
                                href="#"
                                className="dropdown-link d-block mb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {spec}
                              </a>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </li>

            {/* ========== EXAMS ========== */}
            <li className="nav-item dropdown mega-parent" ref={dropdownRefs.exams}>
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === "exams" ? null : "exams");
                }}
              >
                Exams
              </a>

              {openDropdown === "exams" && (
                <div className="dropdown-menu show p-3 mega-dropdown">
                  <div className="table-responsive">
                    <table className="table table-borderless m-0">
                      <thead>
                        <tr>
                          <th>Categories</th>
                          <th>Exams</th>
                          <th>Features</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {Object.keys(examData).map((category) => (
                              <button
                                key={category}
                                className={`dropdown-link btn-sm w-100 text-start mb-1 ${
                                  activeCategory === category ? "active-stream" : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveCategory(category);
                                }}
                              >
                                {category}
                              </button>
                            ))}
                          </td>
                          <td>
                            {examData[activeCategory].exams.map((exam, i) => (
                              <a
                                key={i}
                                href="#"
                                className="dropdown-link d-block mb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {exam}
                              </a>
                            ))}
                          </td>
                          <td>
                            {examData[activeCategory].features.map((feature, i) => (
                              <a
                                key={i}
                                href="#"
                                className="dropdown-link d-block mb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {feature}
                              </a>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </li>

            {/* ========== PROGRAMS ========== */}
            <li className="nav-item dropdown mega-parent" ref={dropdownRefs.programs}>
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === "programs" ? null : "programs");
                }}
              >
                Programs
              </a>

              {openDropdown === "programs" && (
                <div className="dropdown-menu show p-3 mega-dropdown">
                  <div className="table-responsive">
                    <table className="table table-borderless m-0">
                      <thead>
                        <tr>
                          <th>Course Level</th>
                          <th>Programs</th>
                          <th>Study Mode</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {Object.keys(programData).map((level) => (
                              <button
                                key={level}
                                className={`dropdown-link btn-sm w-100 text-start mb-1 ${
                                  activeLevel === level ? "active-stream" : ""
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveLevel(level);
                                }}
                              >
                                {level}
                              </button>
                            ))}
                          </td>
                          <td>
                            {programData[activeLevel].programs.map((program, i) => (
                              <a
                                key={i}
                                href="#"
                                className="dropdown-link d-block mb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {program}
                              </a>
                            ))}
                          </td>
                          <td>
                            {programData[activeLevel].studyModes.map((mode, i) => (
                              <a
                                key={i}
                                href="#"
                                className="dropdown-link d-block mb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {mode}
                              </a>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </li>

            {/* More Mega Dropdown */}
            <li className="nav-item dropdown mega-parent">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="moreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <div className="dropdown-menu p-3 mega-dropdown">
                <div className="table-responsive">
                  <table className="table table-borderless m-0">
                    <thead>
                      <tr>
                        <th>Resources</th>
                        <th>Why CollegeSewa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Link to="/contact" className="dropdown-link" href="#">Contact Us</Link></td>
                        <td><p >10,000+ Colleges</p></td>
                      </tr>
                      <tr>
                        <td><Link className="dropdown-link" href="#">Blogs</Link></td>
                        <td><p >Expert Support</p></td>
                      </tr>
                      <tr>
                        <td><Link className="dropdown-link" href="#">Ask Question</Link></td>
                        <td><p >Real Reviews</p></td>
                      </tr>
                      <tr>
                        <td><Link className="dropdown-link" href="#">Video Call</Link></td>
                        <td><p>Free Guidance</p></td>
                      </tr>
                      <tr>
                        <td><Link className="dropdown-link" href="#">Chat</Link></td>
                        <td><p>5L+ Students</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>

            {/* Compare and Counselling */}
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Compare</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Counselling</a>
            </li>
          </ul>

          {/* Login Button */}
          <div className="d-flex justify-content-center">
            <Link to="/login" style={{textDecoration:'none'}} className="btn1 btn-login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
