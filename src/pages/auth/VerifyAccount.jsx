import React from "react";

import { Link } from "react-router-dom"

const VerifyAccount = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px] min-h-[400px]">
      <div className="text-[#05d54a] mb-4 text-center border border-[#05d54a] p-1 rounded bg-[#05d54a]/[.06]">
        Successfully! Please <Link to="/login">login</Link> with your account
      </div>
    </div>
  );
};

export default VerifyAccount;
