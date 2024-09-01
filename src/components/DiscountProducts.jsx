import React from 'react'
import headphone from '../assets/headphone-M8ndZJ0u.png'
function DiscountProducts() {
  return (
    <div>
        <div className='py-7 m-auto h-full font-semibold '>
            <div className='DiscountProducts w-full p-5 px-10 lg:flex h-full row lg:h-96 text-end text-brandWhite items-center justify-between  bg-primary rounded-3xl'>
            <div className='text-end gap-4 grid lg:w-2/6'>
                    <p data-aos="fade-up" className='font-bold text-sm'>30% OFF</p>
                    <p data-aos="fade-up" className='text-2xl lg:text-7xl'>FINE SMILE</p>
                    <p data-aos="fade-up" className='font-bold text-sm'> 10 an to 28 Jan</p>
                   
                </div>
                {/* Discount photo */}
                <div className='gird lg:w-4/6' data-aos="zoom-in">
                    <img className='m-auto w-[8rem]  ' src={headphone} alt="discount" />
                </div>
                
                {/* Discount photo */}
                <div className='gap-4 grid px-5 text-start lg:w-2/6'> 
                    <p data-aos="fade-down" className='font-bold text-sm lg:text-xl  '>Air Solo Bass</p>
                    <h1 data-aos="fade-down" className=' text-2xl lg:text-4xl  '>فروش زمستانی</h1>
                    <p data-aos="fade-down" className='font-bold text-sm py-3'> تو زمستون سرد یه آهنگ گرم می چسبه </p>
                    <button className='w-36 bg-brandWhite hover:text-primary hover:bg-white duration-300 text-primary px-3 py-2 rounded-md font-semibold'>مشاهده همه</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default DiscountProducts