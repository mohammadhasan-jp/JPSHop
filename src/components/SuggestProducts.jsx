import React from "react";
import { Link } from "react-router-dom";
import SwiperProductComp from "./SwiperProductComp";
import "./MostSaleProduct.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";



function SuggetProducts() {
  return (
    <div className="py-12 ">
      <div className="  ">
        <div className=" w-full  ">
          <div className="flex justify-between">
            <p className="text-xl p-4 text-start font-bold text-gray-700 pr-3   title">
                پیشنهاد های جی پی
    
            </p>
            <button className=" bg-none shadow-none my-auto flex items-center px-4 border-none font-semibold text-primary ">
            <span className="font-semibold">مشاهده همه محصولات</span>
            <span className="font-bold"><MdArrowBackIos /></span>
           </button>
          </div>

          <div className="m-auto">
              <SwiperProductComp/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggetProducts;
