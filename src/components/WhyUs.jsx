import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
const fontStyleGray='text-gray-500 font-semibold text-sm lg:text-lg';
function WhyUs() {
  return (
    <div>
      <div className="whyus  py-10">
        <div>
          <h1 className="text-3xl py-16 text-center font-semibold text-primary border-b-2 border-primary">
            چرا JPsHOp?
          </h1>
          <ul className="grid grid-cols-4 justify-between  lg:container py-16 gap-5  ">
            <li className="row flex gap-3 justify-center col-span-2 lg:col-span-1">
              
                <TbTruckDelivery size={50} />
                <div className=" ">
                  <p className="text-xl lg:text-2xl font-bold text-primary">حمل و نقل رایگان </p>
                  <p className={fontStyleGray}>پست رایگان برای تمامی محصولات</p>
            
              </div>
            </li>
            <li className=" row flex gap-3 justify-center col-span-2 lg:col-span-1">
            <RiSecurePaymentFill size={50} />
              <div className="row">
                <p className="text-xl  lg:text-2xl font-bold text-primary ">امنیت</p>
                <p className={fontStyleGray}> تضمین بازشگت کامل وجه</p>
              </div>
            </li>
            <li className="row flex gap-3 justify-center col-span-2 lg:col-span-1">
            <AiFillSafetyCertificate size={50}/>
              <div className="row">
                <p className="text-xl  lg:text-2xl font-bold text-primary">پرداخت امن</p>
                <p className={fontStyleGray}> با خیالت راحت پداشت داشته باش</p>
              </div>
            </li>
            <li className="row flex gap-3 justify-center col-span-2 lg:col-span-1">
            <MdSupportAgent size={50}/>
              <div className="row">
                <p className="text-xl  lg:text-2xl font-bold text-primary">پشتیبانی آنلاین</p>
                <p className={fontStyleGray}> پشتیبانی تکنیکال 24 ساعته</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
