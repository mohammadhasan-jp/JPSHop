import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Card ,CardBody,CardHeader,CardFooter,Image } from "@nextui-org/react";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import rams from "../assets/rams.png";


const products = [
  {
    id: 1,
    name: "مانیتور MSI Optix G27CQ4 - جعبه باز",
    img: product1,
    price: "1.500.000",
    like: true,
  },
  {
    id: 2,
    name: "رم Lexar Ares RGB DDR5 32GB Dual 6400MHz CL32 - Black",
    img: product2,
    price: "850.000",
    like: false,
  },
  {
    id: 3,
    name: "مانیتور ASUS TUF Gaming VG27VH1B",
    img: product3,
    price: "1.500.000",
    like: true,
  },
  {
    id: 4,
    name: "کولر پردازنده DeepCool LS720 SE - White",
    img: product2,
    price: "1.500.000",
    like: false,
  },
  {
    id: 5,
    img: product3,
    price: "1.500.000",
    name: "رم Corsair Vengea 16GB Dual",
    like: false,
  },
  {
    id: 5,
    img: product2,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: product4,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: product1,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: product4,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: rams,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: product4,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: rams,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },
  {
    id: 5,
    img: rams,
    price: "1.500.000",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    like: false,
  },

];
function SwiperProductComp() {
  return (
<>
   
            {/*  most product section added */}
            <Swiper
          
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 2,
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
             
            loop={false}
            spaceBetween={30}
           
            
           
          
              navigation={{
                prevEl: ".button-prev",
                nextEl: ".button-next",
              }}
            
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper  "
            >
              {products.map((product,index) => (
                 <SwiperSlide
                 key={product.id}
                 className=""
               >
                <Card className="">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <div>
                    {
                      product.id?<FaRegHeart/>:<FaHeart/>
                    }
                    </div>
                  </CardHeader>
                  <CardBody className=" overflow-visible py-2 ">
                   <Image
                   radius="lg"
                   src={product.img}
                   className="w-full object-cover   rounded-xl"
                
                   
                   
                   />
                   <h4 className="text-base content-center font-semibold card-title px-4 pt-5 h-20  ">{product.name}</h4>
                  </CardBody>
                  <CardFooter className="text-small justify-between px-5 pt-10">
                    <span className="font-semibold text-xl border p-2 rounded-lg cursor-pointer duration-200 text-primary hover:bg-primary hover:text-white"><FiPlus/></span>
                    <p className="font-semibold text-xl">{product.price}  ت</p>
                    

                  </CardFooter>
                </Card>
               
               </SwiperSlide>
              ))}
            </Swiper>
              {/* Custom Swiper Navigation Buttons */}
           <div className="w-full flex justify-center">
           <div className="btn button-prev m-1 bg-white font-semibold text-xl">
              <MdArrowForwardIos />
            </div>
           <div className="btn  button-next m-1  bg-white font-semibold text-xl">
              <MdArrowBackIos />
            </div>
            
           </div>


</>
  )
}

export default SwiperProductComp