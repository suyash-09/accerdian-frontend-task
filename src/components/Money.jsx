import React from "react";
import MoneyPic from "../assets/money.png";

const Money = () => {
  return (
    <div className="">
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute lg:left-[13%] lg:top-[30%] rotate-180 scale-x-[-1]"
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute lg:right-[37%] lg:top-[31%] rotate-180"
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute lg:left-[42%] lg:top-[90%] z-[3] scale-x-[-1] scale-90"
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute lg:right-[14%] lg:top-[60%] rotate-180 scale-x-[-1] scale-90"
      />
    </div>
  );
};

export default Money;
