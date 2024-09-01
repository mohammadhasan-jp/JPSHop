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
   <div className='py-4   '>
     <div className='accordion '>
        <div className='accordion-item '>
            <button onClick={openAccordion} className='flex justify-between w-full px-7 items-center '>
                <span className='accordion-title text-base 2xl:text-xl font-semibold text-gray-600'>{title}</span>
                <span className=' text-gray-600   text-lg 2xl:text-xl '>{isOpen?<IoIosArrowDown />:<IoIosArrowBack />}</span>
            </button>
            
            <div className={` px-6 pt-0 overflow-y-auto transition-[max-height] duration-300 ease-in-out  ${isOpen ? "max-h-40" : "max-h-0"}`}>
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