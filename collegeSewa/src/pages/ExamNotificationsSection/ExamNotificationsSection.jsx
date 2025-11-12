import React from "react";
import "./examNotificationsSection.css";

const exams = [
  { tag: "Urgent", color: "red", name: "JEE Main", title: "JEE Main 2025 - January Session", status: "Application Open", deadline: "15 Dec 2024", date: "24-30 Jan 2025" },
  { tag: "New", color: "green", name: "NEET UG", title: "NEET UG 2025 Registration", status: "Registration Started", deadline: "20 Dec 2024", date: "5 May 2025" },
  { tag: "Active", color: "blue", name: "CAT", title: "CAT 2025 Notification", status: "Notification Released", deadline: "10 Jan 2025", date: "Last Week Nov 2025" },
  { tag: "Urgent", color: "orange", name: "GATE", title: "GATE 2025 Application", status: "Application Open", deadline: "5 Jan 2025", date: "1-2, 8-9 Feb 2025" },
  { tag: "Active", color: "purple", name: "CLAT", title: "CLAT 2025 Registration", status: "Registration Open", deadline: "15 Jan 2025", date: "Second Week Dec 2025" },
  { tag: "New", color: "teal", name: "CUET UG", title: "CUET UG 2025 Application", status: "Application Started", deadline: "31 Dec 2024", date: "To be announced" },
];

const ExamNotificationsSection = () => {
  return (
    <section className="exam-section">
      <div className="exam-container">
        <h2 className="exam-heading">📢 Important Exam Notifications</h2>
        <p className="exam-sub">Stay updated with latest exam dates and deadlines</p>

        <div className="exam-grid">
          {exams.map((exam, i) => (
            <div className="exam-card" key={i}>
              <span className={`exam-tag ${exam.color}`}>{exam.tag}</span>
              <div className="exam-content">
                <h3 className="exam-name">{exam.name}</h3>
                <h4 className="exam-title">{exam.title}</h4>
                <p className="exam-status">{exam.status}</p>
                <div className="exam-info">
                  <p><strong>Deadline:</strong> {exam.deadline}</p>
                  <p><strong>Exam Date:</strong> {exam.date}</p>
                </div>
                <div className="exam-btns">
                  <button className="modern-btn glow">🔔 Get Alerts</button>
                  <button className="modern-btn glow-outline">📄 Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="exam-footer">
          <button className="modern-btn glow view-all">View All Notifications</button>
        </div>
      </div>
    </section>
  );
};

export default ExamNotificationsSection;
