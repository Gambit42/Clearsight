import React, { useState, useEffect, useContext } from "react";
import "./styles/tailwind.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "src/contexts/AuthContext";
import ContextProvider from "src/contexts/Provider";
import PublicRoutes from "src/routes/PublicRoutes";
import PrivateRoutes from "src/routes/PrivateRoutes";

function App() {
  const { dispatch, token, isLoggedIn } = useContext(AuthContext) || {};

  const handleGetToken = async () => {
    const config = {
      withCredentials: true,
    };
    try {
      const res = await axios.post(
        "http://localhost:4000/account/access",
        null,
        config
      );

      dispatch({ type: "GET_TOKEN", payload: res.data.token });
    } catch (error) {}
  };

  const handleGetUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/account/info", {
        headers: { Authorization: token as string },
        withCredentials: true,
      });
      dispatch({ type: "GET_USER", payload: res.data });
      localStorage.setItem("_user", JSON.stringify(res.data));
    } catch (error) {}
  };

  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");
    if (isSignedIn === "true") {
      handleGetToken();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (token) {
      handleGetUser();
    }
  }, [token]);

  return (
    <>
      <PublicRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
