import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdClose } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { v4 as uuidv4 } from 'uuid';

function ConfirmPayment() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userAddress,setUserAddress] = useState([]);
    const uniqueId = `${Date.now()}-${Math.random()}`;

    const onSubmit = (data) => {
        setUserAddress(prevAddresses => [...prevAddresses,{ ...data, id: uuidv4()}]);
        // بررسی وجود خطاها
        const hasErrors = Object.keys(errors).length > 0; // بررسی اینکه آیا خطایی وجود دارد

        if (!hasErrors) {
            // اگر خطایی وجود نداشت، فرم را سابمیت کرده و مودال را ببندید
            // بستن مودال
            onClose();
        }
    };
const deleteAddress=(id)=>{
    setUserAddress(prevAddresses => prevAddresses.filter(address => address.id !== id));
}
    return (

        <>
            <div className='w-full py-10'>
                <div className='grid grid-cols-7 gap-4'>
                    <div className='col-span-7 lg:col-span-5 bg-white p-10 rounded-lg  shadow-md'>
                        <div>
                            <h4 className='pb-5 font-semibold '>انتخاب اطلاعات گیرنده</h4>
                            <div>
                                <Button className=' outline-none hover:text-primary font-semibold bg-white shadow-md ' onPress={onOpen}><FaPlusCircle /> افزودن آدرس  </Button>
                                <Modal className='h-auto overflow-auto' isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} size='4xl' isKeyboardDismissDisabled={true}>
                                    <ModalContent>
                                        {(onClose) => (
                                            <>

                                                <ModalBody className=' h-full overflow-y-auto'>
                                                    
                                                    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full  ">
                                                        <div className='grid grid-cols-7 gap-4'>
                                                            <div className='col-span-7  bg-white xl:p-10 rounded-lg   h-full'>



                                                                <div className='w-full grid grid-cols-2'>


                                                                    <div className='w-full px-2 h-[6rem] xl:h-[5rem] col-span-1  '>
                                                                        <label htmlFor="province" className='text-sm py-2 px-2'>
                                                                            استان :<span className='text-red-500'>*</span>
                                                                        </label>
                                                                        <input
                                                                            {...register('province', { required: true })}
                                                                            type="text"
                                                                            placeholder="یک مورد رو انتخاب کنید"
                                                                            className="text-xs block  md:col-span-1 bg-gray-100 input rounded-full w-full max-w-full focus:outline-none"
                                                                        />
                                                                        {errors.province && <span className="text-red-500 text-xs px-2 ">وارد کردن نام استان الزامی است.</span>}
                                                                    </div>
                                                                    <div className='w-full px-2 h-[6rem] xl:h-[5rem] col-span-1'>
                                                                        <label htmlFor="city" className='text-sm py-2  px-2'>
                                                                            شهر :<span className='text-red-500'>*</span>
                                                                        </label>
                                                                        <input
                                                                            {...register('city', { required: true })}
                                                                            type="text"
                                                                            placeholder="یک مورد رو انتخاب کنید"
                                                                            className="text-xs block md:col-span-1 input bg-gray-100 rounded-full w-full max-w-full focus:outline-none"
                                                                        />
                                                                        {errors.city && <span className="text-red-500 text-xs  px-2">وارد کردن نام شهر الزامی است.</span>}
                                                                    </div>
                                                                </div>

                                                                <div className='grid grid-cols-1 w-full'>
                                                                    <label htmlFor="address" className='py-3 text-sm  px-2'>
                                                                        آدرس خود را وارد کنید :<span className='text-red-500'>*</span>
                                                                    </label>
                                                                    <div className='w-full px-2 pb-2'>
                                                                        <input
                                                                            {...register('address', { required: true })}
                                                                            type="text"
                                                                            placeholder="آدرس خود را وارد کنید"
                                                                            className="input input-bordered input-lg w-full max-w-4xl col-span-1 h-[10rem] bg-gray-100 focus:outline-none border-none text-tiny pb-28"

                                                                        />
                                                                        {errors.address && <span className="text-red-500 text-xs px-2">وارد کردن آدرس الزامی است.</span>}
                                                                    </div>
                                                                </div>

                                                                <div className='w-full grid grid-cols-2 '>
                                                                    <label htmlFor="firstName" className='text-sm py-2  px-2'>
                                                                        نام :<span className='text-red-500'>*</span>
                                                                    </label>
                                                                    <label htmlFor="lastName" className='text-sm py-2  px-2'>
                                                                        نام خانوادگی :<span className='text-red-500'>*</span>
                                                                    </label>
                                                                    <div className='w-full px-2 h-[5rem]'>
                                                                        <input
                                                                            {...register('firstName', { required: true })}
                                                                            type="text"
                                                                            placeholder="نام خود را وارد کنید"
                                                                            className="text-xs col-span-2 md:col-span-1 bg-gray-100 input rounded-full w-full max-w-sm focus:outline-none"
                                                                        />
                                                                        {errors.firstName && <span className="text-red-500 text-xs px-2">وارد کردن نام الزامی است.</span>}
                                                                    </div>

                                                                    <div className='w-full px-2 h-[5rem]'>
                                                                        <input
                                                                            {...register('lastName', { required: true })}
                                                                            type="text"
                                                                            placeholder="نام خانوادگی خود را وارد کنید"
                                                                            className="text-xs col-span-2 md:col-span-1 input bg-gray-100 rounded-full w-full max-w-sm focus:outline-none"
                                                                        />
                                                                        {errors.lastName && <span className="text-red-500 text-xs  px-2">وارد کردن نام خانوادگی الزامی است.</span>}
                                                                    </div>
                                                                </div>

                                                                <div className='w-full grid grid-cols-2'>
                                                                    <label htmlFor="postalCode" className='text-sm py-2  px-2'>
                                                                        کد پستی :<span className='text-red-500 text-xs '>*</span>
                                                                    </label>
                                                                    <label htmlFor="nationalId" className='text-sm py-2  px-2'>
                                                                        کد ملی :<span className='text-red-500 text-xs '>*</span>
                                                                    </label>
                                                                    <div className='w-full px-2 h-[5rem]'>
                                                                        <input
                                                                            {...register('postalCode', { required: true })}
                                                                            type="text"
                                                                            placeholder="کد پستی خود را وارد کنید"
                                                                            className="text-xs col-span-2 md:col-span-1 bg-gray-100 input rounded-full w-full max-w-sm focus:outline-none"
                                                                        />
                                                                        {errors.postalCode && <span className="text-red-500 text-xs px-2">وارد کردن کد پستی الزامی است.</span>}
                                                                    </div>

                                                                    <div className='w-full px-2 h-[5rem]'>
                                                                        <input
                                                                            {...register('nationalId', { required: true })}
                                                                            type="text"
                                                                            placeholder="کد ملی خود را وارد کنید"
                                                                            className="text-xs col-span-2 md:col-span-1 input bg-gray-100 rounded-full w-full max-w-sm focus:outline-none"
                                                                        />
                                                                        {errors.nationalId && <span className="text-red-500 text-xs px-2">وارد کردن کد ملی الزامی است.</span>}</div>
                                                                </div>
                                                                <Button type='submit' color="primary" className='px-5 mr-2 mt-5 mb-10 rounded-lg' >
                                                                    <FaPlusCircle /> افزودن آدرس
                                                                </Button>

                                                            </div>
                                                        </div>

                                                    </form>
                                                </ModalBody>

                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                            </div>
                        </div>

                        <div className='addressAdded'>
                            {
                                userAddress.map((address,index) => {

                                    return (
                                        <div key={address.id} className='flex justify-between items-center w-full py-3 border-b-1 border-t-1 my-5 p-5 rounded-md'>
                                            <div className=' content-center items-center align-middle '>
                                                <p className='text-sm font-semibold text-gray-500 py-2 flex '><GoDotFill /><span className='px-2  align-middle'> آدرس :</span>{address.address}</p>
                                                <p className='text-sm font-semibold text-gray-500 py-2 flex'><GoDotFill /><span className='px-2  align-middle'>نام و نام خانوادگی  : </span>{address.firstName} {address.lastName}</p>
                                                <p className='text-sm font-semibold text-gray-500 py-2 flex'><GoDotFill /><span className='px-2  align-middle'>کد پستی  :</span>{address.postalCode}</p>
                                                <p className='text-sm font-semibold text-gray-500 py-2 flex'><GoDotFill /><span className='px-2  align-middle'>کد ملی  :</span>{address.nationalId}</p>
                                            </div>
                                            <div>
                                                <Button onClick={() => deleteAddress(address.id)} color="danger" className='px-5 mr-2 mt-5 mb-10 rounded-lg font-semibold text-xs' >
                                                    <FaTrash />حذف اطلاعات
                                                </Button>
                                            </div>
                                        </div>
                                    )

                                })

                            }
                        </div>
                    </div>
                    <div className='col-span-7 xl:col-span-2'>

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

        </>
    )
}

export default ConfirmPayment