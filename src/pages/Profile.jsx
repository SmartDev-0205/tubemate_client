import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get } from "lodash";
import moment from "moment";
import {
  LockClosedIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import { currencyFormatter } from "helpers";

const Profile = () => {
  const user = useSelector((state) => get(state, "userStore.user"));

  return (
    <div className="w-full mb-[170px]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <div className="max-w-3xl m-auto border border-[#0067D5] rounded-md">
          <div className="bg-[#0067D5] text-white p-3">User Information</div>
          <div className="p-5 text-sm">
            <div className="font-bold border-b">
              {get(user, "firstName")} {get(user, "lastName")}
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Email:</div>
              <div>{get(user, "email")}</div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Birthday:</div>
              <div>{moment(get(user, "birthday")).format("DD/MM/YYYY")}</div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Gender:</div>
              <div className="capitalize">{get(user, "gender")}</div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Balance:</div>
              <div>{currencyFormatter(get(user, "balance"))}</div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">RID:</div>
              <div>#{get(user, "_id")}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 my-5 gap-5 md:px-0 px-3">
            <div className="text-end">
              <Link
                className="hover:bg-[#0067D5] bg-[#1e90ff] text-white p-2 md:w-2/4 w-full flex ml-auto place-content-center gap-1 place-items-center"
                to="/update-password"
              >
                <LockClosedIcon className="w-4" aria-hidden="true" />
                Change Password
              </Link>
            </div>
            <div className="text-start">
              <Link
                className="hover:bg-[#0067D5] bg-[#1e90ff] text-white p-2 md:w-2/4 w-full flex place-content-center gap-1 place-items-center"
                to="/withdraw"
              >
                <CurrencyDollarIcon className="w-4" aria-hidden="true" />
                Withdraw
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
