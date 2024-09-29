import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";
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

function NavbarMobile() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  return (
    <div className="navbarMobile ">
      <div className=" xl:hidden  fixed bottom-0 z-40 py-3  flex w-screen justify-center bg-white rounded-sm shadow-2xl  drop-shadow-2xl">
        {linksItems.map((item) => (
      
          <div className="navbarMobile__item mx-auto   cursor-pointer ">
            <div className="navbarMobile__link mx-auto w-full ">
              <div className="wfull p-2 text-center      " onClick={onOpen}>
                <div className="w-full px-3 py-2">
                  <p className="text-xl - text-blue-500 ">{item.icon}</p>
                </div>
                <div className="title text-xs ">
                  <p className="text-gray-500 font-semibold">{item.name}</p>
                </div>
              </div>
            </div >
          </div>
        
        ))}
      </div>
      <Modal 
        isOpen={isOpen} 
        placement="bottom"
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
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
  );
}

export default NavbarMobile;
