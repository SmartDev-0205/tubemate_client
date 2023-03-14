import React, { useState, useEffect } from "react";
import { UserPlusIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { currencyFormatter } from "helpers";

const Referral = () => {
  const user = useSelector((state) => get(state, "userStore.user"));

  const [value, setValue] = useState();

  useEffect(() => {
    !!user && setValue(`${process.env.REACT_APP_URL}/register?r=${user._id}`);
  }, [user]);

  const handleCopy = () => {
    console.log("value: ", value);
    toast.success("Copied!");
    // if (value) {
    //   setTimeout(() => {
    //     window.navigator.clipboard.writeText(value);
    //     toast.success("Copied!");
    //   }, 500);
    // }
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <div className="max-w-3xl m-auto border border-[#0067D5] rounded-md">
          <div className="bg-[#0067D5] text-white p-3">Referral</div>
          <div className="p-5">
            <div className=" md:px-16 px-0 py-5">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                <div className="bg-[#f39c12] p-4 pb-5 relative">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-1">
                      {get(user, "shared", 0)}
                    </h3>
                    <p className="text-sm text-center">Sign ups</p>
                  </div>
                  <div className="h-8">
                    <UserPlusIcon
                      className="absolute right-2 top-1/3 w-16 h-16 ml-auto text-[#000]/[.15]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="bg-[#00a65a] p-4 pb-5 relative">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-1">
                      {currencyFormatter(get(user, "invite_balance", 0))}
                    </h3>
                    <p className="text-sm text-center">REFERRAL BALANCE</p>
                  </div>
                  <div className="h-8">
                    <CurrencyDollarIcon
                      className="absolute right-2 top-1/3 w-16 h-16 ml-auto text-[#000]/[.15]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              Earn <span className="text-[#088308] font-bold">$5</span> for
              every friend that signs up
            </div>
            <div className="text-center font-bold py-3">
              You Can Earn By Referring Others to Register
            </div>
            <div>
              <input
                className="form-control"
                type="text"
                value={value}
                required
              />
            </div>
            <div className="mt-5">
              <CopyToClipboard text={value} onCopy={handleCopy}>
                <button
                  // onClick={handleCopy}
                  className="hover:bg-[#0067D5] bg-[#1e90ff] text-white p-2 flex m-auto place-content-center gap-1 place-items-center"
                >
                  Copy This
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
