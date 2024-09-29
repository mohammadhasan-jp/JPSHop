import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/20944201.png";
import Alert from "@mui/material/Alert";
/* import {Icon} from 'react-icons-kit'; */
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import { WidthFull, WidthNormalRounded } from "@mui/icons-material";
function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef(null);
  const [mobileError, setMobileError] = useState(false);
  const pins = [1, 2, 3, 4, 5];
  const [loginFrom, setLoginForm] = useState(false);
  const [testPass, setTestPass] = useState(false);
  const [numberPass, setNumberPass] = useState(false);
  const [charPass, setCharPass] = useState(false);
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    let irPhoneNumber = /^09\d{9}$/;
    if (irPhoneNumber.test(inputRef.current.value)) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCodeSent(true);
      }, 3000);

      setMobileError(false);
    } else {
      setMobileError(true);
    }
  };

  const handleLoginForm = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoginForm(true); // نمایش فرم ورود
      setLoading(false); // پایان لودینگ
    }, 3000);
  };
  const savePhoneNumber = () => {
    const inputValue = inputRef.current.value;
    setPhoneNumber(inputValue);
  };
  const handlePinChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      let newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
    }

    if (value.length === 1 && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  };
  const handleBackspace = (e, index) => {
    // اگر کلید Backspace فشار داده شود و input فعلی خالی باشد
    if (e.key === "Backspace" && pin[index] === "") {
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      }
    }
  };

  const testPassword = () => {
    const value = inputRef.current.value;
    const minLength = 6;
    const hasNumber = /\d/;

    
 if(value.length < minLength) {
    setTestPass(true);
    setCharPass(true);
  }else if (!hasNumber.test(value)) {
    setCharPass(false);
    setTestPass(true);
    setNumberPass(true);
   }else{
     setCharPass(false);
     setNumberPass(false);
     setTestPass(false);
   }



   
  };



  const handleTogglePass = () => {
    if (type === "password") {
      setShowPassword(true);
      setType("text");
    } else {
      setShowPassword(false);
      setType("password");
    }
  };
  return (
    <>
      <div className="max-w-full h-full">
        <div className="grid grid-cols-10">
          {/*  main login section */}
          <div className="col-span-10 2xl:col-span-3 h-screen bg-primary 2xl:bg-brandWhite">
            <div className="h-full w-full flex justify-center items-center  px-3  ">
              <div className="border rounded-3xl 2xl:-translate-x-72  ">
                <div className="flex w-[28rem]">
                  <Card className=" px-[1rem] py-10 w-full">
                    <CardHeader className="py-5">
                      <h3 className=" w-full font-bold  text-center text-primary  text-3xl">
                        JPsHOP
                      </h3>
                    </CardHeader>
                    <CardBody>
                      {!codeSent ? (
                        <div className="w-full duration-300">
                          <h3 className=" px-3 py-3 w-full font-semibold  text-start  text-xl">
                            ورود و ثبت نام
                          </h3>
                          <p className="px-2 font-semibold text-gray-500 text-base xl:text-sm text-start py-2 pt-4">
                            سلام! لطفا شماره موبایل خود را وارد کنید
                          </p>
                          <input
                            ref={inputRef}
                            dir="ltr"
                            className={` px-7 w-full mainInput my-3 text-base    bg-brandWhite rounded-2xl py-5    focus:drop-shadow-xl  border-transparent focus:ring-0  focus:bg-white    focus:shadow-md  focus:shadow-primary-400 duration-200 `}
                            type="text"
                          />
                          <div className="">
                            {mobileError ? (
                              <p
                                data-aos="fade-down"
                                className="text-xs p-2 mx-1 w-fit text-start bg-red-500 text-white rounded-md pb-2  font-semibold  my-2 "
                              >
                                شماره موبایل را درست وارد کنید
                              </p>
                            ) : null}
                          </div>
                          <p className="rools px-1 text-start  font-semibold  text-base py-1">
                            ورود شما به معنای پذیرش{" "}
                            <a href="" className="text-primary">
                              شرایط جی پی شاپ
                            </a>{" "}
                            و{" "}
                            <a href="" className="text-primary">
                              قوانین
                            </a>{" "}
                            آن میباشد
                          </p>
                        </div>
                      ) : !loginFrom ? (
                        <div className="w-full duration-300">
                          <h3 className=" px-3 py-3 w-full font-semibold  text-start  text-2xl">
                            ورود و ثبت نام
                          </h3>
                          <p className="px-2 font-semibold text-gray-500 text-base xl:text-lg text-start py-2 pt-4">
                            کد تایید به شماره موبایل {phoneNumber} ارسال شد
                          </p>
                          <p className="px-2 font-semibold text-gray-500 text-base xl:text-lg text-start py-6 pt-4">
                            لطفا کد اعتبار سنجی رو وارد کنید
                          </p>
                          <div
                            className="flex gap-x-3 text-center justify-center"
                            dir="rtl"
                          >
                            {" "}
                            {/* Set direction to RTL */}
                            {pins.map((index) => (
                              <input
                                id={index}
                                key={index}
                                type="text"
                                maxLength={1}
                                onChange={(e) => handlePinChange(e, index)}
                                onKeyDown={(e) => handleBackspace(e, index)}
                                className="block  focus:shadow-lg w-[60px] h-[70px] text-center rounded-3xl  border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500 font-semibold "
                                dir="ltr"
                                autoFocus={index == 6}
                                data-aos="fade-down"
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="px-2 font-semibold text-gray-500 text-base xl:text-lg text-start py-1 pt-4">
                            نام کاربری خود را وارد کنید :
                          </p>
                          <input
                            ref={inputRef}
                            dir="ltr"
                            className={` px-7 w-full mainInput my-3 text-xl    bg-brandWhite rounded-2xl py-5    focus:drop-shadow-xl  border-transparent focus:ring-0  focus:bg-white    focus:shadow-md  focus:shadow-primary-400 duration-200 `}
                            type="text"
                            data-aos="fade-down"
                          />

                          <p className="px-2 font-semibold text-gray-500 text-base xl:text-lg text-start py-1 pt-4">
                            رمز خود را وارد کنید :
                          </p>
                        <div className="flex  items-center relative">
                        <input
                            ref={inputRef}
                            dir="ltr"
                            className={` px-7 w-full mainInput my-3 text-xl  z-10   bg-brandWhite rounded-2xl py-5    focus:drop-shadow-xl  border-transparent focus:ring-0  focus:bg-white    focus:shadow-md  focus:shadow-primary-400 duration-200 `}
                            type={type}
                            onChange={testPassword}
                          />
                          <span className="absolute z-30 inline-block  mr-4 cursor-pointer">
                            {showPassword ? (
                              <FaEye
                                size={25}
                                onClick={handleTogglePass}
                              />
                            ) : (
                              <IoMdEyeOff size={25} onClick={handleTogglePass} />
                            )}
                          </span>
                        </div>

                          {testPass ? (
                            <div className="h-auto border text-start p-2  border-red-600 rounded-md bg-red-500  font-semibold duration-100 shadow-lg text-white  px-3 my-2 w-72 mx-1">
                              {charPass ? (
                                <p className="py-1" data-aos="fade-down">
                                  پسورد باید حداقل 6 کارکتر داشته باشد
                                </p>
                              ) : null}
                              {numberPass ? (
                                <p data-aos="fade-down">
                                  پسورد باید حداقل یک عدد داشته باشد
                                </p>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </CardBody>
                    <CardFooter>
                      <div className="h-full w-full flex justify-center  px-1 ">
                        {!codeSent ? (
                          loading ? (
                            <span className="loading loading-infinity loading-lg py-8 text-primary font-semibold "></span>
                          ) : (
                            <Button
                              onClick={() => {
                                handleLogin();
                                savePhoneNumber();
                                
                              }}
                              className="text-white text-2xl w-full py-8"
                              color="primary"
                              variant="shadow"
                            >
                              <span className=" items-center text-lg font-semibold text-white ">
                                ورود
                              </span>
                            </Button>
                          )
                        ) : !loginFrom ? (
                          loading ? (
                            <span className="loading loading-infinity loading-lg py-8 text-primary font-semibold "></span>
                          ) : (
                            <Button
                              className="text-white text-2xl w-full py-8"
                              color="primary"
                              variant="shadow"
                              onClick={handleLoginForm}
                            >
                              <span className=" items-centertext-lgfont-semibold text-white">
                                تایید و ادامه
                              </span>
                            </Button>
                          )
                        ) : (
                          <Button
                            className="text-white text-xl w-full py-8"
                            color="primary"
                            variant="shadow"
                          >
                            <span className=" items-center text-lg font-semibold text-white ">
                              ساخت اکانت
                            </span>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* progress login section  */}
          <div className="hidden 2xl:block 2xl:col-span-7 bg-primary h-screen w-full  rounded-r-3xl">
            <div className="text-center content-center h-full">
              <div className="py-6">
                <ul className="steps steps-vertical lg:steps-horizontal text-xl font-semibold text-brandWhite">
                  <li className="step step-primary">احراز هویت</li>
                  <li className="step step-primary">تکمیل اطلاعات شخص</li>
                  <li className="step">تکمیل خرید</li>
                </ul>
              </div>
              <p className="font-semibold text-brandWhite">
                بعد از اهراز هویت میتونید جزو مشترکین ویژه شوید و از تخفیفات و
                جشواره ها و محصولات جدید با خبر شوید{" "}
              </p>
              <div className="w-full justify-center flex">
                <img
                  className="text-center"
                  src={logo}
                  alt=""
                  width={500}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
