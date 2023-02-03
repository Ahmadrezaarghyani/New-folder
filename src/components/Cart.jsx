import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
// import { useState } from 'react'

const Cart = ({
  price,
  model,
  url,
  filterHandler,
  amount,
  minesHandler,
  plusHandler,
}) => {
  //    const [value , setValue] = useState(amount)
  return (
    <div className=" md:w-[40vw] cursor-pointer w-[90vw] justify-between p-5 hover:shadow-xl border mr-10 mt-5  flex items-center">
      <img src={url} className="w-[30%] border sm:w-[20%] " alt={model} />
      <div>
        <p className="font-bold">{model}</p>
        <p className="text-[16px]">{price}</p>
      </div>
      <div className="flex">
        <button
          onClick={plusHandler}
          className="w-[30px] bg-[#271949] h-[30px] text-white text-[20px] flex justify-center items-center rounded-full"
        >
          +
        </button>
        <p className="px-1 pt-1 text-[19px] font-bold">{amount}</p>
        <button
          onClick={minesHandler}
          className="w-[30px] bg-[#271949]  h-[30px] text-white text-[20px] flex justify-center items-center rounded-full"
        >
          -
        </button>
      </div>
      <CloseCircleOutlined
        onClick={filterHandler}
        className="scale-[2] pr-3 text-red-600"
      />
    </div>
  );
};

export default Cart;
