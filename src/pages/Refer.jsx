import React from "react";
import Cards from "../components/Cards";
import UserLogo from "../assets/user.svg";
import CoinLogo from "../assets/coin.svg";
import DocsLogo from "../assets/docs.svg";

const Refer = () => {
  const data = [
    {
      title: "Refer",
      content: "Submit referrals easily via our website’s referral section.",
      img: UserLogo,
    },
    {
      title: "Reward",
      content: "Earn rewards once your referral joins an Accredian program.",
      img: DocsLogo,
    },
    {
      title: "Earn",
      content: "Both parties receive a bonus 30 days after program enrollment.",
      img: CoinLogo,
    },
  ];
  return (
    <section className="bg-accredian-bg px-5 py-2">
      <div className="flex flex-col gap-20">
        <h1 className="text-6xl text-center font-bold mt-10">
          How do I <span className="text-accredian-blue">Refer ?</span>
        </h1>
        <div className="flex justify-around">
          {data.map((item, index) => (
            <Cards key={index} title={item.title} content={item.content} logo={item.img} />
          ))}
        </div>
        <button className="bg-accredian-blue border-0 py-4 px-6 text-white rounded-full self-center text-xl font-semibold shadow-lg mb-5">
          Try for free
        </button>
      </div>
    </section>
  );
};

export default Refer;
