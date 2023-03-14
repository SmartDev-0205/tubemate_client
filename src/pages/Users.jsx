import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import moment from "moment";
import { toast } from "react-toastify";

import { getUsers, deleteUsers } from "stores/reducers/user";
import { currencyFormatter } from "helpers";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => get(state, "userStore.users"));
  const isDeleteUser = useSelector((state) =>
    get(state, "userStore.isDeleteUser")
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (!!isDeleteUser) {
      dispatch(getUsers());
      toast.success("Deleted!");
    }
  }, [isDeleteUser, dispatch]);

  const handleDelete = (id) => () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(deleteUsers(id));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
      <h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
        Users
      </h3>
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-fixed w-full text-sm">
          <thead>
            <tr>
              <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
                User
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                Verify
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
                Totals Amount
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Total Referral Users
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Total Views
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
                Created At
              </th>
              <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-slate-300">
                  Empty
                </td>
              </tr>
            )}
            {users.map((user, key) => (
              <tr key={key}>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  <div className="font-bold">
                    {get(user, "firstName")} {get(user, "lastName")}
                  </div>
                  <div className="text-xs">
                    {get(user, "email")}
                  </div>
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  {get(user, "verify") ? 'Yes' : 'No'}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 text-center">
                  {currencyFormatter(get(user, "balance"))}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 text-center">
                  {get(user, "shared")}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500 text-center">
                  {get(user, "views")}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  {moment(get(user, "createdAt")).format("DD/MM/YYYY")}
                </td>
                <td className="border-b border-slate-100 p-4 text-slate-500">
                  <div className="min-w-[300px]">
                    <button
                      className="text-[#ff6600] p-2 bg-[#ff6600]/[0.2] hover:bg-[#ff6600]/[0.5] rounded my-1"
                      onClick={handleDelete(user._id)}
                    >
                      Delete
                    </button>
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

export default Users;
