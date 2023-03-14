import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  // WalletIcon,
  // EyeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import {
  getTransactions,
  updateTransactions,
  deleteTransactions,
} from "stores/reducers/transaction";

import { getAdminStats } from "stores/reducers/user";
import { TRANSACTIONS_STATUS } from "constants";
import { currencyFormatter } from "helpers";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => get(state, "userStore.user"));
  const stats = useSelector((state) => get(state, "userStore.stats"));
  const transactions = useSelector((state) =>
    get(state, "transactionStore.transactions")
  );
  const isUpdateTransactions = useSelector((state) =>
    get(state, "transactionStore.isUpdateTransactions")
  );
  const isDeleteTransactions = useSelector((state) =>
    get(state, "transactionStore.isDeleteTransactions")
  );

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getAdminStats());
  }, []);

  useEffect(() => {
    if (!!isUpdateTransactions) {
      dispatch(getTransactions());
      toast.success("Updated!");
    }
  }, [isUpdateTransactions, dispatch]);

  useEffect(() => {
    if (!!isDeleteTransactions) {
      dispatch(getTransactions());
      toast.success("Deleted!");
    }
  }, [isDeleteTransactions, dispatch]);

  const handleMakePaid = (id) => () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(
        updateTransactions({ id, data: { status: TRANSACTIONS_STATUS.PAID } })
      );
    }
  };

  const handleMakeCancel = (id) => () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(
        updateTransactions({ id, data: { status: TRANSACTIONS_STATUS.CANCEL } })
      );
    }
  };

  const handleDelete = (id) => () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(deleteTransactions(id));
    }
  };

  const handleCopy = (content) => () => {
    window.navigator.clipboard.writeText(content);
    toast.success("Copied!");
  };

  return (
    <div className="w-full">
      <h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
        AdminDashboard, {get(user, "firstName")} {get(user, "lastName")}
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
        <Link to="/users" className="bg-[#5A55A3] p-4 pb-5 relative">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-1">
              {get(stats, "users", 0)}
            </h3>
            <p className="text-sm"> Total Users </p>
          </div>
          <div className="w-16 h-16">
            <UserGroupIcon
              className="absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]"
              aria-hidden="true"
            />
          </div>
        </Link>
        <div className="bg-[#004a99] p-4 pb-5 relative">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-1">
              {get(stats, "transactions", 0)}
            </h3>
            <p className="text-sm"> Total Transactions </p>
          </div>
          <div className="w-16 h-16">
            <CurrencyDollarIcon
              className="absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* <div className="bg-[#00a65a] p-4 pb-5 relative">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-1">
              {get(stats, "withdraw", 0)}
            </h3>
            <p className="text-sm"> Total Withdraw </p>
          </div>
          <div className="w-16 h-16">
            <WalletIcon
              className="absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]"
              aria-hidden="true"
            />
          </div>
        </div> */}
        {/* <div className="bg-[#ffa500] p-4 pb-5 relative">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-1">
              {get(stats, "watch", 0)}
            </h3>
            <p className="text-sm"> Total Watch </p>
          </div>
          <div className="w-16 h-16">
            <EyeIcon
              className="absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]"
              aria-hidden="true"
            />
          </div>
        </div> */}
      </div>
      <h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
        User Transactions
      </h3>
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-fixed w-full text-sm">
          <thead>
            <tr>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                User
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                Referral Users
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                Amount
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                BTC Wallet
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Status
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Created At
              </th>
              <th
                width="250px"
                className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left"
              ></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-slate-300">
                  Empty
                </td>
              </tr>
            )}
            {transactions.map((transaction, key) => (
              <tr key={key}>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  <div className="font-bold">
                    {get(transaction, "user.firstName")}{" "}
                    {get(transaction, "user.lastName")}
                  </div>
                  <div className="text-xs">
                    ({get(transaction, "user.email")})
                  </div>
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 text-center">
                  {get(transaction, "user.shared", 0)}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  {currencyFormatter(get(transaction, "amount"))}
                </td>
                <td
                  className="border-b border-slate-100 p-4 text-slate-500 group relative cursor-pointer"
                  onClick={handleCopy(get(transaction, "btcWallet"))}
                >
                  <DocumentDuplicateIcon className="text-[#00a65a] w-5 absolute right-0 hidden group-hover:block" />
                  <div className="line-clamp-1 truncate">
                    {get(transaction, "btcWallet")}
                  </div>
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  <span
                    className={`capitalize ${
                      get(transaction, "status") === TRANSACTIONS_STATUS.PAID
                        ? "text-[#00a65a]"
                        : "text-[#ffa500]"
                    }`}
                  >
                    {get(transaction, "status")}
                  </span>
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  {moment(get(transaction, "createdAt")).format("DD/MM/YYYY")}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 px-0">
                  <div className="min-w-[300px]">
                    {get(transaction, "status") ===
                      TRANSACTIONS_STATUS.PENDING && (
                      <button
                        className="text-[#00a65a] p-2 bg-[#00a65a]/[0.2] hover:bg-[#00a65a]/[0.5] rounded my-1 mr-1"
                        onClick={handleMakePaid(transaction._id)}
                      >
                        Make Paid
                      </button>
                    )}
                    {get(transaction, "status") ===
                      TRANSACTIONS_STATUS.PENDING && (
                      <button
                        className="text-[#ffa500] p-2 bg-[#ffa500]/[0.2] hover:bg-[#ffa500]/[0.5] rounded my-1 mr-1"
                        onClick={handleMakeCancel(transaction._id)}
                      >
                        Cancel
                      </button>
                    )}
                    {[
                      TRANSACTIONS_STATUS.PAID,
                      TRANSACTIONS_STATUS.CANCEL,
                    ].includes(get(transaction, "status")) && (
                      <button
                        className="text-[#ff6600] p-2 bg-[#ff6600]/[0.2] hover:bg-[#ff6600]/[0.5] rounded my-1"
                        onClick={handleDelete(transaction._id)}
                      >
                        Delete User
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
