import React from "react";

const OurPartners = () => {
  return (
    <div
      className="w-full bg-[#ecf5ff] py-[64px]"
      style={{ boxShadow: "inset 0px 0px 12px 0px rgb(0 0 0 / 10%)" }}
    >
      <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-[#283d50] font-medium text-4xl mb-5">
          Our Partners
        </h3>
        <p className="text-[#556877] text-sm mb-16">
          We partner with over 1,500 brands to offer you videos every time.
        </p>

        <div className="grid md:grid-cols-4 grid-cols-1">
          <div className="p-[64px] bg-white border border-[#d6eaff] border-r-0">
            <img
              alt=""
              className="hover:scale-125 transition-all duration-1000 ease-in-out"
              src="https://wintub.b-cdn.net/assets/img/clients/client-1.png"
            />
          </div>
          <div className="p-[64px] bg-white border border-[#d6eaff] border-r-0">
            <img
              alt=""
              className="hover:scale-125 transition-all duration-1000 ease-in-out"
              src="https://wintub.b-cdn.net/assets/img/clients/client-2.png"
            />
          </div>
          <div className="p-[64px] bg-white border border-[#d6eaff] border-r-0">
            <img
              alt=""
              className="hover:scale-125 transition-all duration-1000 ease-in-out"
              src="https://wintub.b-cdn.net/assets/img/clients/client-3.png"
            />
          </div>
          <div className="p-[64px] bg-white border border-[#d6eaff] border-r-0">
            <img
              alt=""
              className="hover:scale-125 transition-all duration-1000 ease-in-out"
              src="https://wintub.b-cdn.net/assets/img/clients/client-4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
