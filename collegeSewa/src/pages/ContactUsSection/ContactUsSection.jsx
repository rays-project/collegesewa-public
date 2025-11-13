import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaComments,
} from "react-icons/fa";
import "./ContactUsSection.css";

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert("✅ Message sent successfully! We’ll get back to you shortly.");
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section className="contact-section-adv">
      {/* Hero */}
      <div className="contact-hero-adv text-center text-white py-5">
        <div className="container">
          <h1 className="fw-bold display-5 mb-2">Get in Touch with Us</h1>
          <p className="lead mb-0">
            Have questions? We’d love to hear from you — our support team is
            here 24/7.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row gy-4 align-items-center">
          {/* ====== Left Info Section ====== */}
          <div className="col-lg-5">
            <div className="info-card-adv p-4">
              <h4 className="fw-bold mb-3 text-primary">Contact Information</h4>
              <p className="text-muted mb-4">
                Reach out to us using the details below or visit one of our
                offices.
              </p>

              <div className="info-list">
                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <div>
                    <h6>Call Us</h6>
                    <p>Mon–Sat: 9AM – 8PM<br />+91 1800-123-456</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h6>Email Us</h6>
                    <p>info@collegesewa.com<br />support@collegesewa.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h6>Visit Us</h6>
                    <p>Delhi, India — 110001</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <h6>Office Hours</h6>
                    <p>Mon–Fri: 9AM – 8PM<br />Sat: 10AM – 6PM</p>
                  </div>
                </div>
              </div>

              <div className="office-branches mt-3">
                <h6 className="fw-bold text-primary">Our Offices</h6>
                <ul>
                  <li><strong>Delhi HQ</strong> — Connaught Place</li>
                  <li><strong>Mumbai</strong> — Andheri West</li>
                  <li><strong>Bangalore</strong> — Koramangala</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====== Right Form Section ====== */}
          <div className="col-lg-7">
            <div className="glass-card p-4">
              <h4 className="fw-bold mb-3 text-center">Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>General Inquiry</option>
                      <option>Admission Help</option>
                      <option>Partnership</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button
                      type="submit"
                      className="btn btn-primary px-4"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-5 map-container">
           <iframe
              title="office-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83901966512!2d77.06889684599999!3d28.5272368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f0a1f1f7f%3A0x2d6d6b6a6b6b6b6b!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
      </div>

      {/* Floating Chat Button */}
      <a href="#chat" className="floating-chat-adv" title="Live Chat">
        <FaComments /> <span>Chat</span>
      </a>
    </section>
  );
}
