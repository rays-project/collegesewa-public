import React, { useState, useMemo } from "react";
import "./UniversitySection.css";

/* ---------- DATA (you can extend these arrays) ---------- */
const onlineUniversities = [
  {
    name: "Amity University Online",
    courses: "78 Courses",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAY5PxIKalj8rj6w1Et43S3sR0Xf2LuRTTQ&s",
    ug: ["BBA", "BCA", "BA"],
    pg: ["MBA", "MCA", "MA"],
  },
  {
    name: "Jain University Online",
    courses: "69 Courses",
    logo: "https://faithoverseas.com/wp-content/uploads/2023/09/jain-university-logo-1.png",
    ug: ["B.Com", "BBA"],
    pg: ["MBA", "M.Com"],
  },
  {
    name: "DPU University Online",
    courses: "38 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/ea/D_Deshpande_University_logo.png",
    ug: ["BBA", "BA"],
    pg: ["MBA", "MPH"],
  },
  {
    name: "Manipal Online",
    courses: "45 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Manipal_University_logo.png/240px-Manipal_University_logo.png",
    ug: ["BCA", "BBA"],
    pg: ["MCA", "MBA"],
  },
  {
    name: "NMIMS Online",
    courses: "30 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NMIMS_logo.png/220px-NMIMS_logo.png",
    ug: ["BBA"],
    pg: ["MBA", "MSc"],
  },
  {
    name: "ICFAI Online",
    courses: "32 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/ICFAI_University_logo.png/220px-ICFAI_University_logo.png",
    ug: ["BA", "BBA"],
    pg: ["MBA", "MCA"],
  },
  {
    name: "Lovely Professional University Online",
    courses: "55 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Lovely_Professional_University_logo.png/220px-Lovely_Professional_University_logo.png",
    ug: ["BCA", "BBA"],
    pg: ["MCA", "MBA"],
  },
  {
    name: "Chandigarh University Online",
    courses: "72 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Chandigarh_University_logo.png",
    ug: ["BCA", "BBA", "B.Com"],
    pg: ["MBA", "MCA"],
  },
];

const distanceUniversities = [
  {
    name: "IGNOU",
    courses: "120 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/IGNOU_logo.png",
    ug: ["BA", "B.Com", "B.Sc"],
    pg: ["MA", "M.Com", "MBA"],
  },
  {
    name: "KSOU",
    courses: "65 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/40/Karnataka_State_Open_University_logo.png",
    ug: ["BA", "BCA"],
    pg: ["MBA", "MCA"],
  },
  {
    name: "Annamalai Distance",
    courses: "52 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Annamalai_University_logo.png",
    ug: ["BA", "BBA"],
    pg: ["MBA", "MSc"],
  },
];

const regularUniversities = [
  {
    name: "IIT Delhi",
    courses: "58 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/IIT_Delhi_Logo.svg",
    ug: ["B.Tech"],
    pg: ["M.Tech", "MBA"],
  },
  {
    name: "DU North Campus",
    courses: "48 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/University_of_Delhi_logo.png",
    ug: ["BA", "B.Com"],
    pg: ["MA", "M.Com"],
  },
  {
    name: "JNU Delhi",
    courses: "30 Courses",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/JNU_logo.png",
    ug: ["BA"],
    pg: ["MA", "MPhil"],
  },
];

/* ---------------- COMPONENT ---------------- */
const UniversitySection = () => {
  const [mode, setMode] = useState("online"); // online | distance | regular
  const [programFilter, setProgramFilter] = useState("ALL"); 
  const [visibleCount, setVisibleCount] = useState(6);

  // pick dataset based on mode
  const list = useMemo(() => {
    if (mode === "online") return onlineUniversities;
    if (mode === "distance") return distanceUniversities;
    return regularUniversities;
  }, [mode]);

  // apply UG / PG / ALL filter
  const filtered = useMemo(() => {
    if (programFilter === "ALL") return list;
    if (programFilter === "UG") {
      return list.filter((u) => u.ug && u.ug.length > 0);
    }
    // PG
    return list.filter((u) => u.pg && u.pg.length > 0);
  }, [list, programFilter]);

  // sliced visible list
  const visibleList = filtered.slice(0, visibleCount);

  // when switching mode or programFilter: reset visibleCount to 6
  

  const canViewMore = visibleCount < filtered.length;

  return (
    <section className="university-section py-5">
      <div className="overlay" />
      <div className="container inner position-relative">
        <h2 className="section-title animate-fade">
          🎓 Explore Top Universities & Programs
        </h2>
        <p className="section-subtitle p-2">
          Compare India’s leading universities across 30+ key factors like placement, reviews & courses.
        </p>

        {/* MODE RADIO */}
        <div className="university-bg">

  <div className="mode-radio-wrapper">
    <label className="pro-radio">
      <input
        type="radio"
        value="online"
        checked={mode === "online"}
        onChange={() => {
          setMode("online");
          setVisibleCount(6);
        }}
      />
      <span className="radio-circle"></span>
      <span className="radio-text">Online</span>
    </label>

    <label className="pro-radio">
      <input
        type="radio"
        value="distance"
        checked={mode === "distance"}
        onChange={() => {
          setMode("distance");
          setVisibleCount(6);
        }}
      />
      <span className="radio-circle"></span>
      <span className="radio-text">Distance</span>
    </label>

    <label className="pro-radio">
      <input
        type="radio"
        value="regular"
        checked={mode === "regular"}
        onChange={() => {
          setMode("regular");
          setVisibleCount(6);
        }}
      />
      <span className="radio-circle"></span>
      <span className="radio-text">Regular</span>
    </label>
  </div>

</div>


        {/* CARD GRID */}
        <div className="row g-4 card-grid">
          {visibleList.length === 0 ? (
            <div className="no-results">No universities match this filter.</div>
          ) : (
            visibleList.map((u, idx) => (
              <div className="col-12 col-sm-6 col-md-4" key={idx}>
                <article className="university-card">
                  <div className="card-top">
                    <div className="uni-logo-box">
                      <img src={u.logo} alt={u.name} className="uni-logo" />
                    </div>
                    <div className="course-chip">{u.courses}</div>
                  </div>

                  <div className="card-body">
                    

                    <div className="program-chips">
                      <div>
                        <span className="chip-title">UG:</span>{" "}
                        {u.ug && u.ug.length ? (
                          u.ug.slice(0, 3).map((p, i) => (
                            <span className="chip" key={i}>
                              {p}
                            </span>
                          ))
                        ) : (
                          <span className="muted">—</span>
                        )}
                      </div>

                      <div className="mt-2">
                        <span className="chip-title">PG:</span>{" "}
                        {u.pg && u.pg.length ? (
                          u.pg.slice(0, 3).map((p, i) => (
                            <span className="chip" key={i}>
                              {p}
                            </span>
                          ))
                        ) : (
                          <span className="muted">—</span>
                        )}
                      </div>
                      <h5 className="uni-name">{u.name}</h5>
                    </div>
                  </div>

                  
                </article>
              </div>
            ))
          )}
        </div>

        {/* VIEW MORE / SHOW LESS */}
        <div className="view-more-row">
          {canViewMore ? (
            <button
              className="view-more-btn"
              onClick={() => setVisibleCount((c) => c + 6)}
            >
              View More ({Math.min(filtered.length - visibleCount, 6)} more)
            </button>
          ) : (
            filtered.length > 6 && (
              <button
                className="view-more-btn secondary"
                onClick={() => setVisibleCount(6)}
              >
                Show Less
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;
