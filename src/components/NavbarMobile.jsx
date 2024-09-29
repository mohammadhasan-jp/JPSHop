import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Image,
} from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import product1 from "../assets/product1.png";
import product from "../assets/product4.png";
import { FaCartArrowDown } from "react-icons/fa";

const cartProducts = [
  {
    id: 1,
    name: "مانیتور MSI Optix G27CQ4 - جعبه باز",
    img: product1,
    price: "1.500.000",
    like: true,
  },
  {
    id: 2,
    name: "رم Lexar dasdasdasdasddsadas Dual 6400MHz CL32 - Black",
    img: product,
    price: "850.000",
    like: false,
  },
  {
    id: 2,
    name: "رم Lexar dasdasdasdasddsadas Dual 6400MHz CL32 - Black",
    img: product,
    price: "850.000",
    like: false,
  },
];
const linksItems = [
  {
    id: 1,
    link: "/",
    name: "خانه",
    icon: <MdHome />,
  },
  {
    id: 2,
    link: "/Category",
    name: "دسته بندی",
    icon: <FaBars />,
  },
  {
    id: 3,

    name: "سبد خرید",
    icon: <FaCartShopping />,
    cart:true,
  },
  {
    id: 4,

    name: "جستجو",
    icon: <IoSearch />,
  },
  {
    id: 5,

    name: "ورود",
    icon: <IoPersonSharp />,
  },
];

function NavbarMobile({ setCartValue, cartValue }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  function itemCountLimit(setCartValue, cartValue) {
    if (cartValue == 1) {
      setCartValue(1);
    } else {
      setCartValue(cartValue - 1);
    }
  }
  return (
    <div className="navbarMobile ">
      <div className=" xl:hidden  fixed bottom-0 z-40 py-3  flex w-screen justify-center bg-white rounded-sm shadow-2xl   drop-shadow-2xl">
        {linksItems.map((item) => (
          <div className="navbarMobile__item mx-auto   cursor-pointer ">
            <div className="navbarMobile__link mx-auto w-full ">
              <div className="wfull p-2 text-center      " onClick={item.cart?()=>onOpen():null}>
                <div className="w-full px-3 py-2">
                  <p className="text-3xl  text-blue-500 ">{item.icon}</p>
                </div>
                <div className="title text-sm  ">
                  <p className="text-gray-500 font-semibold">{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="blur"
        className=" h-[29rem]"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 w-full">
                <span className="font-semibold text-2xl ">سبد خرید</span>
              </ModalHeader>
              <ModalBody className=" overflow-scroll ">
                {cartProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex product border-b-2 w-full pb-2 "
                  >
                    <Image width={150} height={120} src={product.img}></Image>
                    <div className="h-full">
                      <div className=" w-[21rem] text-[14px] pr-3 py-3 text-gray-700 ">
                        <p className="w-full">{product.name}</p>
                      </div>
                      <div className="flex justify-between w-full  px-4 items-center ">
                        <div className="w-full">
                          <span className="text-black font-semibold text-xl items-center h-full">
                            {product.price}
                          </span>
                        </div>
                        <div className="border-t-2 border-b-2  border-primary flex gap-4 py-2  bg-white rounded-xl shadow-xl ">
                          <button
                            onClick={() => setCartValue(cartValue + 1)}
                            className="p-2 text-xl hover:cursor-pointer text-black font-semibold"
                          >
                            <FaPlus />
                          </button>
                          <p className="  content-center text-black text-2xl">
                            {cartValue}
                          </p>
                          <button
                            onClick={(e) =>
                              itemCountLimit(setCartValue, cartValue)
                            }
                            className="hover:cursor-pointer p-2 text-xl text-black font-semibold"
                          >
                            <FiMinus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <div className="add_to_cart mb-1 shadow-lg  h-[5rem] flex justify-between container  bottom-0 z-30 px-6 pb-4 w-full   ">
                  <div className="w-full">
                    <p className="font-semibold text-base   text-gray-600">
                      مبلغ قابل پرداخت
                    </p>
                    <p className="font-semibold text-xl  text-green-600">
                      8٬300٬000 تومان
                    </p>
                  </div>
                  <button className=" btn  bg-primary w-[14rem] text-base  hover:bg-primary text-white    py-2   rounded-lg  h-full  content-center">
                    <div className="flex">
                      <span className=" text-lg px-3">مشاهده سبد خرید</span>
                      <span>
                        <FaCartArrowDown className="inline" size={20} />
                      </span>
                    </div>
                  </button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default NavbarMobile;
