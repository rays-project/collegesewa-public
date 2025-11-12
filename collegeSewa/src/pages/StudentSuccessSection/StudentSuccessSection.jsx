import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./studentSuccessSection.css";

const students = [
  { 
    name: "Amit Sharma", 
    company: "Google", 
    college: "IIT Delhi",
    img: "https://randomuser.me/api/portraits/men/32.jpg", 
    logo: "https://cdn-icons-png.flaticon.com/512/270/270798.png" 
  },
  { 
    name: "Priya Singh", 
    company: "Amazon", 
    college: "BITS Pilani",
    img: "https://randomuser.me/api/portraits/women/65.jpg", 
    logo: "https://cdn-icons-png.flaticon.com/512/882/882704.png" 
  },
  { 
    name: "Rohit Kumar", 
    company: "Infosys", 
    college: "NIT Trichy",
    img: "https://randomuser.me/api/portraits/men/44.jpg", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Infosys_logo.svg" 
  },
  { 
    name: "Neha Verma", 
    company: "Deloitte", 
    college: "Delhi University",
    img: "https://randomuser.me/api/portraits/women/68.jpg", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Deloitte.svg" 
  },
  { 
    name: "Vikas Patel", 
    company: "TCS", 
    college: "Anna University",
    img: "https://randomuser.me/api/portraits/men/41.jpg", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tata_Consultancy_Services_Logo.svg" 
  },
  { 
    name: "Anjali Gupta", 
    company: "Microsoft", 
    college: "IIT Bombay",
    img: "https://randomuser.me/api/portraits/women/24.jpg", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
  },
  { 
    name: "Saurabh Mishra", 
    company: "Accenture", 
    college: "SRM University",
    img: "https://randomuser.me/api/portraits/men/56.jpg", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Accenture.svg" 
  },
  { 
    name: "Pooja Sharma", 
    company: "Adobe", 
    college: "Amity University",
    img: "https://randomuser.me/api/portraits/women/58.jpg", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Corporate_Logo.png" 
  },
];

const StudentSuccessSection = () => {
  return (
    <section className="student-success-section">
      <div className="animated-bg"></div>
      <div className="container text-center position-relative">
        <h2 className="success-title mb-3">
          <span>100000+</span> Students ne Chuna
        </h2>
        <p className="success-subtitle">
          Sahi Course, Sahi University aur Career Path
        </p>

        {/* Top Row - Left to Right */}
        <div className="scroll-row left-right">
          <div className="scroll-track">
            {[...students, ...students].map((s, i) => (
              <div className="student-card" key={i}>
                <div className="student-photo">
                  <img src={s.img} alt={s.name} className="student-img" />
                </div>
                <h5>{s.name}</h5>
                <p className="college-name">🎓 {s.college}</p>
                <div className="company-info">
                  <img src={s.logo} alt={s.company} className="company-logo" />
                  <span>{s.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Right to Left */}
        <div className="scroll-row right-left">
          <div className="scroll-track">
            {[...students.reverse(), ...students].map((s, i) => (
              <div className="student-card" key={i}>
                <div className="student-photo">
                  <img src={s.img} alt={s.name} className="student-img" />
                </div>
                <h5>{s.name}</h5>
                <p className="college-name">🎓 {s.college}</p>
                <div className="company-info">
                  <img src={s.logo} alt={s.company} className="company-logo" />
                  <span>{s.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessSection;
