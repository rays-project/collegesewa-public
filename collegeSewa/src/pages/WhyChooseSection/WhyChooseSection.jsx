import React from "react";
import { motion } from "framer-motion";
import "./WhyChooseSection.css";

const features = [
  {
    icon: "🎓",
    title: "10,000+ Verified Colleges",
    desc: "Comprehensive database of accredited institutions",
  },
  {
    icon: "👩‍🎓",
    title: "5 Lakh+ Students Helped",
    desc: "Join thousands of successful students",
  },
  {
    icon: "💬",
    title: "Expert Counselling",
    desc: "Get personalized guidance from education experts",
  },
  {
    icon: "⏰",
    title: "24/7 Support",
    desc: "We’re here whenever you need us",
  },
  {
    icon: "💸",
    title: "100% Free Service",
    desc: "No hidden charges, completely free",
  },
  {
    icon: "📢",
    title: "Real-time Updates",
    desc: "Get the latest admission notifications & deadlines",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="why-section py-5">
      <div className="container text-center">
        <motion.h2
          className="why-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🌟 Why Choose <span>CollegeSewa?</span>
        </motion.h2>
        <motion.p
          className="why-subtitle mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Your trusted partner in finding the perfect college. We make college
          admissions simple, transparent, and stress-free.
        </motion.p>

        <div className="row g-4 justify-content-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="col-md-4 col-sm-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="why-card">
                <div className="icon-circle">{f.icon}</div>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
