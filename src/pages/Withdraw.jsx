import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";

import {
  transactionWithdraw,
  getMyTransactions,
} from "stores/reducers/transaction";
import { TRANSACTIONS_STATUS } from "constants";
import { currencyFormatter } from "helpers";

const MIN_AMOUNT = 1;

const Withdraw = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    amount: "",
    btcWallet: "",
  });

  const user = useSelector((state) => get(state, "userStore.user"));

  const isTransactionWithdraw = useSelector((state) =>
    get(state, "transactionStore.isTransactionWithdraw")
  );
  const loading = useSelector((state) =>
    get(state, "transactionStore.loading")
  );
  const myTransactions = useSelector((state) =>
    get(state, "transactionStore.myTransactions")
  );

  useEffect(() => {
    dispatch(getMyTransactions());
  }, []);

  useEffect(() => {
    if (!!isTransactionWithdraw) {
      setFormData({
        password: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      toast.success("Successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [isTransactionWithdraw]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const user_balance = get(user, 'balance', 0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.amount < MIN_AMOUNT || !formData.amount) {
      toast.error(
        `Payment option not available because : The amount required for this payout is ${MIN_AMOUNT}$ which has not been reached.`
      );
      return false;
    }
    if(formData.amount<5){
      toast.error(`Minimum Payout $5`)
      return false
    }
    if(formData.amount > user_balance) {
      toast.error(`You do not have enough money!`)
      return false;
    }
    dispatch(transactionWithdraw(formData));
  };

  return (
    <div className="w-full mb-[190px]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <form
          className="max-w-3xl m-auto border border-[#0067D5] rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="bg-[#0067D5] text-white p-3">Withdraw</div>
          <div className="p-5 text-sm">
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Balance:</div>
              <div className="col-span-2">
                <span className="font-bold">{currencyFormatter(user_balance)}</span>
              </div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Withdraw Balance:</div>
              <div className="col-span-2">
                <input
                  className="form-control disabled:cursor-not-allowed disabled:bg-gray-200"
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  min={MIN_AMOUNT}
                  max={user_balance}
                  disabled={loading || user_balance === 0}
                  required
                />
              </div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">BTC Wallet:</div>
              <div className="col-span-2">
                <input
                  className="form-control disabled:cursor-not-allowed disabled:bg-gray-200"
                  type="text"
                  name="btcWallet"
                  value={formData.btcWallet}
                  onChange={handleChange}
                  disabled={loading || user_balance === 0}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 my-5 gap-5 md:px-0 px-3">
            <div className="text-end">
              <button
                className="hover:bg-[#0067D5] bg-[#1e90ff] text-white p-2 md:w-2/4 w-full disabled:opacity-50 disabled:cursor-not-allowed flex ml-auto place-content-center gap-1 place-items-center"
                type="submit"
                disabled={loading || user_balance === 0}
              >
                Withdraw
              </button>
            </div>
            <div className="text-start">
              <Link
                className="hover:bg-[red] bg-[red] text-white p-2 md:w-2/4 w-full flex place-content-center gap-1 place-items-center"
                to="/dashboard"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>

        <h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
          Transactions History
        </h3>
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-fixed w-full text-sm">
            <thead>
              <tr>
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
              </tr>
            </thead>
            <tbody className="bg-white">
              {myTransactions.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-slate-300">
                    Empty
                  </td>
                </tr>
              )}
              {myTransactions.map((transaction, key) => (
                <tr key={key}>
                  <td className="border-b border-slate-100 p-4 text-slate-500">
                    {currencyFormatter(get(transaction, "amount"))}
                  </td>
                  <td className="border-b border-slate-100 p-4 text-slate-500 truncate">
                    {get(transaction, "btcWallet")}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
