import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
      <h3 className="text-[#283d50] text-center font-semibold text-4xl mb-5 pt-10 pb-5 border-b border-b-[#0000001a]">Contact Us</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center pt-16">
        <div className="">
          <img
            alt=""
            src="https://wintub.b-cdn.net/assets/img/k5-Zv-Sa-Tieq.jpg"
          />
        </div>
        <div className="">
          <h3 className="text-[#007BFF] font-bold mb-5 text-xl">Customer Support</h3>
          <h4 className="font-bold mb-5 text-xl">What can we help you with?</h4>
          <p className="font-semibold mb-7 text-base">
            Wintub is here to provide you with more information, and create an
            effective solution for your needs.
          </p>
          <h5 className="text-lg">
            Email us at &nbsp;
            <a href="mailto:support@wintub.com" target="_blank" rel="noreferrer">
              support@wintub.com
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
