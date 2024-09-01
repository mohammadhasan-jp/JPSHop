import React, { useRef } from "react";
import ReactDOM from "react-dom";
import pcBanner1 from './assets/pcBanner1.jpg'
import pcBanner2 from './assets/pcBanner2.webp'
import pcBanner3 from './assets/pcBanner3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
     <div className=" m-auto py-12">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[20rem] rounded-lg"
      >
        <SwiperSlide>
          <img src={pcBanner1} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pcBanner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pcBanner3} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
     </div>
     </>
  );
}
export default Banner;
