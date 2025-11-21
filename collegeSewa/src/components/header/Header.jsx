import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/image/logo1.jpg";
import "./header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("top-colleges");
  const [programSection, setProgramSection] = useState("top-programs");
  const [examSection, setExamSection] = useState("top-exams");

  return (
    <nav className="navbar navbar-expand-lg  main-navbar shadow-sm ">
      <div className="container-fluid px-lg-5">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold me-4" to="/">
          <img src={logo} className="brand-logo" alt="logo" />
          CollegeSewa
        </Link>

        {/* MINI SELECTS */}
        <div className="d-none d-lg-flex">
          <select className="mini-select me-2">
            <option>After 10th</option>
            <option>After 12th</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>MBA</option>
            <option>Engineering</option>
            <option>Medical</option>
          </select>

          <select className="mini-select me-4">
            <option>Select City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Pune</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
          </select>
        </div>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto align-items-lg-center">

            {/* ======================= COLLEGES ======================= */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Colleges
              </a>

              <div className="dropdown-menu mega-menu p-4">
                <div className="row">

                  {/* LEFT MENU */}
                  <div className="col-4 mega-left">
                    <a onMouseEnter={() => setActiveSection("top-colleges")}>Top Colleges</a>
                    <a onMouseEnter={() => setActiveSection("degree-colleges")}>College by Degree</a>
                    <a onMouseEnter={() => setActiveSection("location-colleges")}>College by City</a>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="col-8 mega-right">

                    {activeSection === "top-colleges" && (
                      <div>
                        <h6 className="mega-heading">Top Colleges</h6>
                        <a>Top Engineering Colleges</a>
                        <a>Top MBA Colleges</a>
                        <a>Top Medical Colleges</a>
                        <a>Top Government Colleges</a>
                      </div>
                    )}

                    {activeSection === "degree-colleges" && (
                      <div>
                        <h6 className="mega-heading">Degrees</h6>
                        <a>B.Tech → CSE</a>
                        <a>B.Tech → Mechanical</a>
                        <a>MBA → Finance</a>
                        <a>MBBS → General Medicine</a>
                      </div>
                    )}

                    {activeSection === "location-colleges" && (
                      <div>
                        <h6 className="mega-heading">Cities</h6>
                        <a>Delhi Colleges</a>
                        <a>Mumbai Colleges</a>
                        <a>Pune Colleges</a>
                        <a>Bangalore Colleges</a>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </li>

            {/* ======================= PROGRAMS ======================= */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Programs
              </a>

              <div className="dropdown-menu mega-menu p-4">
                <div className="row">
                  <div className="col-4 mega-left">
                    <a onMouseEnter={() => setProgramSection("top-programs")}>Top Programs</a>
                    <a onMouseEnter={() => setProgramSection("degree-programs")}>Programs by Degree</a>
                    <a onMouseEnter={() => setProgramSection("stream-programs")}>Programs by Stream</a>
                  </div>

                  <div className="col-8 mega-right">

                    {programSection === "top-programs" && (
                      <div>
                        <h6 className="mega-heading">Popular Programs</h6>
                        <a>B.Tech CSE</a>
                        <a>MBA Finance</a>
                        <a>BCA</a>
                        <a>MBBS</a>
                      </div>
                    )}

                    {programSection === "degree-programs" && (
                      <div>
                        <h6 className="mega-heading">Programs by Degree</h6>
                        <a>Bachelor Programs</a>
                        <a>Master Programs</a>
                        <a>Diploma Courses</a>
                      </div>
                    )}

                    {programSection === "stream-programs" && (
                      <div>
                        <h6 className="mega-heading">Streams</h6>
                        <a>Engineering</a>
                        <a>Management</a>
                        <a>Science</a>
                        <a>Arts</a>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </li>

            {/* ======================= EXAMS ======================= */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Exams
              </a>

              <div className="dropdown-menu mega-menu p-4">
                <div className="row">

                  <div className="col-4 mega-left">
                    <a onMouseEnter={() => setExamSection("top-exams")}>Top Exams</a>
                    <a onMouseEnter={() => setExamSection("exam-type")}>Exams by Type</a>
                    <a onMouseEnter={() => setExamSection("exam-stream")}>Exams by Stream</a>
                  </div>

                  <div className="col-8 mega-right">

                    {examSection === "top-exams" && (
                      <div>
                        <h6 className="mega-heading">Popular Exams</h6>
                        <a>JEE Main</a>
                        <a>NEET</a>
                        <a>CAT</a>
                        <a>GATE</a>
                      </div>
                    )}

                    {examSection === "exam-type" && (
                      <div>
                        <h6 className="mega-heading">Exam Types</h6>
                        <a>National Level</a>
                        <a>State Level</a>
                        <a>University Level</a>
                      </div>
                    )}

                    {examSection === "exam-stream" && (
                      <div>
                        <h6 className="mega-heading">Streams</h6>
                        <a>Engineering Exams</a>
                        <a>Medical Exams</a>
                        <a>MBA Exams</a>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            </li>

            {/* LINKS */}

            <li className="nav-item">
              <Link className="nav-link" to="/blog">Compare</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blogs</Link>
            </li>

            
          </ul>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="btns ms-lg-3" to="/Counselling" style={{textDecoration:"none"}}>
                Counselling
              </Link>
            </li>

            {/* PROFILE DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  width="35"
                  height="35"
                  className="rounded-circle profile-icon"
                />
              </a>

              <div className="dropdown-menu dropdown-menu-end profile-dropdown shadow">
                <strong className="pb-2 d-block">Hello, Welcome to CollegeSewa</strong>

                <div className="input-group mb-3">
                  <input className="form-control" placeholder="Search goal..." />
                  <span className="input-group-text"><i className="bi bi-search"></i></span>
                </div>

                <Link className="btn btn-warning w-100 mb-3">Login / Register</Link>

                <div className="reward-box">
                  <div className="fw-bold text-dark">Write a Review & Earn Up to ₹300</div>
                </div>

              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
