import React from "react";

const Cards = ({ title, content, logo }) => {
  return (
    <>
      <div className="max-w-lg overflow-hidden rounded-lg shadow-lg text-gray-800 flex items-center px-4 gap-4 bg-white">
        <img src={logo} alt="Logo" className="w-32 h-32 scale-75" />
        <div className="py-5">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-800">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
