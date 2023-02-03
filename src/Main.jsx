import React, { useState } from "react";
import Wrapper from "./components/hoc/Wrapper";
import Header from "./components/Header";
import firstSlider from "./assets/img/slider.12.jpg";
import secSlider from "./assets/img/slider.9.jpg";
import thirdstSlider from "./assets/img/slider.11.jpg";
import fourthSlider from "./assets/img/slider.3.jpg";
import fifthSlider from "./assets/img/slider.0.jpeg";
import bannerOne from "./assets/img/item-1.jpg";
import bannerTwo from "./assets/img/item-2.jpg";
import bannerthree from "./assets/img/item-3.jpg";
import bannerfour from "./assets/img/item-4.jpg";
import bannerfive from "./assets/img/item-5.jpg";
import bannersix from "./assets/img/item-6.jpg";
import banner_1 from "./assets/img/banner-2-1.jpg";
import banner_2 from "./assets/img/banner-2-2.jpg";
import { Laptop, Accessories, Offer } from "./data/FakeData";
import ProductCard from "./components/ProductCard";
import {
  LaptopOutlined,
  ArrowLeftOutlined,
  CustomerServiceOutlined,
  FireOutlined,
} from "@ant-design/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "./style/swipercard.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Title from "./components/Title";
import "swiper/css/bundle";
import { EffectCards } from "swiper";
import Footer from "./components/Footer";
const Main = ({ handleItem, size }) => {
  const [inpValue, setInpValue] = useState();

  // concat array
  let fakeDataSearch = Laptop.concat(Accessories).concat(Offer);

  return (
    <Wrapper>
      <Header
        size={size}
        inpValue={inpValue}
        fakeDataSearch={fakeDataSearch}
        setInpValue={setInpValue}
      />

      {/* searchResult section */}
      <div className="flex justify-center items-center">
        <div
          className={
            inpValue
              ? "border mt-6 w-[90vw] flex-wrap flex justify-center h-max"
              : "h-[0px]"
          }
        >
          {inpValue
            ? inpValue.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    parentClss={
                      "w-[200px] bg-[#ededed] md:h-[300px] h-[370px] text-center mx-1 my-3"
                    }
                    item={item}
                    btnclss={"bg-green-500 w-[80%]"}
                    onClick={() => handleItem(item)}
                  />
                );
              })
            : null}
        </div>
      </div>

      {/* swiper slider on head*/}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        autoplay={true}
        className=" mySwiper w-[90vw] h-[40vw] md:h-[25vw] mt-2 md:mt-8 cursor-pointer"
      >
        <SwiperSlide>
          <img src={firstSlider} alt="battery" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secSlider} alt="smartwatch" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdstSlider} alt="camera" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fifthSlider} alt="manitor" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fourthSlider} alt="laptop" className="w-full h-full" />
        </SwiperSlide>
      </Swiper>

      {/* banner item */}
      <div className="baners md:mt-12 mt-4 w-full  flex flex-col items-center ">
        <div className="w-[90vw] flex justify-between md:flex-row flex-col">
          <img
            src={bannerOne}
            alt="pc"
            className="md:w-[48%] hover:shadow-2xl w-full cursor-pointer"
          />
          <img
            src={bannerTwo}
            alt="pc"
            className="md:w-[48%] hover:shadow-2xl w-full cursor-pointer mt-4 md:mt-0"
          />
        </div>

        <div className="flex mt-6 w-[90vw] flex-wrap justify-between ">
          <img
            src={bannerthree}
            className="w-[48%] hover:shadow-2xl md:w-[22%] cursor-pointer"
            alt="manitor"
          />
          <img
            src={bannerfour}
            className="w-[48%] hover:shadow-2xl md:w-[22%] cursor-pointer"
            alt="accessories"
          />
          <img
            src={bannerfive}
            className="w-[48%] hover:shadow-2xl md:w-[22%] mt-4 md:mt-0 cursor-pointer"
            alt="case"
          />
          <img
            src={bannersix}
            className="w-[48%] hover:shadow-2xl md:w-[22%] mt-4 md:mt-0 cursor-pointer"
            alt="console"
          />
        </div>
      </div>

      {/* slider card for laptop */}

      <div>
        <Title txt={"لپ تاپ"} bg={"bg-[#5b5ea6]"}>
          <LaptopOutlined className="text-white scale-150" />
        </Title>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            500: {
              width: 500,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            900: {
              width: 900,
              slidesPerView: 4,
            },
            1000: {
              width: 1000,
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-[90vw] border-l  mt-5 h-max"
        >
          {Laptop.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="bg-[#ededed] h-[350px] border-2 text-center  hover:border-b-[#5b5ea6] "
              >
                <ProductCard
                  key={item.id}
                  parentClss={"pl-20"}
                  item={item}
                  btnclss={"bg-[#5b5ea6]"}
                  onClick={() => handleItem(item)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* slider for pc accessories */}

      <div>
        <Title bg={"bg-[#133337]"} txt={"لوازم جانبی"}>
          <CustomerServiceOutlined className="text-white scale-150" />
        </Title>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            500: {
              width: 500,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            900: {
              width: 900,
              slidesPerView: 4,
            },
            1000: {
              width: 1000,
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-[90vw] border-l  mt-5 h-max"
        >
          {Accessories.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="bg-[#ededed] h-[350px] border-2 text-center  hover:border-b-[#133337] "
              >
                <ProductCard
                  parentClss={"pl-20"}
                  item={item}
                  key={item.id}
                  btnclss={"bg-[#133337]"}
                  onClick={() => handleItem(item)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* section two for banner */}
      <div className="w-full flex justify-center">
        <div className="w-[90vw] mt-8 h-max sm:flex-row sm:justify-between flex flex-col">
          <img
            src={banner_1}
            className="sm:w-[48%] w-[100%] rounded-3xl hover:shadow-2xl cursor-pointer h-full"
            alt=""
          />
          <img
            src={banner_2}
            className="sm:w-[48%] w-[100%] mt-4 sm:mt-0 rounded-3xl hover:shadow-2xl cursor-pointer h-full"
            alt=""
          />
        </div>
      </div>

      {/* start offer section  */}
      <h2 className="text-center mt-8 font-semibold text-[23px]">
        پیشنهاد شگفت انگیزما{" "}
        <FireOutlined className="scale-[1.8] text-[#ffae00] " />
      </h2>
      <div className="w-full flex h-max justify-center">
        <div className="w-[90vw] rounded-2xl sm:justify-evenly flex sm:flex-row flex-col justify-center items-center h-[500px] sm:h-[350px] gradient mt-8">
          <div className="flex flex-col text-white justify-center">
            <h1 className="cursor-pointer text-[30px] text-white font-semibold">
              D I G I W I N S
            </h1>
            <p>خدمات ویژه برای اعضای D I G I W I N S</p>
            <button className="w-[130px] mt-4 cursor-pointer rounded-lg h-[40px] border border-[#ededed]">
              ورود <ArrowLeftOutlined />
            </button>
          </div>

          <div className="w-[100%] sm:w-[30%] flex items-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper  swipper"
            >
              {Offer.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="bg-[#ededed]  rounded-sm h-[300px] mt-3 border-2 text-center  hover:border-b-[#5b5ea6] "
                  >
                    <ProductCard
                      item={item}
                      key={item.id}
                      btnclss={"bg-[#5b5ea6]"}
                      onClick={() => handleItem(item)}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </Wrapper>
  );
};

export default Main;
