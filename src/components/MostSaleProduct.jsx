import React from "react";
import { useState,useRef,useEffect } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import rams from "../assets/rams.png";
import SwiperProductComp from "./SwiperProductComp";
import "./MostSaleProduct.css";
import { RiRadioButtonLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Card ,CardBody,CardHeader,CardFooter,Image } from "@nextui-org/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function MostSaleProduct() {
  
  return (
    <div className="py-12 ">
      <div className="  ">
        <div className=" w-full  ">
          <div className="flex justify-between">
            <p className="text-xl p-4 text-start font-bold text-gray-700 pr-3   title">
              محصولات پرفروش
            </p>
           <button className="px-4 bg-none shadow-none my-auto  flex items-center border-none font-semibold text-primary ">
            <span className="font-semibold">مشاهده همه محصولات</span>
            <span className="font-bold"><MdArrowBackIos /></span>
           </button>
          </div>

          <div className="container">
              <SwiperProductComp/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostSaleProduct;
