import React, { useRef } from "react";
import ReactDOM from "react-dom";
import mainBanner from '../assets/mainbanner.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

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
     <div className="mt-4 ">
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
      
        modules={[Autoplay, Pagination, Navigation]}
        
        className="mySwiper  h-[25rem] banner_fit rounded-lg"
      >
        <SwiperSlide>
          <img src={mainBanner} className="object-fit max-w-full " alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainBanner} className="object-fit max-w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainBanner} className="object-fit max-w-full" alt="" />
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
