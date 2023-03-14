import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { updatePassword } from "stores/reducers/user";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const isUpdatePassword = useSelector((state) =>
    get(state, "userStore.isUpdatePassword")
  );
  const loading = useSelector((state) => get(state, "userStore.loading"));

  useEffect(() => {
    if (!!isUpdatePassword) {
      setFormData({
        password: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      toast.success("Successfully!");
      setTimeout(() => {
        window.location.href = "/profile";
      }, 1000);
    }
  }, [isUpdatePassword]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.newPassword !== formData.confirmNewPassword) {
      toast.error('Confirm Password do not match!')
      return false;
    }
    dispatch(updatePassword(formData));
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        <form
          className="max-w-3xl m-auto border border-[#0067D5] rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="bg-[#0067D5] text-white p-3">Change Password</div>
          <div className="p-5 text-sm">
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Password:</div>
              <div className="col-span-2">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">New Password:</div>
              <div className="col-span-2">
                <input
                  className="form-control"
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="text-bold border-b py-3 grid grid-cols-3">
              <div className="col-span-1">Confirm New Password:</div>
              <div className="col-span-2">
                <input
                  className="form-control"
                  type="password"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 my-5 gap-5 md:px-0 px-3">
            <div className="text-end">
              <button
                className="hover:bg-[#0067D5] bg-[#1e90ff] text-white p-2 md:w-2/4 w-full flex ml-auto place-content-center gap-1 place-items-center"
                type="submit"
                disabled={loading}
              >
                Save
              </button>
            </div>
            <div className="text-start">
              <Link
                className="hover:bg-[red] bg-[red] text-white p-2 md:w-2/4 w-full flex place-content-center gap-1 place-items-center"
                to="/profile"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
