import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ExpertsSection.css";

const experts = [
  {
    name: "Dr. Rajesh Kumar",
    rating: 4.9,
    title: "IIT Alumni & Career Counselor",
    experience: "15+ Years",
    students: "👥 5000+",
    field: "Engineering & Technology",
    quote:
      "Helping students find their perfect career path has been my passion for over 15 years. Every student deserves personalized guidance.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Prof. Meera Sharma",
    rating: 4.8,
    title: "MBA Admission Expert",
    experience: "12+ Years",
    students: "👥 3500+",
    field: "Business & Management",
    quote:
      "With experience in top B-schools, I guide students through the complex MBA admission process with proven strategies.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Amit Verma",
    rating: 4.9,
    title: "Medical Education Consultant",
    experience: "10+ Years",
    students: "👥 4200+",
    field: "MBBS & Medical Courses",
    quote:
      "Navigating NEET and medical admissions can be challenging. I ensure every aspiring doctor gets the right guidance.",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Ms. Priya Patel",
    rating: 4.7,
    title: "Study Abroad Specialist",
    experience: "8+ Years",
    students: "👥 2800+",
    field: "International Education",
    quote:
      "Making global education accessible for Indian students. From applications to visa - complete support for your dream university.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Suresh Menon",
    rating: 4.9,
    title: "Engineering Admission Expert",
    experience: "18+ Years",
    students: "👥 6200+",
    field: "IIT/NIT Admissions",
    quote:
      "Specialized in IIT and NIT admissions with proven track record of helping students achieve their engineering dreams.",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

const ExpertsSection = () => {
  return (
    <section className="experts-section">
      <div className="container">
        <h2 className="experts-title">Trusted Voices of Our Experts</h2>
        <p className="experts-subtitle">
          Meet our experienced counselors who have guided thousands of students to their dream colleges
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {experts.map((expert, i) => (
            <SwiperSlide key={i}>
              <div className="expert-card">
                <div className="expert-img-wrapper">
                  <img src={expert.img} alt={expert.name} className="expert-img" />
                </div>
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-title">{expert.title}</p>
                <div className="expert-stats">
                  <span>⭐ {expert.rating}</span>
                  <span>{expert.experience}</span>
                  <span>{expert.students}</span>
                </div>
                <p className="expert-quote">"{expert.quote}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExpertsSection;
