import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from 'react';
import product1 from "../assets/product1.png"
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
    price: "15.500.000",
    like: true,
  },
  {
    id: 4,
    name: "کولر پردازنده DeepCool LS720 SE - White",
    img: product2,
    price: "3.500.000",
    like: false,
  },
  {
    id: 5,
    img: product4,
    price: "5.500.000",
    name: "رم Corsair Vengea 16GB Dual",
    like: false,
  },

];
function Cart() {
  
    return (
        <>

            <div className='w-full '>
                <div className='grid grid-cols-7 w-full '>

                    <div className='col-span-7 md:col-span-5  w-full  pt-11'>

                        {products.map((items,index)=>(
                            <div key={index} className='bg-white lg:mx-12 p-7
                             rounded-xl shadow-lg mb-4'>
                            <div className=' grid-cols-6 w-full grid'>
                                <div className='col-span-2 md:col-span-2 px-2 md:px-10  md:w-full'>
                                    <Image src={items.img} className=" w-full"></Image>
                                </div>
                                <div className='col-span-4 md:col-span-4  h-full  px-4 w-full'>
                                    <div className='w-full'>
                                        <h4 className='text-sm md:text-lg font-bold text-black'>{items.name}</h4>
                                    <div className="h-full  justify-between gird-cols-5">
                                        <div className='details p-1  col-span-4 flex'>
                                            <div className='text-xs items-start w-full py-2'>
                                                <p className="py-1 text-black  font-semibold">پنل: <span className='font-semibold text-gray-500 '> IPS </span></p>
                                                <p className="py-1 text-black font-semibold">نرخ بروزرسانی :<span className='font-semibold text-gray-500 '> 144 </span></p>
                                                <p className="py-1 text-black font-semibold">رزولیشن :<span className='font-semibold  text-gray-500'> 1080p </span></p>
                                                <button className='text-primary bg-white  font-semibold flex gap-2 pt-2   outline-0 items-center text-sm  ' size='sm'  >
                                                مشاهده کالا <FaLongArrowAltLeft />
                                            </button>
                                            </div>
                                            <div className='payment   col-span-1 w-full  content-end md:my-auto '>
                                           <div className='flex justify-end w-full gap-2'>
                                           <span className='font-extrabold text-[20px] lg:text-3xl flex'>{items.price} <span className='text-gray-400 text-sm  pr-3'>تومان</span></span>
                                          
                                          <button  className=' duration-100   rounded-full text-danger px-1'>
                                          <TiDelete size={25}/>
                                          </button>
                                           </div>
                                           
                                        </div>
                                     
                                        </div>
                                        
                               
                                    </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        ))}


                    </div>
                    <div className='col-span-7 md:col-span-2 h-full w-full pb-10 '>

                        <div>
                            <div className="px-[1rem] pt-10 ">
                                <Card className="px-6 font-semibold shadow-lg ">
                                    <CardHeader className="border-b-1 py-5 text-gray-600">
                                    <FaFileInvoiceDollar />
                                        <h3 className='px-2'>اطلاعات پرداخت</h3>
                                        
                                    </CardHeader>
                                    <CardBody className="border-b-1 py-5">
                                        <div className=" flex justify-between w-full text-gray-600 py-4">
                                            <p>جمع کل :</p>
                                            <p>628,000</p>
                                        </div>
                                        <div className=" flex justify-between w-full">
                                            <p className="text-gray-600"> تخفیف :</p>
                                            <p className="text-red-600">192,000 -</p>
                                        </div>
                                    </CardBody>
                                    <CardFooter className='block'>
                                        <div className="text-semibold text-base flex justify-between w-full py-3 ">
                                            <p className="text-gray-600 font-bold">مبلغ قابل پرداخت :</p>
                                            <p className="text-primary">439,000 <span className="text-gray-400">تومان</span></p>


                                        </div>
                                        <div className='w-full font-semibold py-3'>
                                            <Button className='bg-primary text-white font-semibold  shadow-xl outline-0' size='lg' fullWidth radius='sm'>
                                            <Link to={"/confirmPayment"}>
                                            پرداخت سفارش
                                            </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Cart