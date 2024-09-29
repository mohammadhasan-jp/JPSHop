import React from 'react'
import { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import './accordion.css'
function Accordion({title,content}) {
    const [isOpen,setIsOpen]=useState(false);
    const openAccordion=()=>{
        setIsOpen(!isOpen);
    }
  return (
   <div className='py-2 '>
     <div className='accordion bg-white py-5 rounded-xl shadow-lg'>
        <div className='accordion-item '>
            <button onClick={openAccordion} className='flex justify-between w-full px-4 items-center '>
                <span className='accordion-title   2xl:text-base font-semibold text-gray-600 text-xl'>{title}</span>
                <span className=' text-primary   text-base 2xl:text-lg  font-semibold'>{isOpen?<IoIosArrowDown />:<IoIosArrowBack />}</span>
            </button>
            
            <div className={`  overflow-y-auto transition-[max-height] duration-300 ease-in-out w-full px-5 2xl:px-2 ${isOpen ? "max-h-40" : "max-h-0"}`}>
        <p className="pb-4 text-center text-gray-600 pt-4 text-base 2xl:text-xl font-semibold ">
          {content}
        </p>
      </div>
        </div>
    </div>
   </div>
  )
}

export default Accordion;