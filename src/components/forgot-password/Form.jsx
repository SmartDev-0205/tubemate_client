import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";

import { forgotPassword, resetForgotPassword } from "stores/reducers/auth";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => get(state, "authStore.loading"));
  const isForgotPassword = useSelector((state) => get(state, "authStore.isForgotPassword"));
  const error = useSelector((state) =>
    get(state, "authStore.errors.forgotPassword.message")
  );
  const [formData, setFormData] = useState({
    email: "",
  });

  useEffect(() => {
    if (!!isForgotPassword) {
      // window.location.href = "/dashboard";
      toast.success("Successfully! Please check email to reset password");
      setFormData({
        email: "",
      });
      dispatch(resetForgotPassword())
      navigate("/");
    }
  }, [isForgotPassword]);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(formData));
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
        <h3 className="text-[#283d50] font-medium text-2xl mb-10">Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="text-[#ff6600] mb-4 text-center border border-[#ff6600] p-1 rounded bg-[#ff6600]/[.06]">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 gap-7">
            <div className="">
              <label className="label w-full flex mb-1 font-medium text-base">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="pt-9">
            <button className="btn primary" type="submit" disabled={loading}>
              Send Email
            </button>
          </div>
          <p className="text-end pt-5">
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
