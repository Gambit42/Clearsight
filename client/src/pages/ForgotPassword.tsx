import React, { useState } from "react";
import UserLayout from "src/layouts/UserLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "src/components/Button";
import styled from "styled-components";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    const config = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const data = await axios.post(
        "http://localhost:4000/account/forgot-password",
        { email: email },
        config
      );

      if (data) {
        setIsProcessing(false);
        toast.success(data.data.message, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          autoClose: 4000,
          toastId: "succcess",
        });
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsProcessing(false);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          autoClose: 4000,
          toastId: "error",
        });
      }, 1000);
    }
  };

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setEmail(inputValue);
  };

  const displayButton = isProcessing ? (
    <StyledButton variant="loading" type="button">
      <ClipLoader size={25} />
      <p className="ml-2">Sending Email</p>
    </StyledButton>
  ) : (
    <StyledButton variant="primary">Send Email</StyledButton>
  );
  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex w-screen max-w-sm flex-col justify-center px-4 font-montserrat my-10">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Forgot password</h1>
            <p>Please type your email to continue.</p>
          </div>
          <form className="flex flex-col w-full mt-10" onSubmit={handleSubmit}>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2 mt-4">
              <AiOutlineMail className="mr-2" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full"
                onChange={handleFormInput}
                value={email}
              />
            </div>
            {displayButton}
            <p className="text-xs p-2">*Please make sure to check your spam.</p>
          </form>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="font-medium mb-2">Remember your account?</h1>
            <Link
              to="/account/signin"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button variant="secondary">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ForgotPassword;

export const StyledButton = styled(Button).attrs({
  className: "mt-10 w-full",
})``;
