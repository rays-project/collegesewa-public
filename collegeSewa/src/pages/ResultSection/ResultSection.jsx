import React from "react";
import "./ResultSection.css";

const results = [
  { status: "Expected Soon", exam: "JEE Main 2025", session: "January Session", date: "31 Jan 2025", btn: "Set Reminder" },
  { status: "Declared", exam: "NEET UG 2024", session: "2024", date: "14 Jun 2024", btn: "Check Result" },
  { status: "Expected Soon", exam: "CAT 2024", session: "2024", date: "20 Dec 2024", btn: "Set Reminder" },
  { status: "Upcoming", exam: "GATE 2025", session: "2025", date: "15 Mar 2025", btn: "Set Reminder" },
  { status: "Upcoming", exam: "CUET UG 2025", session: "2025", date: "To be announced", btn: "Set Reminder" },
  { status: "Upcoming", exam: "CLAT 2025", session: "2025", date: "To be announced", btn: "Set Reminder" },
  { status: "Upcoming", exam: "BITSAT 2025", session: "2025", date: "To be announced", btn: "Set Reminder" },
  { status: "Upcoming", exam: "VITEEE 2025", session: "2025", date: "To be announced", btn: "Set Reminder" },
  { status: "Upcoming", exam: "MHT CET 2025", session: "2025", date: "To be announced", btn: "Set Reminder" },
];

const ResultSection = () => {
  return (
    <section className="result-section">
      <div className="container">
        <h2 className="result-title">Check Your Result</h2>
        <p className="result-subtitle">
          Quick access to exam results and score cards
        </p>

        <div className="result-grid">
          {results.map((r, index) => (
            <div className="result-card" key={index}>
              <div className="card-overlay"></div>

              <span className={`status ${r.status.replace(" ", "-").toLowerCase()}`}>
                {r.status}
              </span>

              <h3>{r.exam}</h3>
              <p className="session">{r.session}</p>

              <div className="result-date">
                <strong>Result Date:</strong> {r.date}
              </div>

              <button className="result-btn">{r.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
