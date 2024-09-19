import { MenuItems } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import jpShopLogo from "../assets/jpShopLogo.png";
import no_search from "../assets/no-search.webp";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import product from "../assets/product4.png";
import { FaCartArrowDown } from "react-icons/fa";

const linksItems = [
  {
    id: 1,
    link: "/#Home",
    icon: <HiOutlineBars3BottomLeft size={30} />,
    caption: <p className="hidden lg:block">دسته بندی</p>,
  },
  {
    id: 2,
    link: "/#About",
    name: "اسمبل هوشمند",
  },
  {
    id: 3,
    link: "/#Services",
    name: "راهنمای خرید",
  },
  {
    id: 4,
    link: "/#benchmark",
    name: "بنچمارک",
  },
];
const GroupingNav = [
  {
    id: 1,
    link: "/#",
    name: " کامپیوتر",
  },
  {
    id: 2,
    link: "/#",
    name: "قطعات کامپیوتر",
  },
  {
    id: 3,
    link: "/#",
    name: "مانیتور ",
  },
  {
    id: 4,
    link: "/#",
    name: "لپتاب",
  },
  {
    id: 5,
    link: "",
    name: "کنسول های گیمینگ",
  },
  {
    id: 6,
    link: "",
    name: "لوازم جانبی",
  },
  {
    id: 7,
    link: "/",
    name: "بازی ها",
  },
  {
    id: 8,
    link: "/",
    name: "هدست واقعیت مجازی",
  },
];
function Header({ isMenuVisible, setMenuVisible, setCartValue, cartValue }) {
  const [miniCart, setMiniCart] = useState(false);
  function GroupingNavitemstrue() {
    setMenuVisible(true);
  }

  function GroupingNavitemsfalse() {
    setMenuVisible(false);
  }
  function itemCountLimit(setCartValue, cartValue) {
    if (cartValue == 1) {
      setCartValue(1);
    } else {
      setCartValue(cartValue - 1);
    }
  }

  return (
    <div className="header  ">
      <div className="container">
        <div className=" m-auto flex justify-between items-center ">
          <div className="logo links flex items-center justify-between w-1/2 px-10">
            {/*  logo and links */}
            <div className="block ">
              <div className="text-3xl font-semibold text-primary dark:text-gray-400 xl:w-44">
                <img src={jpShopLogo} alt="" />
              </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            {/*  search section */}
            <label className="input input-bordered xl:flex items-center gap-2 xl:w-2/3  bg-gray-200 rounded-3xl hidden ">
              <input
                type="text"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="grow border-none font-bold text-secondary cursor-pointer border-transparent  focus:ring-0"
                placeholder="دنبال چی هستی؟"
                readOnly
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box h-2/3 w-full ">
                {/*  search section  in modal*/}
                <label className="input input-bordered flex items-center gap-2  bg-gray-200 rounded-3xl w-full">
                  <input
                    type="text"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="grow border-none font-bold text-secondary  border-transparent  focus:ring-0"
                    placeholder="دنبال چی هستی؟"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <div className="w-full text-center h-2/3  content-center">
                  <img src={no_search} className="m-auto" alt="" />
                  <h3 className="font-semibold">کالای مدنظر را جستجو کنید</h3>
                  <p className="text-gray-500 font-semibold">
                    برای جسنجو حداقل 4 حرف نیاز است
                  </p>
                </div>
                {/*  search section  in modal*/}
                <div className="modal-action"></div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn fixed bottom-4 right-4 text-secondary font-bold ">
                      بستن
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/*  search section */}

          {/*  logo and links */}
          <div className="login cart flex justify-between items-center   gap-6 relative">
            {/*  login and cart */}
            <div className="text-gray-500 hover:text-primary duration-200 dark:text-gray-400 inline-block ">
              <Link to={"/login"}>
                <HiOutlineLogin size={35} />
              </Link>
            </div>

            <div className="cart text-gray-500 hover:text-primary duration-200 dark:text-gray-400 inline-block">
              <a href="" onMouseEnter={() => setMiniCart(true)}>
                <FaShoppingCart size={35} />
              </a>
            </div>
            {/*  hover cart section */}
            {miniCart ? (
              <div
                onMouseLeave={() => setMiniCart(false)}
                className="hidden  2xl:block  hover_loginCart  rounded-xl h-[25rem] w-[40rem] border-non shadow-2xl absolute border-t-4 border-b-4 border-primary bg-white xl:left-[10%]  2xl:left-[15%]  top-16  z-20 "
              >
                <div className="container relative h-full ">
                  <div className="product  border-b-2 flex  pt-4 w-full">
                    <div className="h-full items-start">
                      <Image
                        radius="lg"
                        src={product}
                        className="object-cover container ml-3 rounded-xl h-[12rem] w-full  -translate-y-3  "
                      />
                    </div>
                    <div className="">
                    <div className="flex items-center font-semibold">
                      <p className="font-medium text-lg px-2">
                        رم Corsair Vengeance DDR5 16GB Dual 5200MHz CL40 - Black
                      </p>
                    </div>
                    <div className="payment items-center px-2 py-3 flex justify-between ">
                      <span className="font-bold text-2xl ">
                        {" "}
                        8٬300٬000 تومان
                      </span>
                      <div className="border-t-2 border-b-2  border-primary flex gap-5  bg-white rounded-xl shadow-xl ">
                        <button
                          onClick={() => setCartValue(cartValue + 1)}
                          className="p-2 text-3xl hover:cursor-pointer font-semibold"
                        >
                          +
                        </button>
                        <p className="  content-center text-3xl">{cartValue}</p>
                        <button
                          onClick={(e) =>
                            itemCountLimit(setCartValue, cartValue)
                          }
                          className="hover:cursor-pointer p-2 text-3xl font-semibold"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div className="add_to_cart  absolute h-[5rem] flex justify-between container  bottom-0 z-30 px-10 pb-4 my-2   ">
                    <div className="">
                      <p className="font-semibold text-xl  text-gray-600">
                        مبلغ قابل پرداخت
                      </p>
                      <p className="font-semibold text-2xl  text-green-600">
                        8٬300٬000 تومان
                      </p>
                    </div>
                    <button className=" btn  bg-primary  text-base  hover:bg-primary text-white px-20  py-9   rounded-lg  h-full  content-center">
                      <span className="">مشاهده سبد خرید</span>
                      <span>
                        <FaCartArrowDown size={30} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/*  login and cart */}
        {/* navigate group items */}
        {isMenuVisible ? (
          <div
            onMouseLeave={GroupingNavitemsfalse}
            className="group_list  absolute  container "
          >
            <ul className="grid gap-3 lg:px-[1rem] pt-28  py-5   bg-white  rounded-2xl border-b-3 border-primary">
              {GroupingNav.map((item) => (
                <li className="font-semibold text-base text-gray-700 lg:mr-3 xl:mr-20 mx-5   hover:bg-primary hover:text-white p-2 rounded-lg duration-300 ">
                  <a className="w-auto" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="links mr-2  xl:flex pt-10  w-full justify-between hidden">
          <ul className="flex  relative gap-2 lg:gap-7 px-5  ">
            {
              //links
              linksItems.map((item, index) => {
                return (
                  <li
                    className="text-gray-500 group_list_key dark:text-gray-400  font-semibold hover:text-primary duration-200 flex items-center gap-1"
                    key={index}
                  >
                    <a
                      className=" flex  base items-center gap-2"
                      onMouseEnter={GroupingNavitemstrue}
                      href=""
                    >
                      {item.icon}

                      <span className="">{item.caption}</span>
                    </a>
                    <a className="text-base  hidden lg:block " href="">
                      {item.name}
                    </a>
                  </li>
                );
              })
            }
          </ul>
          <div className="ai_asemble px-4 relative">
            <button className="py-2 font-semibold bg-gray-500 text-white rounded-3xl  px-4 xl:px-7 text-base  xl:text-xl  ">
              سیستمتو بچین !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
