import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaComments } from "react-icons/fa";
import "./ContactUsSection.css";

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="contactus-pro-section">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Get in Touch with Us</h2>
          <p className="section-subtitle">
            Have questions? We’d love to hear from you. Send us a message and our team will get back to you soon.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-box h-100 p-4">
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <h6>Call Us</h6>
                  <p>Mon - Sat: 9AM - 8PM<br />+91 1800-123-456</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h6>Email Us</h6>
                  <p>24/7 Support<br />info@collegesewa.com</p>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h6>Visit Us</h6>
                  <p>Head Office<br />Connaught Place, New Delhi - 110001</p>
                </div>
              </div>

              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <h6>Office Hours</h6>
                  <p>Mon - Fri: 9AM - 8PM<br />Sat: 10AM - 6PM<br />Sun: Closed</p>
                </div>
              </div>

              <hr />

              <h6 className="fw-semibold mb-2">Our Offices</h6>
              <ul className="office-list">
                <li><strong>Delhi:</strong> Connaught Place</li>
                <li><strong>Mumbai:</strong> Andheri West</li>
                <li><strong>Bangalore:</strong> Koramangala</li>
              </ul>

              <div className="mt-4">
                <a href="#faq" className="btn btn-light me-2">View FAQ</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="form-box h-100 p-4">
              <h4 className="fw-bold mb-3">Send Us a Message</h4>
              <p className="text-muted mb-4">Fill out the form below and we'll respond within 24 hours.</p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      className="form-control"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="form-control"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="form-control"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      name="subject"
                      className="form-select"
                      required
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Support</option>
                      <option>Partnerships</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us how we can help you..."
                      className="form-control"
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary px-4" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>

              <p className="privacy-note mt-3">We respect your privacy and will never share your information.</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map-wrapper mt-5 text-center">
          <h4 className="fw-bold mb-3">Find Us on Map</h4>
          <p className="text-muted mb-4">Visit our office for in-person consultation</p>
          <div className="map-container">
            <iframe
              title="office-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83901966512!2d77.06889684599999!3d28.5272368"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <a href="#livechat" className="floating-chat">
        <FaComments />
        <span className="d-none d-sm-inline">Live Chat</span>
      </a>
    </section>
  );
}
