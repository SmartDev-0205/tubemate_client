import React from "react";

import GetStarted from "components/home/GetStarted";

const AboutUs = () => {
  return (
    <div className="w-full mb-[70px]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <h3 className="text-[#283d50] text-center font-semibold text-4xl mb-5 pt-10 pb-5 border-b border-b-[#0000001a]">
          About Us
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center pt-16">
          <div className="">
            <img
              alt=""
              src="https://wintub.b-cdn.net/assets/img/k5-Zv-Sa-Tieq.jpg"
            />
          </div>
          <div className="">
            <h4 className="font-bold mb-5 text-xl">
              Who we are and what we do?
            </h4>
            <p className="font-semibold mb-7 text-base">
              Wintub is The most popular spot online to earn cash for watching
              videos for the everyday thing you already do online. Earn Money
              when watch entertaining videos, finally you can get cash from
              Paypal, WebMoney, Bitcoin and more options.. Wintub has already
              paid out members. Put cash in your wallet. Join for free today.
            </p>
          </div>
        </div>
      </div>
      <GetStarted />
    </div>
  );
};

export default AboutUs;
