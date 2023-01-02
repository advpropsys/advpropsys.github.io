import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';
import RL from '../../assets/Resume.pdf'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/uzairali19/',
      name: 'Alexander Malinin',
      role: 'CTO. Hardware.1',
      test: 'I am sure Konstantin will succced in his beginings',
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my collegues</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
          <a href={RL} download className="btn">
             Download Rec Letter
          </a>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials