import React, { useState, useContext } from "react";
import UserLayout from "src/layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Button from "src/components/Button";
import { AuthContext } from "src/contexts/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import styled from "styled-components";

type Props = {};
const SigninPage = (props: Props) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext) || {};

  const [form, setForm] = useState({ email: "", password: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    if (form.email === "" || form.password === "") {
      setTimeout(() => {
        setIsProcessing(false);
      }, 1000);
      return console.log("Please fill in all the necessary fields.");
    }

    //Allows cookie to be sent

    const config = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };

    const userLoginData = {
      email: form.email,
      password: form.password,
    };

    try {
      const data = await axios.post(
        "http://localhost:4000/account/login",
        userLoginData,
        config
      );

      if (data) {
        setIsProcessing(false);
        setForm({
          email: "",
          password: "",
        });
      }

      localStorage.setItem("isSignedIn", "true");
      dispatch({ type: "LOGIN" });

      navigate("/");
    } catch (error) {
      setTimeout(() => {
        setIsProcessing(false);
      }, 1000);
    }
  };

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    switch (inputName) {
      case "email":
        setForm({ ...form, email: inputValue });
        break;
      case "password":
        setForm({ ...form, password: inputValue });
        break;
    }
  };

  const displayButton = isProcessing ? (
    <StyledButton variant="loading" type="button">
      <ClipLoader size={25} />
      <p className="ml-2">Signing in</p>
    </StyledButton>
  ) : (
    <StyledButton variant="primary">Sign In</StyledButton>
  );

  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex w-screen max-w-sm flex-col justify-center px-4 font-montserrat my-10">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Login</h1>
            <p>Please signin to continue.</p>
          </div>
          <form className="flex flex-col w-full mt-10" onSubmit={handleSubmit}>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2">
              <AiOutlineMail className="mr-2" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full"
                onChange={handleFormInput}
                value={form.email}
              />
            </div>
            <div className="rounded flex flex-row border items-center px-4 py-2 mt-4 w-full">
              <AiOutlineLock className="mr-2" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full"
                onChange={handleFormInput}
                value={form.password}
              />
            </div>
            <div className="flex flex-col items-center">
              {displayButton}
              <Link
                to="/account/forgot-password"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <p className="inline-block text-center mt-2 text-blue-500 cursor-pointer">
                  Forgot Password
                </p>
              </Link>
            </div>
          </form>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="font-medium mb-2">Doesn't have an account?</h1>
            <Link
              to="/account/signup"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button variant="secondary">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SigninPage;

export const StyledButton = styled(Button).attrs({
  className: "mt-10 w-full",
})``;
