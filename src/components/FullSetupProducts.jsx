import React from "react";
import { json, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import fullSetUpImg from '../assets/case_1_975a824bbb.webp'
import { Card,CardBody,CardHeader ,CardFooter,Image } from "@nextui-org/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
 




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
        price:"24000000"
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
         price:"24000000"
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
         price:"24000000"
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
         price:"24000000"
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
         price:"24000000"
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
         price:"24000000"
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
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 3,
          },
          1800: {
            slidesPerView: 3,
          },
        }}
        loop={false}
        spaceBetween={15}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  "
      >
        {fullSetUp.map((product) => (
          <SwiperSlide key={product.id} className="">
            <Card className=" hover:border-primary border-2 duration-300 ">
              <Link to={"/products/ProductPage"}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <div>{product.id ? <FaRegHeart /> : <FaHeart />}</div>
                </CardHeader>
                <CardBody className=" overflow-visible py-2 h-full">
                  <Image
                    radius="lg"
                    src={product.img}
                    className="w-full object-cover container  rounded-xl"
                  />
                  <p className="text-lg  text-center content-center font-bold card-title px-4 pt-5 inline-block text-ellipsis text-gray-700 my-auto">
                    {product.name}
                  </p>

                  <div className="details pt-7 px-1 rounded-sm p-2">
                    <p className="px-2 w-full bg-gradient-to-r rounded-md my-1 bg-gray-600  flex justify-between border-b-1 font-semibold py-1 "><span className="cpu text-white text-sm ">پردازنده :</span><span className="text-xs content-center text-white">{product.cpu}</span></p>
                    <p className="px-2 w-full bg-gradient-to-r rounded-md my-1  bg-gray-600 flex justify-between border-b-1 font-semibold py-1"><span className="gpu text-white  text-sm"> کارت گرافیک :</span><span className="text-xs  content-center text-white">{product.gpu}</span></p>
                    <p className="px-2 w-full bg-gradient-to-r rounded-md my-1 bg-gray-600  flex justify-between border-b-1 font-semibold py-1"><span className="ram  text-start text-white text-sm">رم :</span><span className="text-xs content-center text-white w-3/4">{product.ram}</span></p>
                    <p className="px-2 w-full bg-gradient-to-r rounded-md my-1 bg-gray-600  flex justify-between border-b-1 font-semibold py-1"><span className="motherBoard text-white text-sm">مادربرد :</span><span className="text-xs content-center text-white w-3/4">{product.motherBoard}</span></p>
                    <p className="px-2 w-full bg-gradient-to-r rounded-md my-1 bg-gray-600  flex justify-between font-semibold py-1"><span className="cooling text-white text-sm">سیستم خنک کننده :</span><span className="text-xs content-center text-white">{product.cooling}</span></p>

                  </div>
                </CardBody>
                <CardFooter className="text-small justify-between px-5 pt-10">
                  <span className="font-semibold text-xl border p-2 rounded-lg cursor-pointer duration-200 text-primary hover:bg-primary hover:text-white">
                    <FiPlus />
                  </span>
                  <p className="font-semibold text-xl">{product.price} ت</p>
                </CardFooter>
              </Link>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Custom Swiper Navigation Buttons */}
        <div className="w-full flex justify-end pt-7">
        <div className="btn button-prev m-1 bg-white font-semibold text-xl">
          <MdArrowForwardIos />
        </div>
        <div className="btn  button-next m-1  bg-white font-semibold text-xl">
          <MdArrowBackIos />
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullSetupProducts;
