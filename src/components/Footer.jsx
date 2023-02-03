import React from "react";
import logo from "../assets/img/logo-circle 2 (2).png";
import {
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="w-full flex justify-evenly">
      <div className="w-[100%] bg-[#ededed] sm:h-[300px] h-max flex flex-col  mt-[20px]">
        <div className="w-[100%] h-max flex flex-col sm:flex-row justify-between px-20 pt-8">
          <div className="flex cursor-pointer  ">
            <img src={logo} alt="act2win" className="w-[80px] h-[80px]" />
            <div className="p-4  w-max">
              <p className="text-[24px]">فروشگاه دیجی وینز</p>
              <span className="text-[#757575]">d i g i w i n s s h o p</span>
            </div>
          </div>

          <div className="flex flex-col  ">
            <h1 className="cursor-pointer text-[30px] font-semibold">
              D I G I W I N S
            </h1>
            <p>تماس باما 021-55055245 | پشتیبانی همه روزه از ساعت 8 الی 22</p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex justify-between w-[90vw] mt-4">
            <div className="w-[90vw] flex flex-col sm:flex-row items-center sm:justify-between">
              <div className="flex w-[70vw] sm:w-[40vw] justify-between">
                <ul className="leading-7 cursor-pointer">
                  <li className="font-bold text-[17px]">DG WINS</li>
                  <li className="pt-3">صفحه اصلی</li>
                  <li> تماس باما</li>
                  <li>درباره ما</li>
                  <li>پشتیبانی</li>
                </ul>

                <ul className="leading-7 cursor-pointer">
                  <li className="font-bold text-[17px]">خدمات مشتریان</li>
                  <li className="pt-3">پاسخ به پرسش های متداول</li>
                  <li> رویه های بازگرداندن کالا</li>
                  <li>شرایط استفاده</li>
                  <li>حریم خصوصی</li>
                </ul>
              </div>

              <div className="flex w-[70vw] mt-7 sm:mt-0 sm:w-[40vw] justify-between">
                <ul className="pb-3 leading-7 cursor-pointer">
                  <li className="font-bold text-[17px]">راهنمای استفاده</li>
                  <li className="pt-3">نحوه ثبت سفارش</li>
                  <li>رویه ارسال سفارش</li>
                  <li>شیوه پرداخت</li>
                </ul>

                <ul className="leading-7  cursor-pointer">
                  <li className="font-bold text-[17px]">همراه ما باشید</li>
                  <li className="flex justify-between">
                    <li>
                      <InstagramOutlined className="scale-150" />
                    </li>
                    <li>
                      <FacebookOutlined className="scale-150" />
                    </li>
                    <li>
                      <TwitterOutlined className="scale-150" />
                    </li>
                    <li>
                      <YoutubeOutlined className="scale-150" />
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
