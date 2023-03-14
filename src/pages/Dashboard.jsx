import React from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import AdminDashboard from "components/dashboard/AdminDashboard";
import UserDashboard from "components/dashboard/UserDashboard";

const Dashboard = () => {
  const user = useSelector((state) => get(state, "userStore.user"));

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px]">
        {get(user, "isAdmin", false) ? <AdminDashboard /> : <UserDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
