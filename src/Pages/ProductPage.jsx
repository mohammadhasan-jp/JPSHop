import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import manitor from "../assets/manitor1.jpg";
import manitor2 from "../assets/manitor2.jpg";
import manitor3 from "../assets/manitor3.jpg";
import mainMonitor from '../assets/mainMonitor.png'
import { GoReport } from "react-icons/go";
import manitor4 from "../assets/manitor4.jpg";
import manitor2L from "../assets/manitor2L.jpg";
import manitor3L from "../assets/manitor3L.jpg";
import manitor4L from "../assets/manitor4L.jpg";
import { GoShieldLock } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { TfiLoop } from "react-icons/tfi";
import { CiStar } from "react-icons/ci"; //non star
import { FaStar } from "react-icons/fa"; //star full color
import { SlRocket } from "react-icons/sl";
import { BsPersonCircle } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./productPage.css";
import controler from "../assets/controler.jpg";
import gigabyte from "../assets/GIGABYTE.jpg";
import ram from "../assets/ram.jpg";
import mouse from "../assets/razermouse.jpg";
import "../components/MostSaleProduct.css";
import GIGABYTELogo from "../assets/GIGABYTELogo.png";
import asusLogo from "../assets/asus.jpg";
import xboxLogo from "../assets/xboxlogo.png";
import razerLogo from "../assets/razerLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import SwiperProductComp from "../components/SwiperProductComp";
import { FaCartArrowDown } from "react-icons/fa";
const products = [
  {
    1: "gigabyte",
    name: "مانیتور GIGABYTE GS27F",
    img: gigabyte,
    price: "19,200,000 ",
    available: true,
    company: asusLogo,
  },
  {
    2: "controler",
    name: "دسته بازی Xbox Wireless - Gold Shadow Special Edition",
    img: controler,
    price: "4,200,000 ",
    available: true,
    company: xboxLogo,
  },
  {
    3: "ram",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    img: ram,
    price: "3,200,000 ",
    available: false,
    company: asusLogo,
  },
  {
    4: "mouse",
    name: "موسسور Razer Deathadder Essential",
    img: mouse,
    price: "1,200,000 ",
    available: false,
    company: razerLogo,
  },
  {
    1: "gigabyte",
    name: "مانیتور GIGABYTE GS27F",
    img: gigabyte,
    price: "19,200,000 ",
    available: true,
    company: GIGABYTELogo,
  },
  {
    2: "controler",
    name: "دسته بازی Xbox Wireless - Gold Shadow Special Edition",
    img: controler,
    price: "4,200,000 ",
    available: true,
    company: xboxLogo,
  },
  {
    3: "ram",
    name: "رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black",
    img: ram,
    price: "3,200,000 ",
    available: false,
    company: asusLogo,
  },
  {
    4: "mouse",
    name: "موسسور Razer Deathadder Essential",
    img: mouse,
    price: "1,200,000 ",
    available: true,
    company: razerLogo,
  },
];
function ProductPage(props) {
  const [count, setCount] = useState(1);

  function itemCountLimit() {
    if (count == 1) {
      count = 0;
    }
    setCount(count - 1);
  }
  function changeMainImg(e) {
    /*  const newImg=img.src;
  document.querySelector('.main_box_img').src=newImg; */
    const mainImg = document.querySelector(".main_box_img").src;
    const newSrc = e.target.src;
    document.querySelector(".main_box_img").src = newSrc;
  }
  function restMainImg() {
    document.querySelector(".main_box_img").src = manitor;
  }

  
 /*  دریافت اطلاعات محصول از  */
  const { state } = useLocation(); 

  return (
    <div className="m-auto py-12 ">
      <div className="m-auto container">
        <div className="grid grid-cols-12">
          {/*  product image section */}
          <div className="xl:col-span-5 col-span-12 ">
            <div className="">
              <div className="grid grid-cols-12 ">
                <div className="col-span-1  ">
                  <div className="mt-7    ">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="افزودن به علاقه مندی ها"
                      data-tooltip-place="left"
                      className="font-bold bg-secondary text-primary "
                    >
                      <FiHeart className=" cursor-pointer" size={30} />
                    </a>
                    <Tooltip id="my-tooltip" />
                  </div>
                  <div className="mt-7">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="اشتراک گذاری"
                      data-tooltip-place="left"
                      className="font-bold text-primary "
                    >
                      <AiOutlineLike className=" cursor-pointer" size={30} />
                    </a>
                    <Tooltip id="my-tooltip" />
                  </div>

                  <div className="mt-7">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="مقایسه"
                      data-tooltip-place="left"
                      className="font-bold text-primary "
                    >
                      <GoGitCompare className=" cursor-pointer" size={30} />
                    </a>
                    <Tooltip id="my-tooltip" />
                  </div>
                </div>
                <div className="col-span-11">
                  <div className="">
                    <div className="productImage ">
                      <img
                        className="touch-pinch-zoom max-h-full  w-full"
                     
                        src={mainMonitor}
                        alt="product"
                      />
                    </div>
                    {/*  img box section */}
                    <div className="full ">
                      <dialog
                        id="my_modal_2"
                        onMouseLeave={restMainImg}
                        className="modal"
                      >
                        <div className="modal-box ml-5 bg-white">
                          <h3 className="font-bold text-lg">
                            مانیتور GIGABYTE GS27F
                          </h3>
                          <div className="">
                            <div>
                              <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                           
                              >
                                <SwiperSlide>
                                  <img
                                    className="main_box_img"
                                    src={manitor}
                                    alt=""
                                  />
                                </SwiperSlide>
                              </Swiper>
                            </div>
                            <div className="flex   justify-center">
                              <img
                                onClick={changeMainImg}
                                className="border  hover:border-primary cursor-pointer mx-2  "
                                src={manitor2}
                                width="100"
                                height="100"
                                alt=""
                              />
                              <img
                                onClick={changeMainImg}
                                className="border  hover:border-primary cursor-pointer  mx-2 "
                                src={manitor3}
                                width="100"
                                height="100"
                                alt=""
                              />
                              <img
                                onClick={changeMainImg}
                                className="border  hover:border-primary cursor-pointer mx-2 "
                                src={manitor4}
                                width="100"
                                height="100"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                    {/*  img box section */}
                    <div
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      className="flex img_box   mx-2 justify-center -translate-y-10 md:-translate-y-20 2xl:-translate-y-16"
                    >
                      <img
                        className="border hover:border-primary cursor-pointer mx-2  "
                        src={manitor2L}
                        alt=""
                      />
                      <img
                        className="border hover:border-primary cursor-pointer  mx-2 "
                        src={manitor3L}
                        alt=""
                      />
                      <img
                        className="border  hover:border-primary cursor-pointer mx-2 "
                        src={manitor4L}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7 col-span-12 md:py-12   ">
            {/* product details section */}
            <nav aria-label="breadcrumb">
              <ol className="flex">
                <li className="text-gray-500 font-semibold">
                  <a href="">فروشگاه اینترنتی جی پی </a>
                </li>
                <li className="mx-2 text-gray-500 font-semibold px-2"> / </li>
                <li className="text-gray-500 font-semibold">
                  <a href="">مانیتور </a>
                </li>
              </ol>
            </nav>
            <div className="py-4">
              <h1 className="font-bold text-2xl lg:text-4xl text-gray-800">
             
              </h1>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="md:col-span-1 col-span-12">
                <div className="flex">
                  <p className="font-semibold text-gray-500">تولید کننده :</p>
                  <ol className="flex mx-2 text-gray-500">
                    <li>
                      <a href="">GIGABAYTE</a>
                    </li>
                    <li className="text-gray-500 font-semibold px-2"> / </li>
                    <li>
                      <a href="">مانیتور GIGABYTE</a>
                    </li>
                  </ol>
                </div>
                <div className="flex gap-3">
                  <p className="font-semibold text-gray-500">نظرات:</p>
                  <span className="text-gray-500">34</span>
                </div>

                {/* rating product */}
                <div className=" flex items-center gap-2">
                  <span className="text-gray-500 font-semibold">
                    امتیاز شما:
                  </span>
                  <Stack spacing={1} className="ratingStar">
                    
                    <Rating name="size-medium" defaultValue={2} />
                    
                  </Stack>
                </div>
                {/* rating product */}
                <div className="py-7 m-3 grid gap-3">
                  <div className=" flex gap-2 font-semibold text-start">
                    <p className="text-gray-600 text-sm lg:text-lg ">
                      سایز صفحه نمایش :
                    </p>
                    <span className="  text-gray-500 font-semibold">
                      27 اینچ
                    </span>
                  </div>

                  <div className=" flex gap-2 font-semibold text-start">
                    <p className="text-gray-600 text-sm lg:text-lg">
                      نوع پنل :
                    </p>
                    <span className=" text-gray-500 font-semibold">IPS</span>
                  </div>
                  <div className=" flex gap-2 font-semibold text-start">
                    <p className="text-gray-600 text-sm lg:text-lg">
                      نوع صفحه نمایش ::
                    </p>
                    <span className=" text-gray-500 font-semibold">تخت</span>
                  </div>
                  <div className=" flex gap-2 font-semibold text-start">
                    <p className="text-gray-600 text-sm lg:text-lg">
                      نوع صفحه نمایش :
                    </p>
                    <span className=" text-gray-500 font-semibold">
                      Full HD
                    </span>
                  </div>
                  <div className=" flex gap-2 font-semibold text-start">
                    <p className="text-gray-600 text-sm lg:text-lg">
                      زمان پاسخگویی :
                    </p>
                    <span className=" text-gray-500 font-semibold">
                      1 میلی ثانیه
                    </span>
                  </div>
                  <div className=" flex gap-2 font-semibold text-start">
                    <p className="text-gray-600 text-sm lg:text-lg">
                      رفرش ریت :
                    </p>
                    <span className=" text-gray-500 font-semibold">
                      170 هرتز
                    </span>
                  </div>
                </div>
              </div>
              {/* payment card */}
              <div className="hidden card md:flex col-span-12 md:col-span-1 text-center font-semibold w-96    justify-center">
                <div className=" border p-4 content-center  rounded-xl bg-gray-200 w-full">
                  <div className="grid gap-2   ">
                    <h2 className="text-xl xl:text-2xl py-3">
                      14,500,000 تومان
                    </h2>
                    <div className="flex  justify-center">
                      <h5 className="p-2 2xl:text-xl ">تعداد</h5>
                      <div className="border flex gap-5  bg-white rounded-xl">
                        <button
                          onClick={() => setCount(count + 1)}
                          className="p-2 text-xl hover:cursor-pointer"
                        >
                          +
                        </button>
                        <p className="  content-center text-xl">{count}</p>
                        <button
                          onClick={itemCountLimit}
                          className="hover:cursor-pointer p-2 text-xl"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    {/*  payment button */}
                    <div className=" ">
                      <button className=" btn  bg-primary  text-base  hover:bg-primary text-white px-16  py-6   content-center items-center rounded-md  ">
                        <span>افزودن به سبد خرید</span>
                        <span><FaCartArrowDown size={22} /></span>
                      </button>
                    </div>
                    {/*  payment button  */}
                  </div>
                  <p className="mt-6 font-semibold text-xl">گارانتی آواژنگ</p>
                </div>
              </div>
              {/* payment card */}
            </div>
          </div>
        </div>
        {/*  why us product */}
        <div className=" py-12 text-gray-500 text-center whyUsSection">
          <div className="grid grid-cols-5 font-semibold  bg-secondary p-5 rounded-xl  ">
            <div className="2xl:flex gap-4   col-span-1  mx-auto items-center  ">
              <GoShieldLock className="text-primary xl:text-4xl text-xl   md:text-3xl mx-auto  duration-200" />
              <span className=" text-[7px]  xl:text-base   text-white">ضمانت اصالت کالا</span>
            </div>
            <div className="2xl:flex gap-4  col-span-1  mx-auto  items-center  ">
              <MdOutlineSupportAgent className="text-primary xl:text-4xl md:text-3xl text-xl    mx-auto   duration-200" />
              <span className="text-[7px]  xl:text-base text-white">پشتیبانی آنلاین</span>
            </div>
            <div className="2xl:flex gap-4 items-center   col-span-1  mx-auto ">
              <FaRegCreditCard className="text-primary xl:text-4xl md:text-3xl text-xl    mx-auto   duration-200" />
              <span className="text-[7px]  xl:text-base  text-white">پرداخت امن</span>
            </div>
            <div className="2xl:flex gap-4 items-center   col-span-1 mx-auto ">
              <SlRocket className="text-primary xl:text-4xl md:text-3xl text-xl    mx-auto   duration-200" />
              <span className="  text-[7px]  xl:text-base  text-white">ارسال جی توربو</span>
            </div>
            <div className="2xl:flex gap-4 items-center  col-span-1 mx-auto  ">
              <TfiLoop className="text-primary xl:text-4xl md:text-3xl text-xl   mx-auto   duration-200" />
              <span className="  text-[7px] xl:text-base  text-white">امکان بازشگت کالا</span>
            </div>
          </div>
        </div>

        {/*  why us product */}
      </div>
      {/* payment card in mobile media query */}
      <div className="md:hidden  w-screen left-0  fixed bottom-20 z-40  drop-shadow-2xl pb-4  ">
        <div className="bg-white  justify-between  drop-shadow-2xl  px-5 pt-4 pb-7 content-center my-auto">
          <div className="flex  justify-between w-full  items-center border-b-2 p-4">
            <div className="font-bold my-auto ">
              <span className="text-xl text-gray-800"> 14,500,000 تومان </span>
            </div>
            <span className="font-semibold ">گارانتی آواژنگ</span>
          </div>
          <div className="  content-center text-center pt-4 flex justify-between">
            <button className="btn bg-primary px-10   lg:px-14  hover:bg-white hover:text-primary border border-primary   rounded-md   text-white font-semibold   duration-200">
              افزودن به سبد خرید
            </button>
            <div className="flex  justify-center">
              <h5 className="p-2 2xl:text-xl font-semibold ">تعداد</h5>
              <div className=" border-2 flex gap-5  bg-white rounded-md ">
                <button
                  onClick={() => setCount(count + 1)}
                  className="p-2 text-xl font-semibold hover:cursor-pointer "
                >
                  +
                </button>
                <p className="  content-center text-xl font-semibold">
                  {count}
                </p>
                <button
                  onClick={itemCountLimit}
                  className="hover:cursor-pointer  p-2 text-xl"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* payment card in mobile media query */}
      {/*  product advanced details */}
      <div className="w-full py-12  bg-w">
        <div role="tablist" className="tabs tabs-lifted  tabs-lg  ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab focus:ring-transparent mx-2 "
            aria-label="خصوصیات"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-white border-minSecondary rounded-box p-6 "
          >
            {/*  feature section */}
            <div className=" py-10 bg-white">
              <h2 className="font-bold container pb-4 border-primary   border-r-4  text-lg">
                خصوصیات
              </h2>
              <div className="overflow-x-auto  container m-auto  p-6">
                <table className="table text-start  border-2 ">
                  {/* head */}
                  <thead>
                    <tr className="bg-brandWhite">
                      <th className="text-start text-2xl skill  ">مانیتور</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className="font-semibold  xl:text-lg text-gray-600">
                        سایز صفحه نمایش
                      </td>
                      <td className="xl:text-lg font-semibold text-gray-500 ">
                        {" "}
                        27 اینچ
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td className="font-semibold text-gray-600 xl:text-lg">
                        نورپردازی
                      </td>
                      <td className="xl:text-lg font-semibold text-gray-500">
                        ندارد
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td className="font-semibold text-gray-600 xl:text-lg">
                        نوع پنل
                      </td>
                      <td className="xl:text-lg font-semibold text-gray-500">
                        IPS
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-600 xl:xl:text-lg">
                        نوع صفحه نمایش
                      </td>
                      <td className="xl:text-lg font-semibold text-gray-500">
                        تخت
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*  feature section */}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab focus:ring-transparent mx-2"
            aria-label="نظرات"
          />
          <div
            role="tabpanel"
            className="tab-content bg-white border-minSecondary rounded-box p-6  "
          >
            {/*  Commends section */}
            <div className="py-5  bg-white">
              <div>
                <h2 className="font-bold container pb-4 border-primary   border-r-4  text-lg">
                  نظرات
                </h2>
                <div className="overflow-x-auto  container m-auto  p-6">
                  {/* coommends  btn*/}
                  <div>
                    <button className="bg-white rounded-xl py-3 border-primary px-14 text-lg text-primary hover:bg-primary hover:text-white font-semibold btn content-center">
                      <span className="text-xl">+</span>افزودن نظر{" "}
                    </button>
                  </div>
                  {/* commend */}
                  <div className="my-10 border-4 p-5 rounded-md">
                    <div className="flex p-2 items-center gap-5">
                      <BsPersonCircle className="text-5xl text-primary   rounded-box  " />
                      <div className="date font-semibold text-gray-500 gap-1 w-full flex">
                        <span className="text-xs  xl:text-lg">2 دقیقه پیش</span>
                        <span className="text-bold">|</span>
                        <span className="text-xs   xl:text-lg">
                          محمدرضا محمدی
                        </span>
                      </div>
                    </div>
                    <div className="py-5">
                      <p className="font-semibold text-gray-800 container text-xs  md:text-sm pb-5">
                        مانیتور خوبی بود مناسب برای گیم و کارای گرافیکی
                      </p>
                    </div>
                    <div className="py-5 border-t-4 flex justify-between container items-center">
                      <div className=" ">
                        <a
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="گزارش"
                          data-tooltip-place="left"
                          className="font-bold"
                        >
                          <button>
                            <GoReport className="xl:text-3xl text-xl text-gray-700 hover:text-primary text-center  " />
                          </button>
                        </a>
                        <Tooltip id="my-tooltip" />
                      </div>
                      <div className="flex gap-5 items-center text-gray-500 ">
                        <button className="flex gap-2 font-semibold hover:text-primary ">
                          <AiOutlineLike className="xl:text-3xl text-xl" />
                          <span>3</span>
                        </button>
                        <button className="flex gap-2 font-semibold hover:text-primary">
                          <AiOutlineDislike className="xl:text-3xl text-xl" />
                          <span>2</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* commend */}
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab focus:ring-transparent  mx-2 "
            aria-label="سوالات"
          />
          <div
            role="tabpanel"
            className="tab-content bg-white  border-minSecondary rounded-box p-6  "
          >
            {/*  questions section */}
            <div className="py-10 bg-white">
              <div>
                <h2 className="font-bold container pb-4 border-primary  border-r-4  text-lg">
                  سوالات شما
                </h2>
                <div className="overflow-x-auto  container m-auto  p-6">
                  {/* questions  btn*/}
                  <div>
                    <button className="bg-white rounded-xl py-3 border-primary px-14 text-lg text-primary hover:bg-primary hover:text-white font-semibold btn content-center">
                      <span className="text-xl">+</span>افزودن سوال
                    </button>
                  </div>
                  {/* question box */}
                  <div className="my-10 border-4 p-5 rounded-md">
                    <div className="flex p-2 items-center gap-5">
                      <BsPersonCircle className="text-5xl text-primary   rounded-box  " />
                      <div className="date font-semibold text-gray-500 gap-1 w-full flex">
                        <span className="text-xs xl:text-lg ">2 دقیقه پیش</span>
                        <span className="text-bold">|</span>
                        <span className="text-xs   xl:text-lg">
                          محمدرضا محمدی
                        </span>
                      </div>
                    </div>
                    {/*  question */}
                    <div className="py-5 border-b-4">
                      <p className="font-semibold text-gray-800 container text-xs  md:text-sm pb-5">
                        سلام نورپردازی هم داره؟
                      </p>
                    </div>
                    {/*  Admin answer */}
                    <div className="py-5">
                      <p className="font-semibold text-gray-800 container text-xs  md:text-sm pb-5">
                        سلام دوست عزیز.خیر این مدل دارای نورپردازی ار جی بی نیست
                      </p>
                    </div>
                  </div>
                  {/* question section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product advanced details */}
      {/*  linked products section */}

      <div className="py-12 ">
      <div className="  ">
        <div className=" w-full  ">
          <div>
            <p className="text-xl p-4 text-start font-bold text-gray-700 pr-3   title">
             محصولات پرفروش
            </p>
          </div>

          <div className="w-full">
        <SwiperProductComp/>
          </div>
        </div>
      </div>
    </div>

      {/*  linked products section */}
    </div>
  );
}

export default ProductPage;
