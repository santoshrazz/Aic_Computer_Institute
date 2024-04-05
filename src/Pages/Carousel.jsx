import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";
import Image1 from "../Assets/Coaching_Image/img1.jpg";
import Image2 from "../Assets/Coaching_Image/img2.jpg";
import Image3 from "../Assets/Coaching_Image/img3.jpg";
import Image4 from "../Assets/Coaching_Image/img4.jpg";
import Image5 from "../Assets/Coaching_Image/img5.jpg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper carousel_container w-10/12 rounded-md"
      >
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
