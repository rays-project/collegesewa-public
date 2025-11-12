import React from "react";
import "./QuickResultSection.css";

const QuickResultSection = () => {
  return (
    <section className="quick-result-section">
      {/* Background gradient or image */}
      <div className="qr-bg"></div>

      <div className="container text-center">
        <h2 className="qr-title">🎯 Quick Result Finder</h2>
        <p className="qr-subtitle">
          Enter your roll number to check your exam result instantly
        </p>

        <div className="qr-form">
          <input type="text" placeholder="Enter Roll Number" className="qr-input" />
          <select className="qr-select">
            <option value="">Select Exam</option>
            <option value="jee">JEE Main 2025</option>
            <option value="neet">NEET UG 2025</option>
            <option value="cat">CAT 2025</option>
            <option value="gate">GATE 2024</option>
          </select>
          <button className="qr-btn">Check Result</button>
        </div>
      </div>
    </section>
  );
};

export default QuickResultSection;
