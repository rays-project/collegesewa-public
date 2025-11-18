import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

const data = [
  {
    name: "Rahul Sharma",
    course: "IIT Delhi - B.Tech CSE",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    img: "https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg",
  },
  {
    name: "Priya Patel",
    course: "IIM Ahmedabad - MBA",
    video: "https://www.w3schools.com/html/movie.mp4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslgCuD5qWrnfLWGVjh0yuPIQxU6G3g8HV8Q",
  },
  {
    name: "Amit Kumar",
    course: "AIIMS Delhi - MBBS",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    img: "https://img.freepik.com/free-photo/school-boy-with-book-park_23-2148199240.jpg",
  },
];

const VideoTestimonials = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openModal = (url) => {
    setActiveVideo(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveVideo("");
  };

  return (
    <section className="testi-wrapper">
      <h2 className="testi-title">Student Testimonials</h2>
      <p className="testi-sub">Real stories from our successful students</p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        className="testi-slider custom-swiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="testi-card">

              {/* IMAGE */}
              <div
                className="testi-img"
                style={{ backgroundImage: `url(${item.img})` }}
                onClick={() => openModal(item.video)}
              >
                <div className="testi-overlay"></div>

                <div className="play-btn">▶</div>

                <div className="bottom-info">
                  <h3>{item.name}</h3>
                  <p>{item.course}</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL */}
      {showModal && (
        <div className="modal-bg" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
            <video src={activeVideo} controls autoPlay className="modal-video" />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
