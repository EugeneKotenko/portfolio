import React from 'react';
import "./Testimonials.scss";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
SwiperCore.use([Autoplay]);

const clients = [
  {
    avatar: AVTR1,
    name: "Eliza",
    review: "Yevhenii impresses with his web development skills. His understanding of HTML, CSS and JavaScript allows him to create beautiful and interactive web pages. It also works effectively with third-party libraries and frameworks like React to enhance the user experience. I am confident in his ability to create innovative web projects and recommend him as a web development specialist."
  },
  {
    avatar: AVTR2,
    name: "Ariana",
    review: "Yevhenii has a deep understanding of JavaScript and knows how to use various frameworks and libraries. He quickly implemented my project with high quality user interface and functionality. I recommend him as an experienced app developer for any project!"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
        modules={[Mousewheel, Pagination]}
        loop={true}>
        {clients.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt={`Avatar ${index + 1}`} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
