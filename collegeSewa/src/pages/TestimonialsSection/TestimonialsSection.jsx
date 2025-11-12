import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "IIT Delhi - B.Tech Computer Science",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Priya Patel",
    course: "IIM Ahmedabad - MBA",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslgCuD5qWrnfLWGVjh0yuPIQxU6G3g8HV8Q&s",
  },
  {
    name: "Amit Kumar",
    course: "AIIMS Delhi - MBBS",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.freepik.com/free-photo/school-boy-with-book-park_23-2148199240.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Sneha Reddy",
    course: "BITS Pilani - B.Tech Electronics",
    video: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://thumbs.dreamstime.com/b/female-college-student-happy-girl-european-university-scholarship-uni-91749887.jpg",
  },
];

const FullVideoTestimonials = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="full-video-testimonials">
      <div className="container">
        <h2 className="section-title">Student's Testimonials</h2>
        <p className="section-subtitle">
          Hear from our successful students who found their perfect college match
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((student, index) => (
            <SwiperSlide key={index}>
              <div className="video-card">
                {playingIndex === index ? (
                  <video
                    src={student.video}
                    controls
                    autoPlay
                    className="testimonial-video"
                  />
                ) : (
                  <div
                    className="video-thumbnail"
                    style={{ backgroundImage: `url(${student.thumbnail})` }}
                    onClick={() => setPlayingIndex(index)}
                  >
                    <div className="play-overlay">&#9658;</div>
                  </div>
                )}
                <div className="student-info">
                  <h3>{student.name}</h3>
                  <p>{student.course}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FullVideoTestimonials;
