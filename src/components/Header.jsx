import React from "react";
import Navlist from "./Navlist";
import logo from "../assets/img/logo-circle 2 (2).png";
import {
  SearchOutlined,
  MobileOutlined,
  MenuOutlined,
  TabletOutlined,
  LaptopOutlined,
  FieldTimeOutlined,
  CustomerServiceOutlined,
  RedditOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Dropdown, Space } from "antd";
import { Laptop, SmartWatch } from "../data/DropdownData";
import { Console, Phone, Tablet } from "../data/DropdownData";
import { Link } from "react-router-dom";

const Header = ({ size, inpValue, setInpValue, fakeDataSearch }) => {
  //// state for hamburgerMenu  ////
  const [menu, setMneu] = useState(false);
  const [value, setValue] = useState("");

  ////// clear input
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //////filter data
  const searchHandle = (e) => {
    setValue(e.target.value);
    if (!e.target.value) return setInpValue();

    const searchResult = fakeDataSearch.filter((item) =>
      item.model.toLowerCase().includes(e.target.value)
    );
    setInpValue(searchResult);
  };

  return (
    <header>
      <div className="keeper">
        {/* top header & navbar & mobile menu */}
        <div className="box w-full flex items-center justify-center">
          <div className=" flex justify-between w-[90vw]">
            {/* navbar header */}
            <div className="header-menu hidden md:block">
              <Navlist
                first={"صفحه اصلی"}
                second={"پشتیبانی"}
                third={"تماس با ما"}
                fourth={"درباره ما"}
              />
            </div>

            {/* hamburger menu */}
            <div className="block md:hidden cursor-pointer">
              {menu ? (
                <CloseOutlined
                  onClick={() => setMneu(!menu)}
                  className="scale-150 mr-2"
                />
              ) : (
                <MenuOutlined
                  onClick={() => setMneu(!menu)}
                  className="scale-150 mr-2"
                />
              )}
            </div>

            {/* mobile menu */}

            <div
              className={
                menu
                  ? "bg-[#F5F5F5] z-10 hamburger-menu w-4/12 h-screen absolute top-[50px] transition-all duration-300 ease-linear right-0"
                  : "hamburger-menu w-0  h-screen absolute top-[50px] transition-all right-[-100px]  duration-300 ease-out"
              }
            >
              <ul className="text-[#757575]  w-full h-[100vw] flex flex-col cursor-pointer pt-4">
                <Link to={"/"}>
                  <li className="hover:bg-[#044b55]  flex items-center w-full pr-4  h-[40px] hover:text-[whitesmoke] ">
                    صفحه اصلی
                  </li>
                </Link>
                <li className="hover:bg-[#044b55]  flex items-center w-full pr-4  h-[40px] hover:text-[whitesmoke] ">
                  پشتیبانی
                </li>
                <li className="hover:bg-[#044b55]  w-full pr-4 flex items-center h-[40px] hover:text-[whitesmoke] ">
                  تماس با ما
                </li>
                <li className="w-full pr-4 flex items-center h-[40px] hover:text-[whitesmoke] hover:bg-[#044b55] ">
                  درباره ما
                </li>
                <li className=" w-full text-center text-black text-[18px]  border pb-2 ">
                  فروش ویژه
                </li>
                <li className="hover:bg-[#044b55]  flex items-center w-full pr-4 mt-4 h-[40px] hover:text-[whitesmoke] ">
                  لپ تاپ
                </li>
                <li className="hover:bg-[#044b55]  flex items-center w-full pr-4  h-[40px] hover:text-[whitesmoke] ">
                  تلفن همراه
                </li>
                <li className="hover:bg-[#044b55]  flex items-center w-full pr-4  h-[40px] hover:text-[whitesmoke] ">
                  لوازم جانبی
                </li>
                <li className="hover:bg-[#044b55]  flex items-center w-full pr-4  h-[40px] hover:text-[whitesmoke] ">
                  کنسول
                </li>
                <li className="text-center w-full relative top-[40px] border-t-2 pt-4">
                  <button className="h-[50px]  hover:shadow-lg transition-all duration-300 ease-in w-10/12 text-[black] bg-[#F1F1F1] rounded-none border-solid border-2 ">
                    <span>ورود / ثبت نام</span>
                    <i className="pr-2 fa-sharp fa-solid fa-user"></i>
                  </button>

                  <Link to={"/BagShop"}>
                    <button className="bg-[#D94B58] h-[50px]  hover:shadow-lg transition-all duration-300 ease-in mt-3 w-10/12 text-[whitesmoke] rounded-none">
                      سبد خرید
                      <i className="fa-sharp fa-solid fa-bag-shopping pr-1"></i>
                    </button>
                  </Link>
                  <div className="w-[6px] bg-rose-800 text-[whitesmoke] flex justify-center items-center p-[9px] pt-[12px] font-bold h-[6px] border border-white rounded-full absolute left-[22px] bottom-[13px]">
                    {size}
                  </div>
                </li>
              </ul>
            </div>

            {/* end mobile menu */}

            <div className="flex">
              <p className="pl-4 font-bold">021-55505050</p>
              <p>پشتیبانی همه روزه از ساعت 8 الی 22</p>
            </div>
          </div>
        </div>

        {/* brand & input & buttons */}
        <div className="info flex h-[100px] justify-center   ">
          <div className="w-[90vw] flex flex-row justify-between items-center ">
            <div className="brand lg:flex  md:hidden flex   cursor-pointer  items-center">
              <img src={logo} alt="act2win" />
              <div className="p-4  w-[239px]">
                <p>فروشگاه دیجی وینز</p>
                <span className="text-[#757575]">d i g i w i n s s h o p</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                placeholder="جستو جو. . ."
                className="w-[220px] inpsearch border-[#EEEEEE] rounded-md p-4 border md:w-[350px] inp focus:placeholder:text-xs placeholder:ease-in-out placeholder:transition-all placeholder:duration-500 focus:placeholder:text-[#aaaa]"
                onChange={searchHandle}
                value={value}
              />
              <SearchOutlined className="absolute text-[whitesmoke] w-[29px] h-[33px] flex justify-center rounded-l-md items-center bg-[#D94B58] left-[6px] top-[9px] scale-150 cursor-pointer" />
            </form>

            <div className="btn relative hidden md:flex ">
              <button className="w-[180px] rounded-md h-[50px]  hover:shadow-lg transition-all duration-300 ease-in ml-2  text-[black] bg-[#F1F1F1] ">
                <i className="pl-2 fa-sharp fa-solid fa-user"></i>
                ورود / ثبت نام
              </button>

              <Link to={"/bagShop"}>
                <button className="w-[180px] rounded-md h-[50px]  hover:shadow-lg transition-all duration-300 ease-in bg-[#D94B58] text-[whitesmoke]">
                  <i className="fa-sharp fa-solid fa-bag-shopping pl-2"></i>
                  سبد خرید
                </button>
              </Link>

              <div className="w-[10px] bg-rose-800 text-[whitesmoke] flex justify-center items-center p-4 font-bold h-[10px] border border-white rounded-full absolute left-[10px] top-[10px]">
                {size}
              </div>
            </div>
          </div>
        </div>

        {/* special list dropdown */}
        <div className="special_list md:flex hidden  justify-center mt-5">
          <div className="special  h-[50px] bg-[#044855]  text-[whitesmoke] border border-black flex items-center justify-between">
            <nav className="nav">
              <ul className="flex w-[643px] justify-evenly">
                <li className="cursor-pointer">
                  <Dropdown overlay={Laptop} placement="bottom">
                    <Space>
                      لپ تاپ
                      <LaptopOutlined className="scale-125" />
                    </Space>
                  </Dropdown>
                </li>

                <li className="cursor-pointer">
                  <Dropdown overlay={Phone} placement="bottom">
                    <Space>
                      گوشی موبایل
                      <MobileOutlined className="scale-125" />
                    </Space>
                  </Dropdown>
                </li>

                <li className="cursor-pointer">
                  <Dropdown overlay={Tablet} placement="bottom">
                    <Space>
                      تبلت
                      <TabletOutlined className="scale-125" />
                    </Space>
                  </Dropdown>
                </li>

                <li className="cursor-pointer">
                  <Dropdown overlay={Console} placement="bottom">
                    <Space>
                      کنسول
                      <RedditOutlined className="scale-125" />
                    </Space>
                  </Dropdown>
                </li>

                <li className="cursor-pointer">
                  <Dropdown overlay={Laptop} placement="bottom">
                    <Space>
                      لوازم جانبی
                      <CustomerServiceOutlined className="scale-125" />
                    </Space>
                  </Dropdown>
                </li>

                <li className="cursor-pointer">
                  <Dropdown overlay={SmartWatch} placement="bottom">
                    <Space>
                      ساعت هوشمند
                      <FieldTimeOutlined className="scale-125" />
                    </Space>
                  </Dropdown>
                </li>
              </ul>
            </nav>

            <div className="special_btn">
              <button className="bg-[#022e39] font-semibold w-[150px] h-[48px] rounded-none text-[whitesmoke] ">
                فروش ویژه
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
