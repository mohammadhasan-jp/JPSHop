import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";

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
function SwiperProductComp({}) {
  return (
    <>
      {/*  most product section added */}
      <Swiper
        breakpoints={{
          // صفحه‌های کوچک (موبایل)
          320: {
            slidesPerView: 1,  // نمایش 1 محصول در عرض‌های بسیار کوچک (مانند گوشی‌های هوشمند)
          },
          // صفحه‌های متوسط (موبایل بزرگ و تبلت)
          576: {
            slidesPerView: 2,  // نمایش 2 محصول در سایزهای بزرگتر از 576px
          },
          // صفحه‌های متوسط به بالا (تبلت و دسکتاپ کوچک)
          768: {
            slidesPerView: 2,  // نمایش 2 محصول در سایزهای بزرگتر از 768px
          },
          // دسکتاپ کوچک
          1024: {
            slidesPerView: 3,  // نمایش 3 محصول در سایزهای بزرگتر از 1024px (لپ‌تاپ و دسکتاپ‌های کوچک)
          },
          // دسکتاپ‌های بزرگ
          1200: {
            slidesPerView: 4,  // نمایش 4 محصول در سایزهای بزرگتر از 1200px
          },
          // صفحه‌های بسیار بزرگ (دسکتاپ‌های خیلی بزرگ)
          1400: {
            slidesPerView: 5,  // نمایش 5 محصول در سایزهای بزرگتر از 1400px
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
        {products.map((product) => (
          <SwiperSlide key={product.id} className="">
            <Card className=" hover:border-primary border-1 duration-300">
              <Link to={{
               pathname: `/products/ProductPage`,
               state: { title: product.name }
              }}
              params={{ testvalue: "hello" }}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <div>{product.id ? <FaRegHeart /> : <FaHeart />}</div>
                </CardHeader>
                <CardBody className=" overflow-visible py-2 md:h-72 h-auto ">
                  <Image
                    radius="lg"
                    src={product.img}
                    className="w-full object-cover   rounded-xl p-2"
                  />
                  <p className="text-base content-center font-semibold card-title px-4 pt-5  text-gray-700 my-auto overflow-hidden h-[4rem] line-clamp-2 text-start text-ellipsis">
                    {product.name}
                  </p>
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
    </>
  );
}

export default SwiperProductComp;
