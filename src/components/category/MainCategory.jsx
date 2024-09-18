import React from "react";
import { Link } from "react-router-dom";

import CategoryFilters from "./CategoryFilters";
import product1 from "../category/assets/product1.png";
import product2 from "../category/assets/product2.png";
import product3 from "../category/assets/product3.png";
import product4 from "../category/assets/product4.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { RiRadioButtonLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "./mainCategory.css";
import { FaFilter } from "react-icons/fa";
import Accordion from "./Accordion";

const filters = [
  {
    id: 1,
    name: "مدل کارت گرافیک",
    items: [
      {
        id: 1,
        name: "rtx 3080",
        checked: false,
      },
      {
        id: 2,
        name: "rtx 3090",
        checked: false,
      },
      {
        id: 3,
        name: "rtx 2060",
        checked: false,
      },
      {
        id: 4,
        name: "rtx 2070",
        checked: false,
      },
      {
        id: 5,
        name: "rtx 3070",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    name: "مدل پردازنده",
    items: [
      {
        id: 1,
        name: "intel 13900H",
        checked: false,
      },
      {
        id: 2,
        name: "intel 14900k",
      },
      {
        id: 3,
        name: "amd radeon",
      },
      {
        id: 4,
        name: "ryzen 5400h",
      },
    ],
  },
  {
    id: 3,
    name: "برند ",
    items: [
      {
        id: 1,
        name: "intel 13900H",
        checked: false,
      },
      {
        id: 2,
        name: "intel 14900k",
      },
      {
        id: 3,
        name: "amd radeon",
      },
      {
        id: 4,
        name: "ryzen 5400h",
      },
    ],
  },
  {
    id: 4,
    name: "مدل پردازنده",
    items: [
      {
        id: 1,
        name: "intel 13900H",
        checked: false,
      },
      {
        id: 2,
        name: "intel 14900k",
      },
      {
        id: 3,
        name: "amd radeon",
      },
      {
        id: 4,
        name: "ryzen 5400h",
      },
    ],
  },
];

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
    img: product4,
    price: "1.500.000",
    like: false,
  },
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
    img: product4,
    price: "1.500.000",
    like: false,
  },
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
    img: product4,
    price: "1.500.000",
    like: false,
  },
];
function mainCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  function openAc() {
    document.querySelectorAll(".accordion-button").forEach((button) => {
      button.addEventListener("click", () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle("active");
      });
    });
  }

  return (
    <>
      <div className="py-14">
        <div className="grid grid-cols-5">
          {/*  filters section */}
          <div className="col-span-1 text-center mx-1 hidden 2xl:block w-full">
            <div>
              <div className="title py-4 text-3xl font-semibold">
                فیلتر کالا
              </div>
            </div>
            <CategoryFilters />
            <div></div>
          </div>
          {/*  filters section */}

          {/*  product filtered section */}
          <div className="col-span-5  2xl:col-span-4 w-full">
            <div>
              <ul className="flex py-4 gap-4   xl:gap-6  w-full xl:text-xl font-semibold items-center xl:mr-4 text-gray-500 rounded-2xl  ">
                <li>
                  <h4 className="xl:text-xl text-xs text-black">
                    مرتب سازی بر اساس :
                  </h4>
                </li>
                <li className=" hidden xl:block hover:bg-primary hover:text-white p-2 rounded-md duration-300">
                  <a href="" className="xl:text-lg text-sm">
                    کمترین قیمت
                  </a>
                </li>
                <li className=" hover:bg-primary hover:text-white p-2 rounded-md duration-300">
                  <a href="" className="xl:text-lg text-sm">
                    بالاتری قیمت
                  </a>
                </li>
                <li className=" hover:bg-primary hover:text-white p-2 rounded-md duration-300">
                  <a href="" className="xl:text-lg text-sm">
                    محبوب ترین ها
                  </a>
                </li>
                <li className=" hover:bg-primary hover:text-white p-2 rounded-md duration-300">
                  <a href="" className="xl:text-lg text-sm">
                    پرفروش ترین
                  </a>
                </li>
              </ul>
            </div>

            <div className="gap-5 grid grid-cols-4">
              {products.map((product, index) => (
                <Card
                  id={index}
                  className=" container col-span-4 lg:col-span-2 2xl:col-span-1  hover:border-primary border-2 duration-300 "
                >
                  <Link to={"/products/ProductPage"}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <div className="text-xl">
                        {product.id ? <FaRegHeart /> : <FaHeart />}
                      </div>
                    </CardHeader>
                    <CardBody className=" overflow-visible py-2 2xl:h-96 ">
                      <Image
                        radius="lg"
                        src={product.img}
                        className="w-full object-cover container  px-5 xl:p-1 py-1 rounded-xl"
                      />
                      <p className="text-base content-center font-semibold card-title px-4 pt-5 inline-block text-ellipsis text-gray-700 my-auto">
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
              ))}
            </div>
            <div className="flex justify-center py-4">
              <Pagination
              className=" my-auto"
              size="lg"
                loop
                showShadow
                showControls
                color="primary"
                total={10}
                initialPage={1}
              />
            </div>
          </div>

          {/*  product filtered section */}
        </div>
        {/* filter btn and section in mobile query */}
        <div>
          <div className="filter-btn-mobile fixed bottom-28 left-5   z-40">
            <Button
              radius="full"
              onPress={() => handleOpen("full")}
              className="flex 2xl:hidden btn py-10 flex-wrap hover:bg-primary hover:text-white  content-center my-auto"
            >
              <FaFilter className="text-center text-2xl" />
            </Button>

            <Modal
              size={"full"}
              isOpen={isOpen}
              onClose={onClose}
              className="p-5 bg-brandWhite 2xl:hidden block"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 ">
                      فیلتر ها
                    </ModalHeader>
                    <ModalBody>
                      <div className=" text-center rounded-2xl bg-white py-4 w-full   ">
                        <div className="w-full mx-auto px-4">
                          <div className=" text-center rounded-2xl bg-white py-4 w-full   ">
                            {filters.map((filter) => (
                              <Accordion
                                title={filter.name}
                                content={
                                  <div className="form-control    gap-[1px]  ">
                                    {filter.items.map((item) => (
                                      <label className="label cursor-pointer px-6">
                                        <input
                                          type="checkbox"
                                          className="checkbox   text-4xl  checkbox-info "
                                        />
                                        <span className="label-text text-xl text-gray-600">
                                          {item.name}
                                        </span>
                                      </label>
                                    ))}
                                  </div>
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="filter-btn py-6   items-center flex justify-center  ">
                        <button className="btn  text-2xl text-gray-600 font-semibold   w-full rounded-xl hover:bg-primary hover:text-white bg-white duration-300 ">
                          فیلتر
                        </button>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
        {/* filter btn and section in mobile query */}
      </div>
    </>
  );
}

export default mainCategory;
