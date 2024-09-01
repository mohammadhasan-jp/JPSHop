import React from 'react'
import adsBanner from '../assets/adsbanner.png'
import './banner.css'
function AdsBanner() {
  return (
    <div className=' '>
        <div className='my-10 max-h-full '>
            <img src={adsBanner} className='h-96 w-full' alt="" />
        </div>
    </div>
  )
}

export default AdsBanner