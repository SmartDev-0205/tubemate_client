import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PropTypes from "prop-types";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get } from "lodash";

import Layout from "components/layout";
import { Loading } from "common";
import routes from "routes";
import { store } from "stores";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "stores/reducers/user";
import ScrollToTop from "helpers/ScrollToTop";
import { ROLES } from "constants";
import "../src/gradient";

const PrivateRoute = ({ isPrivate, children, allows }) => {
  const isAuthenticated = localStorage.getItem("tubemate_token");
  const user = useSelector((state) => get(state, "userStore.user"));

  if (!isPrivate) {
    return children;
  }

  if (isPrivate && !!isAuthenticated && !!user) {
    if (!!allows) {
      const user_role = !!get(user, "isAdmin", false)
        ? ROLES.ADMIN
        : ROLES.USER;
      if (allows.includes(user_role)) {
        return children;
      }
    }
    return <Navigate to="/403" />;
  }

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/login" />;
  }
  // return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isPrivate: PropTypes.bool,
  children: PropTypes.node,
};

const Main = () => {
  const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem("tubemate_token");

  useEffect(() => {
    !!isAuthenticated && dispatch(getUser());
  }, [isAuthenticated, dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer style={{ top:'50%',left:'50%',    transform: 'translate(-50%, -50%)'}}/>
      <ScrollToTop />
    
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <PrivateRoute allows={route.allows} isPrivate={route.private}>
                <Layout isPrivate={route.private}>{route.element}</Layout>
              </PrivateRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
