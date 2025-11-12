import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-3 py-2 shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">
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
            <li className="nav-item dropdown mega-parent">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="universityDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Universities
              </a>
              <div className="dropdown-menu p-3 mega-dropdown">
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
                        <td><a className="dropdown-link" href="#">Engineering</a></td>
                        <td><a className="dropdown-link" href="#">B.Tech</a></td>
                        <td><a className="dropdown-link" href="#">Computer Science</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Medical</a></td>
                        <td><a className="dropdown-link" href="#">M.Tech</a></td>
                        <td><a className="dropdown-link" href="#">Mechanical</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Management</a></td>
                        <td><a className="dropdown-link" href="#">B.E.</a></td>
                        <td><a className="dropdown-link" href="#">Electrical</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Arts & Science</a></td>
                        <td><a className="dropdown-link" href="#">Diploma</a></td>
                        <td><a className="dropdown-link" href="#">Civil</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Law</a></td>
                        <td></td>
                        <td><a className="dropdown-link" href="#">Electronics</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Architecture</a></td>
                        <td></td>
                        <td><a className="dropdown-link" href="#">IT</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>

            {/* Exams Mega Dropdown */}
            <li className="nav-item dropdown mega-parent">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="examsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Exams
              </a>
              <div className="dropdown-menu p-3 mega-dropdown">
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
                        <td><a className="dropdown-link" href="#">Engineering</a></td>
                        <td><a className="dropdown-link" href="#">JEE Main</a></td>
                        <td><a className="dropdown-link" href="#">Exam Dates</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Medical</a></td>
                        <td><a className="dropdown-link" href="#">JEE Advanced</a></td>
                        <td><a className="dropdown-link" href="#">Syllabus</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Management</a></td>
                        <td><a className="dropdown-link" href="#">BITSAT</a></td>
                        <td><a className="dropdown-link" href="#">Previous Papers</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Law</a></td>
                        <td><a className="dropdown-link" href="#">VITEEE</a></td>
                        <td><a className="dropdown-link" href="#">Mock Tests</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Design</a></td>
                        <td><a className="dropdown-link" href="#">SRMJEEE</a></td>
                        <td><a className="dropdown-link" href="#">Cutoffs</a></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><a className="dropdown-link" href="#">KCET</a></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>

            {/* Programs Mega Dropdown */}
            <li className="nav-item dropdown mega-parent">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="programsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <div className="dropdown-menu p-3 mega-dropdown">
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
                        <td><a className="dropdown-link" href="#">UG Courses</a></td>
                        <td><a className="dropdown-link" href="#">B.Tech / B.E.</a></td>
                        <td><a className="dropdown-link" href="#">Full-time</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">PG Courses</a></td>
                        <td><a className="dropdown-link" href="#">MBBS</a></td>
                        <td><a className="dropdown-link" href="#">Part-time</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Diploma</a></td>
                        <td><a className="dropdown-link" href="#">BBA</a></td>
                        <td><a className="dropdown-link" href="#">Distance Learning</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Doctoral</a></td>
                        <td><a className="dropdown-link" href="#">B.Sc</a></td>
                        <td><a className="dropdown-link" href="#">Online</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Certificate</a></td>
                        <td><a className="dropdown-link" href="#">BA</a></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><a className="dropdown-link" href="#">B.Com</a></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><a className="dropdown-link" href="#">BCA</a></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><a className="dropdown-link" href="#">LLB</a></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
                        <td><a className="dropdown-link" href="#">Contact Us</a></td>
                        <td><a className="dropdown-link" href="#">10,000+ Colleges</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Blogs</a></td>
                        <td><a className="dropdown-link" href="#">Expert Support</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Ask Question</a></td>
                        <td><a className="dropdown-link" href="#">Real Reviews</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Video Call</a></td>
                        <td><a className="dropdown-link" href="#">Free Guidance</a></td>
                      </tr>
                      <tr>
                        <td><a className="dropdown-link" href="#">Chat</a></td>
                        <td><a className="dropdown-link" href="#">5L+ Students</a></td>
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
