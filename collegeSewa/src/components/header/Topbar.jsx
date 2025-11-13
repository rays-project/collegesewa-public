import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../components/header/topbar.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/image/logo1.jpg'
import { Link } from "react-router-dom";

const TopbarNavbar = () => {
  return (
    <>
      {/* 🔹 Topbar */}
      <div className="topbar py-2 px-4 d-flex justify-content-between align-items-center">
        {/* Logo */}
       
          <Link to='/' className="d-flex align-items-center gap-2" style={{textDecoration:'none'}}>
          <img
            src={logo}
            alt="Logo"
            className="logo-img rounded-circle"
          />
          <h3 className="m-0 brand-name">College<span className="sewa">Sewa</span></h3></Link>
       

        {/* Search Bar */}
        <form className="search-bar d-none d-md-flex mx-auto search-form">
          <input
            className="form-control search-input"
            type="search"
            placeholder="  Search colleges, courses..."
            aria-label="Search"
          />
          <button className="btn1 btn-search" type="submit">
            Search
          </button>
        </form>

        {/* Social Icons */}
        <div className="social-icons d-flex align-items-center gap-3">
          <a href="#" className="icon"><FaFacebookF /></a>
          <a href="#" className="icon"><FaTwitter /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaLinkedinIn /></a>
        </div>
      </div>
    </>
  );
};

export default TopbarNavbar;
