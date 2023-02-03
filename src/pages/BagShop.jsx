import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";

const BagShop = ({ size, card, setCard }) => {
  const handleChange = (item, num) => {
    let index = card.indexOf(item);
    card[index].amount += num;
    if (card[index].amount <= 1) {
      card[index].amount = 1;
    }
    setCard([...card]);
  };
  const removeHandler = (index) => {
    let coppy = [...card];
    coppy.splice(index, 1);
    setCard(coppy);
  };

  return (
    <div>
      <Header size={size} />
      <div className="w-full flex justify-center">
        <div className="w-[90vw]  flex flex-wrap">
          {card.length > 0 ? (
            card.map((item, index) => {
              return (
                <Cart
                  key={index}
                  price={item.price}
                  model={item.model}
                  amount={item.amount}
                  filterHandler={() => removeHandler(index)}
                  url={item.url}
                  plusHandler={() => handleChange(item, 1)}
                  minesHandler={() => handleChange(item, -1)}
                />
              );
            })
          ) : (
            <div className="w-full flex justify-center mt-20 mb-20 text-rose-700">
              {" "}
              <h1 className="text-[30px] font-bold text-red-800">
                سبد خرید شما خالی است !
              </h1>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BagShop;
