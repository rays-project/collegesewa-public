import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
 // add your logo here

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="d-flex align-items-center gap-2  mb-5">
          <img
            src="https://via.placeholder.com/45"
            alt="Logo"
            className="logo-img rounded-circle"
          />
          <h4 className="m-0 brand-name">College<span className="sewa">Sewa</span></h4>
        </div>

      <div className="footer-container">
        {/* About */}
        <div className="footer-about">
          <h3>About CollegeSewa</h3>
          <p>
            Your trusted partner in finding the perfect college. We help students make informed decisions about their future.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Top Colleges</li>
            <li>Engineering Colleges</li>
            <li>MBA Colleges</li>
            <li>Medical Colleges</li>
            <li>Compare Colleges</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-resources">
          <h3>Resources</h3>
          <ul>
            <li>Blog & Articles</li>
            <li>Free Counselling</li>
            <li>Student Dashboard</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>+91 1800-123-456</p>
          <p>info@collegesewa.com</p>
          <p>Delhi, India - <span className="map-link">View Map</span></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CollegeSewa. All rights reserved.</p>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
