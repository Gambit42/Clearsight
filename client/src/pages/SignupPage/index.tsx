import React, { useState } from "react";
import UserLayout from "src/layouts/UserLayout";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import Button from "src/components/Button";
import styled from "styled-components";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    if (form.password !== form.confirmPassword) {
      return setTimeout(() => {
        setIsProcessing(false);
        toast.error("Passwords does not match.");
      }, 1000);
    }

    //Allows cookie to be sent

    const config = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };

    const userRegisterData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    };

    try {
      const data = await axios.post(
        "http://localhost:4000/account/register",
        userRegisterData,
        config
      );

      if (data.data.success === true) {
        setIsProcessing(false);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        toast.success("Successfully registered !");
      }
    } catch (error) {
      setTimeout(() => {
        setIsProcessing(false);
        toast.error(error.response.data.message);
      }, 1000);
    }
  };

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    switch (inputName) {
      case "firstName":
        setForm({ ...form, firstName: inputValue });
        break;
      case "lastName":
        setForm({ ...form, lastName: inputValue });
        break;
      case "email":
        setForm({ ...form, email: inputValue });
        break;
      case "password":
        setForm({ ...form, password: inputValue });
        break;
      case "confirmPassword":
        setForm({ ...form, confirmPassword: inputValue });
        break;
    }
  };

  const displayButton = isProcessing ? (
    <StyledButton variant="loading" type="button">
      <ClipLoader size={25} />
      <p className="ml-2">Creating an account</p>
    </StyledButton>
  ) : (
    <StyledButton variant="primary">Create an account</StyledButton>
  );

  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex w-screen max-w-sm flex-col justify-center px-4 font-montserrat my-16">
          <div className="pt-10">
            <h1 className="mb-2 text-3xl font-bold">Signup</h1>
            <p>Please signup to continue.</p>
          </div>
          <form className="flex flex-col w-full mt-10" onSubmit={handleSubmit}>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2">
              <AiOutlineUser className="mr-2" />
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="bg-transparent outline-none w-full"
                value={form.firstName}
                onChange={handleFormInput}
              />
            </div>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2 mt-4">
              <AiOutlineUser className="mr-2" />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="bg-transparent outline-none w-full"
                value={form.lastName}
                onChange={handleFormInput}
              />
            </div>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2 mt-4">
              <AiOutlineMail className="mr-2" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full"
                value={form.email}
                onChange={handleFormInput}
              />
            </div>
            <div className="rounded flex flex-row border items-center px-4 py-2 mt-4 w-full">
              <AiOutlineLock className="mr-2" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full"
                value={form.password}
                onChange={handleFormInput}
              />
            </div>
            <div className="rounded flex flex-row border items-center px-4 py-2 mt-4 w-full">
              <AiOutlineLock className="mr-2" />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="bg-transparent outline-none w-full"
                value={form.confirmPassword}
                onChange={handleFormInput}
              />
            </div>
            {displayButton}
          </form>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="font-medium mb-2">Already have an account?</h1>
            <Link
              to="/account/signin"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button variant="secondary">Login here</Button>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SignupPage;

export const StyledButton = styled(Button).attrs({
  className: "mt-10 w-full",
})``;
