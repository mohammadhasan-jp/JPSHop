import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import maderboard from '../assets/maderboard.png'
import keyboard from '../assets/keyboard.png'
import rams from '../assets/rams.png'
import monitor from '../assets/monitor.png'
import caseicon from '../assets/case.png'
import ps5 from '../assets/ps5.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const category=[
  {
    id:1,
    name:"مادربرد",
    img:maderboard,
    colorClass:"maderboard"
  },
  {
    id:2,
    name:"کیبورد",
    img:keyboard,
    colorClass:"keyboard"
  },
  {
    id:3,
    name:"رم",
    img:rams,
    colorClass:"rams"
  },
  {
    id:4,
    name:"مانیتور",
    img:monitor,
    colorClass:"monitor"
  },
  {
    id:5,
    name:"کیس",
    img:caseicon,
    colorClass:"caseicon"
  },
  {
    id:6,
    name:"کنسول",
    img:ps5,
    colorClass:"ps5"
  }
]
function ProductGroup() {

  return (
   <>

   <div className="">

    <div className=" mt-20  flex w-full   justify-center text-center ">
      <div className="grid  grid-cols-6 text-center gap-6  ">
       {
        category.map((item)=>{
          return   (
            <Link className=" col-span-3 lg:col-span-2  2xl:col-span-1" to={"/Category"} key={item.id}>
             <div className="hover:scale-105  w-[10rem]  cursor-pointer hover:border-primary duration-200  border xl:w-60 flex  items-center  justify-center  h-28 bg-white rounded-xl shadow-md ">
          <div className="title  ">
            <p className="xl:text-xl font-semibold mx-4  ">{item.name}</p>
          </div>
          <div className="img -translate-y-7">
            <img src={item.img} className="xl:h-34 xl:w-40 w-[6rem] " alt="" />
          </div>

        </div>
        </Link>
          )
        })
       }
      </div>
    
   
           
    </div>
   </div>
   </>
  );
}

export default ProductGroup;
