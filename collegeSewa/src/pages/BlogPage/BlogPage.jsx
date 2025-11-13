import React from "react";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaArrowRight,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogPage.css";

const BlogPage = () => {
  const blogs = [
    {
      title: "Top 10 Engineering Colleges in Delhi NCR 2025",
      category: "College Reviews",
      date: "March 10, 2025",
      author: "Priya Sharma",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "How to Prepare for NEET 2025: A Complete Strategy",
      category: "Entrance Exams",
      date: "March 8, 2025",
      author: "Dr. Rajesh Kumar",
      img: "https://images.unsplash.com/photo-1503676382389-4809596d5290",
    },
    {
      title: "MBA vs MS: Which is Right for Your Career?",
      category: "Career Guidance",
      date: "March 5, 2025",
      author: "Ankit Verma",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Scholarship Opportunities for Indian Students in 2025",
      category: "Scholarship Info",
      date: "March 2, 2025",
      author: "Neha Patel",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
  ];

  return (
    <section className="blog-page">
      {/* ===== Hero Section ===== */}
      <div className="hero-advanced text-center text-white py-5">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h1 className="fw-bold display-5 mb-3 animate-slide">
            Resources & Insights
          </h1>
          <p className="lead mb-4 text-light">
            Expert advice, college guides, and career tips for students
          </p>
          <div className="search-box mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder=" Search articles..."
            />
          </div>
        </div>
      </div>

      {/* ===== Featured Article ===== */}
      <div className="container my-5">
        <div className="featured-advanced rounded-4 shadow-lg overflow-hidden">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 position-relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                alt="Featured"
                className="img-fluid h-100 object-fit-cover"
              />
              <div className="img-overlay"></div>
              <div className="featured-badge">Featured</div>
            </div>
            <div className="col-md-6 p-4 p-md-5 bg-white">
              <h3 className="fw-bold mb-3 text-dark">
                Complete Guide to Engineering Entrance Exams 2025
              </h3>
              <p className="text-muted">
                Everything you need to know about JEE Main, JEE Advanced, BITSAT,
                and other major engineering entrance exams for 2025 aspirants.
              </p>
              <p className="text-secondary small mb-2">
                <FaCalendarAlt className="me-2" />
                March 15, 2025 • 8 min read
              </p>
              <a href="#" className="btn btn-gradient mt-3 rounded-pill">
                Read More <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Blog Grid & Sidebar ===== */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Blog Grid */}
          <div className="col-lg-8">
            <div className="row g-4">
              {blogs.map((blog, i) => (
                <div className="col-md-6" key={i}>
                  <div className="glass-card h-100">
                    <div className="card-img">
                      <img src={blog.img} alt={blog.title} />
                    </div>
                    <div className="card-body p-3">
                      <span className="badge bg-light text-primary mb-2">
                        {blog.category}
                      </span>
                      <h5 className="fw-bold">{blog.title}</h5>
                      <p className="text-muted small mb-1">
                        <FaCalendarAlt className="me-1" /> {blog.date}
                      </p>
                      <p className="text-secondary small mb-3">
                        By {blog.author}
                      </p>
                      <a href="#" className="text-primary fw-semibold">
                        Read More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="sidebar-card p-4 mb-4">
                <h5 className="fw-bold text-primary mb-3">
                  <FaBookOpen className="me-2" /> Categories
                </h5>
                <ul className="list-unstyled">
                  {[
                    "Entrance Exams (45)",
                    "College Reviews (128)",
                    "Career Guidance (67)",
                    "Study Tips (89)",
                    "Scholarship Info (34)",
                    "Campus Life (56)",
                  ].map((cat, i) => (
                    <li key={i} className="mb-2">
                      <a href="#" className="text-dark text-decoration-none">
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card p-4 mb-4">
                <h5 className="fw-bold text-primary mb-3">
                  <FaStar className="me-2" /> Popular Posts
                </h5>
                <ol className="ps-3">
                  {[
                    "IIT JEE 2025: Important Dates and Exam Pattern",
                    "Campus Life at IIT Delhi: A Student's Perspective",
                    "Top Recruiters at IIMs: Placement Report 2024",
                  ].map((post, i) => (
                    <li key={i} className="mb-2">
                      <a href="#" className="text-dark text-decoration-none">
                        {post}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="sidebar-card text-center p-4">
                <h5 className="fw-bold text-primary mb-3">Stay Updated</h5>
                <p className="text-muted small">
                  Get the latest articles and updates delivered to your inbox.
                </p>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Your email"
                />
                <button className="btn btn-gradient w-100 rounded-pill">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
