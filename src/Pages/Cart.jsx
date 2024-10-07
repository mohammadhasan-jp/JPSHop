import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import product1 from "../assets/product1.png"
function Cart() {
    return (
        <>

            <div>
                <div className='grid grid-cols-7'>

                    <div className='col-span-5 h-screen w-full  bg-blue-gray-500 pt-12'>

                        <div className='bg-white mx-12 p-4 rounded-md'>
                            <div className='grid grid-cols-5'>
                                <div className='col-span-1 p-4'>
                                    <Image src={product1} className="w-full"></Image>
                                </div>
                                <div className='col-span-4 flex'>
                                    <div>
                                        <p>مانیتور</p>
                                    </div>
                                    <div className="h-full ">
                                        <p>439,000<span>تومان</span></p>
                                        <span></span>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='col-span-2 h-screen w-full bg-red-500'>

                        <div>
                            <div className="px-7 pt-10">
                                <Card className="px-6 font-semibold">
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
                                                پرداخت سفارش
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