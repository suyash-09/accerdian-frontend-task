import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/Hero.png";
import Money from "../components/Money";
import Form from "../components/Form";
const Hero = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <div className="space-y-16 py-20">
        <div className="bg-accredian-bg max-w-fit px-16 py-5 rounded-full mx-auto shadow-lg outline-black">
          <ul className="flex items-center gap-16 text-2xl">
            {["Refer", "Benifits", "FAQ's", "Support"].map((word, index) => (
              <li key={index}>
                <a
                  className="text-gray-900 transition hover:text-accredian-blue tracking-widest font-medium"
                  href="#"
                >
                  {word}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-accredian-bg rounded-3xl mx-56 px-10 pt-5 flex shadow-lg shadow-black/40">
          <div className="relative flex flex-col gap-16 justify-center items-start">
            <h1 className="text-7xl font-bold">Let's Learn & Earn</h1>
            <h2 className="text-5xl">
              Get a chance to win up-to{" "}
              <span className="text-accredian-blue text-6xl font-bold">
                Rs. 15,000
              </span>
            </h2>
            <Form text="Refer Now"/>
          </div>
          <img src={Logo} alt="Hero" className="z-[2] w-[814px]" />
          <Money />
        </div>
      </div>
    </>
  );
};

export default Hero;
