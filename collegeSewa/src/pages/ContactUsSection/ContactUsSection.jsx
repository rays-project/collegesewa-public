import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaComments } from "react-icons/fa";
import "./ContactUsSection.css";

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert("Message sent! We will contact you within 24 hours.");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row gy-4 align-items-center">

          {/* Left Section */}
          <div className="col-lg-6">
            <div className="card contact-card p-4">
              <div className="card-body">
                <div className="contact-hero mb-3">
                  <h3>Get in Touch with Us</h3>
                  <p className="small-note">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="row gy-3">
                  <div className="col-sm-6">
                    <div className="contact-info">
                      <FaPhoneAlt className="contact-icon" />
                      <div>
                        <h6>Call Us</h6>
                        <small>Mon-Sat: 9AM - 8PM<br />+91 1800-123-456</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="contact-info">
                      <FaEnvelope className="contact-icon" />
                      <div>
                        <h6>Email Us</h6>
                        <small>24/7 Support<br />info@collegesewa.com</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="contact-info">
                      <FaMapMarkerAlt className="contact-icon" />
                      <div>
                        <h6>Visit Us</h6>
                        <small>Head Office<br />Delhi, India - 110001</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="contact-info">
                      <FaClock className="contact-icon" />
                      <div>
                        <h6>Office Hours</h6>
                        <small>Mon - Fri: 9AM - 8PM<br />Sat: 10AM - 6PM</small>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <h6>Our Offices</h6>
                <ul className="list-unstyled office-list">
                  <li><strong>Head Office - Delhi</strong> — Connaught Place, New Delhi - 110001</li>
                  <li><strong>Branch Office - Mumbai</strong> — Andheri West, Mumbai - 400053</li>
                  <li><strong>Branch Office - Bangalore</strong> — Koramangala, Bangalore - 560034</li>
                </ul>

                <div className="mt-3 d-flex gap-2 flex-wrap">
                  <a href="#faq" className="btn btn-outline-secondary btn-sm">View FAQ</a>
                  <a href="#map" className="btn btn-outline-secondary btn-sm">Find Us on Map</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div className="card contact-card p-4">
              <div className="card-body">
                <h5 className="mb-3">Send us a Message</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <label className="form-label">Your full name</label>
                      <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Your phone number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Select a subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className="form-select" required>
                        <option value="">Choose...</option>
                        <option>General question</option>
                        <option>Admissions</option>
                        <option>Support</option>
                        <option>Partnerships</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Tell us how we can help you...</label>
                      <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required></textarea>
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                      <small className="small-note">We respect your privacy and will never share your information.</small>
                      <button type="submit" className="btn btn-primary" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>

                <hr />
                <div className="map-responsive mt-3" id="map">
                  <iframe
                    title="office-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83901966512!2d77.06889684599999!3d28.5272368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f0a1f1f7f%3A0x2d6d6b6a6b6b6b6b!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <a href="#livechat" className="floating-chat" title="Live Chat">
        <FaComments /> <span className="d-none d-sm-inline">Live Chat</span>
      </a>
    </section>
  );
}
