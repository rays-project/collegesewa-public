import React, { useState } from "react";
import { FaPhoneAlt, FaVideo, FaComments, FaUserTie, FaBolt, FaUserCheck, FaClock } from "react-icons/fa";
import "./ExpertCounsellingSection.css";

export default function ExpertCounsellingSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", city: "", mode: "", message: "", time: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
    setForm({ name: "", phone: "", email: "", course: "", city: "", mode: "", message: "", time: "" });
  };

  return (
    <section className="counselling-section">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-title">Expert Counselling Services</h2>
          <p className="section-subtitle">
            Get personalized guidance from our expert counselors to make the right college choice.
          </p>
          <div className="cta-buttons mt-3">
            <a href="tel:+911800123456" className="btn btn-primary px-4 py-2">Call Us Now</a>
            <a href="#book" className="btn btn-outline-primary px-4 py-2 ms-2">Book Appointment</a>
          </div>
        </div>

        {/* Modes */}
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="mode-card">
              <FaPhoneAlt className="mode-icon phone" />
              <h5>Phone Counselling</h5>
              <p>Connect with our experts via phone call</p>
              <ul>
                <li>Instant callback</li>
                <li>30–45 min session</li>
                <li>Free consultation</li>
              </ul>
              <button className="btn btn-outline-primary">Request Callback</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mode-card">
              <FaVideo className="mode-icon video" />
              <h5>Video Counselling</h5>
              <p>Face-to-face guidance through video call</p>
              <ul>
                <li>Screen sharing</li>
                <li>60 min session</li>
                <li>Document review</li>
              </ul>
              <button className="btn btn-outline-primary">Book Video Call</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mode-card">
              <FaComments className="mode-icon chat" />
              <h5>Chat Counselling</h5>
              <p>Get instant answers via chat support</p>
              <ul>
                <li>24/7 availability</li>
                <li>Instant responses</li>
                <li>Share documents</li>
              </ul>
              <button className="btn btn-outline-primary">Start Chat</button>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="why-choose mt-5">
          <h3 className="text-center mb-4">Why Choose Our Counselling Services</h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3 col-6">
              <div className="why-box">
                <FaUserTie />
                <h6>Expert Counselors</h6>
                <p>500+ certified education counselors</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="why-box">
                <FaBolt />
                <h6>Proven Track Record</h6>
                <p>50,000+ successful admissions</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="why-box">
                <FaUserCheck />
                <h6>Personalized Guidance</h6>
                <p>Customized recommendations</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="why-box">
                <FaClock />
                <h6>Quick Response</h6>
                <p>Get answers within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="form-section mt-5" id="book">
          <h3 className="text-center mb-4">Request Free Counselling</h3>
          <form onSubmit={handleSubmit} className="counselling-form mx-auto">
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input type="text" name="course" placeholder="Select Course" value={form.course} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <input type="text" name="city" placeholder="Delhi, Mumbai, etc." value={form.city} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <select name="mode" value={form.mode} onChange={handleChange} required>
                  <option value="">Select Counselling Mode</option>
                  <option>Phone Call</option>
                  <option>Video Call</option>
                  <option>Chat Support</option>
                </select>
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Tell us about your requirements or concerns..." value={form.message} onChange={handleChange}></textarea>
              </div>
              <div className="col-12">
                <select name="time" value={form.time} onChange={handleChange}>
                  <option value="">Preferred Time Slot</option>
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5 py-2 mt-2">Submit Request</button>
              </div>
            </div>
          </form>
        </div>

        {/* FAQ */}
        <div className="faq-section mt-5">
          <h3 className="text-center mb-4">Frequently Asked Questions</h3>
          <div className="faq">
            <details open>
              <summary>Is counselling really free?</summary>
              <p>Yes, our basic counselling services are completely free. Every student deserves expert guidance for their career.</p>
            </details>
            <details>
              <summary>How long does a counselling session last?</summary>
              <p>Phone sessions last 30–45 minutes, video sessions up to 60 minutes to address all your queries.</p>
            </details>
            <details>
              <summary>Can I request a specific counselor?</summary>
              <p>Yes, if you've worked with a counselor before, you can request them when booking your session.</p>
            </details>
            <details>
              <summary>What information should I prepare for the session?</summary>
              <p>Keep your academic records, exam scores, and preferred courses ready for targeted guidance.</p>
            </details>
          </div>
        </div>

      </div>
    </section>
  );
}
