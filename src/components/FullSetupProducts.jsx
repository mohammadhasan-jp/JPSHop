import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import fullSetUpImg from '../assets/case_1_975a824bbb.webp'

const fullSetUp=[
    {
        id:1,
        img:fullSetUpImg,
        name:"سیستم گیمینگ اورگیم مدل Hero",
        cpu:"Intel CPU Core i9-14900K TRAY",
        gpu:"ASUS Graphic Card TUF RTX 4090 24GB OC",
        ram:"Corsair Ram Dominator Titanium RGB Black DDR5 96GB Dual 6600MHz CL32",
        motherBoard:"ASUS Motherboard ROG Strix Z790-E Gaming WIFI II",
        cooling:"DeepCool CPU Cooler LT720",
    },
    {
        id:2,
        img:fullSetUpImg,
        name:"سیستم گیمینگ اورگیم مدل Hero",
        cpu:"Intel CPU Core i9-14900K TRAY",
        gpu:"ASUS Graphic Card TUF RTX 4090 24GB OC",
        ram:"Corsair Ram Dominator Titanium RGB Black DDR5 96GB Dual 6600MHz CL32",
        motherBoard:"ASUS Motherboard ROG Strix Z790-E Gaming WIFI II",
        cooling:"DeepCool CPU Cooler LT720",
    },
    {
        id:3,
        img:fullSetUpImg,
        name:"سیستم گیمینگ اورگیم مدل Hero",
        cpu:"Intel CPU Core i9-14900K TRAY",
        gpu:"ASUS Graphic Card TUF RTX 4090 24GB OC",
        ram:"Corsair Ram Dominator Titanium RGB Black DDR5 96GB Dual 6600MHz CL32",
        motherBoard:"ASUS Motherboard ROG Strix Z790-E Gaming WIFI II",
        cooling:"DeepCool CPU Cooler LT720",
    },
    {
        id:4,
        img:fullSetUpImg,
        name:"سیستم گیمینگ اورگیم مدل Hero",
        cpu:"Intel CPU Core i9-14900K TRAY",
        gpu:"ASUS Graphic Card TUF RTX 4090 24GB OC",
        ram:"Corsair Ram Dominator Titanium RGB Black DDR5 96GB Dual 6600MHz CL32",
        motherBoard:"ASUS Motherboard ROG Strix Z790-E Gaming WIFI II",
        cooling:"DeepCool CPU Cooler LT720",
    },
    {
        id:5,
        img:fullSetUpImg,
        name:"سیستم گیمینگ اورگیم مدل Hero",
        cpu:"Intel CPU Core i9-14900K TRAY",
        gpu:"ASUS Graphic Card TUF RTX 4090 24GB OC",
        ram:"Corsair Ram Dominator Titanium RGB Black DDR5 96GB Dual 6600MHz CL32",
        motherBoard:"ASUS Motherboard ROG Strix Z790-E Gaming WIFI II",
        cooling:"DeepCool CPU Cooler LT720",
    },
    {
        id:6,
        img:fullSetUpImg,
        name:"سیستم گیمینگ اورگیم مدل Hero",
        cpu:"Intel CPU Core i9-14900K TRAY",
        gpu:"ASUS Graphic Card TUF RTX 4090 24GB OC",
        ram:"Corsair Ram Dominator Titanium RGB Black DDR5 96GB Dual 6600MHz CL32",
        motherBoard:"ASUS Motherboard ROG Strix Z790-E Gaming WIFI II",
        cooling:"DeepCool CPU Cooler LT720",
    },
]

function FullSetupProducts() {
  return (
    <div>
      <div className="p-4">
      <div className=" w-full  ">
          <div>
            <p className="text-xl p-4 text-start font-bold text-gray-700 pr-3   title">
            کیس های اسمبل شده
            </p>
          </div>

          <div className="">
            {/*  most product section added */}
            <Swiper
          
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 1,
                },
                768: {
                  // width: 768,
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
             
    

              
              
      
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            
              className="mySwiper  "
            >
              {fullSetUp.map((product) => (
                <SwiperSlide key={product.id} className="card  border rounded-2xl  bg-white hover:shadow-xl h-full py-10   duration-300    px-2 hover:border-blue-800">
                  <a className=" px-7 text-center " href="">
                    {
                     product.like===true?<FaHeart className="text-2xl text-secondary hover:scale-125 duration-150 -translate-y-4"/>:<FaRegHeart   className="text-2xl  hover:scale-125 duration-150 -translate-y-4 "/>
                     
                    }
                   
                    <div className="img w-full text-center  h-[20rem]" >
                      <img src={product.img} className=" h-auto max-w-full  " alt="" />
                    </div>
                    <div className="title flex items-center pt-12">
                      <p className="text-xl font-bold mx-4 w-full text-ellipsis inline-block h-16">{product.name}</p>
                    </div>
                    <div className=" text-center items-center">
                    <div className="details  ">
                        <div className="flex gap-1 justify-between text-lg max-w-full items-center">
                            <div className="title  bg-gradient-to-r from-gray-300 border px-3 py-1 rounded-xl   font-semibold">پردازنده</div>
                            <div>
                                <span className="caption border px-3 py-1 bg-gradient-to-r from-gray-300 text-ellipsis inline-block  rounded-xl w-full">{product.cpu}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details  ">
                        <div className="flex gap-1 justify-between text-lg  items-center">
                            <div className="title  bg-gradient-to-r from-gray-300 border px-3 py-1 rounded-xl   font-semibold">کارت گرافیک</div>
                            <div>
                                <span className="caption border px-3 py-1 bg-gradient-to-r from-gray-300  text-ellipsis inline-block  rounded-xl w-full">{product.gpu}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details  grow flex ">
                        <div className="flex gap-1 justify-between text-lg max-w-full items-center">
                            <div className="title  bg-gradient-to-r from-gray-300 border px-3 py-1 rounded-xl font-semibold">رم کامپیوتر</div>
                            <div className=" inline">
                                <span className="caption border px-3 py-1 bg-gradient-to-r from-gray-300  inline-block text-ellipsis rounded-xl w-full">{product.ram}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details  grow flex ">
                        <div className="flex gap-1 justify-between text-lg max-w-full items-center">
                            <div className="title  bg-gradient-to-r from-gray-300 border px-3 py-1 rounded-xl   font-semibold">مادربرد</div>
                            <div className="">
                                <span className="caption border px-3 py-1 bg-gradient-to-r from-gray-300 text-ellipsis inline-block  rounded-xl w-full">{product.motherBoard}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details flex  ">
                        <div className="flex gap-1 justify-between text-lg max-w-full items-center ">
                            <div className="title  bg-gradient-to-r from-gray-300 border px-3 py-1 rounded-xl   font-semibold">خنک کننده پردازنده</div>
                            <div className=" ">
                                <span className="caption border px-3 py-1 bg-gradient-to-r from-gray-300 text-ellipsis inline-block  rounded-xl w-full">{product.cooling}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="add_to_cart price flex items-center justify-between text-2xl">
                    <button><FiPlus className="text-3xl hover:scale-125 duration-150" /></button>
                      <span className="text-xl font-bold mx-4"> {product.price} ت </span>
                      
                    </div>

                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullSetupProducts;
