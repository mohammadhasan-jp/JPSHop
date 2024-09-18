import React from 'react'
import product from '../assets/rogstrix.png'
import './discountProduct.css'
function DiscountProducts2() {
  return (
    <div>
        <div className='py-7 m-auto r h-full font-semibold pb-24 '>
            <div className='DiscountProducts p-5 px-10 lg:flex h-full  row lg:h-96 text-end text-brandWhite items-center justify-between rog_bg  rounded-3xl'>
            <div className='text-end gap-4 grid  lg:w-2/6'>
                    <p data-aos="fade-up" className='font-bold text-sm'>30% OFF</p>
                    <p data-aos="fade-up" className='text-2xl lg:text-7xl'>HAPPY 
                        HOURS</p>
                    <p data-aos="fade-up" className='font-bold text-sm'> 14 an to 28 Jan</p>
                   
                </div>
                {/* Discount photo */}
                <div className='grid lg:w-4/6' data-aos="zoom-in">
                    <img className=' m-auto object-cover object-center h-[30rem] bg-no-repeat' src={product} alt="discount" />
                </div>
                
                {/* Discount photo */}
                <div className='gap-4 grid px-5 text-start lg:w-2/6'> 
                    <p data-aos="fade-down" className='font-bold text-sm lg:text-xl  '>Smart Solo</p>
                    <h1 data-aos="fade-down" className=' text-2xl lg:text-4xl  form-control'>فروش زمستانی ! </h1>
                    <button className='w-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-white duration-300 text-white px-3 py-2 rounded-md font-semibold'>مشاهده همه</button>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default DiscountProducts2