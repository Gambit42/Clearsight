import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "src/contexts/AuthContext";

const useAuth = () => {
  const { dispatch, token, isLoggedIn, isLoading } =
    useContext(AuthContext) || {};

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
    } catch (error) {
      dispatch({ type: "STOP_LOADING" });
    }
  };

  const handleGetUser = async () => {
    try {
      const res = await axios.get("http://localhost:4000/account/info", {
        headers: { Authorization: token as string },
        withCredentials: true,
      });
      dispatch({ type: "LOGIN", payload: res.data });
      localStorage.setItem("_user", JSON.stringify(res.data));
    } catch (error) {
      dispatch({ type: "STOP_LOADING" });
    }
  };

  useEffect(() => {
    const isSignedIn = localStorage.getItem("isSignedIn");
    if (isSignedIn === "true") {
      handleGetToken();
    } else {
      dispatch({ type: "STOP_LOADING" });
    }
  }, []);

  useEffect(() => {
    if (token) {
      handleGetUser();
    }
  }, [token]);

  return {
    isLoggedIn,
    isLoading,
  };
};

export default useAuth;
