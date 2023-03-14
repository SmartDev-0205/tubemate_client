import React, { useState, useEffect } from "react";

import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";

import { resetPassword, resetResetPassword } from "stores/reducers/auth";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const loading = useSelector((state) => get(state, "authStore.loading"));
  const isResetPassword = useSelector((state) =>
    get(state, "authStore.isResetPassword")
  );
  const error = useSelector((state) =>
    get(state, "authStore.errors.resetPassword.message")
  );
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      toast.error("Missing token!");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (!!isResetPassword) {
      toast.success("Successfully! Please login with you password");
      setFormData({
        password: "",
        confirmPassword: "",
      });
      dispatch(resetResetPassword());
      navigate("/login");
    }
  }, [isResetPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Confirm Password do not match!");
      return false;
    }
    dispatch(
      resetPassword({
        token,
        ...formData,
      })
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl m-auto">
      <div
        className="bg-[#fff] rounded-[10px] md:px-[57px] md:py-[65px] px-[30px] py-[40px] border border-[#00000020]"
        style={{ boxShadow: "0px 8px 20px 0px rgb(0 0 0 / 15%)" }}
      >
        <h3 className="text-[#283d50] font-medium text-2xl mb-10">
          Reset Password
        </h3>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="text-[#ff6600] mb-4 text-center border border-[#ff6600] p-1 rounded bg-[#ff6600]/[.06]">
              {error}
            </div>
          )}
          <div className="grid grid-cols-2 gap-7">
            <div className="">
              <label className="label w-full flex mb-1 font-medium text-base">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label className="label w-full flex mb-1 font-medium text-base">
                Confirm Password
              </label>
              <input
                className="form-input"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="pt-9">
            <button className="btn primary" type="submit" disabled={loading}>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
