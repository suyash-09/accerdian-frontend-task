import React from "react";
import Logo from "../assets/accredianLogo.png";

const Navbar = () => {
  return (
    <header class="text-gray-900 body-font mx-20 rounded-b-xl bg-white shadow-lg">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="logo" className="h-10" />
        </a>
        <button class="inline-flex items-center bg-accredian-blue border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 text-white rounded-lg text-base ml-4 mt-4 md:mt-0">
          Courses
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-medium">
          {["Refer & Earn", "Resouce", "About Us"].map((item, index) => (
            <a class="mr-5" key={index}>
              {item}
            </a>
          ))}
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">
          Login
        </button>
        <button class="inline-flex items-center bg-accredian-blue border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 text-white rounded-lg text-base ml-4 mt-4 md:mt-0">
          Try for free
        </button>
      </div>
    </header>
  );
};

export default Navbar;
