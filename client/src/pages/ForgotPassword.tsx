import React, { useState } from "react";
import UserLayout from "src/layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "src/components/Button";
import styled from "styled-components";

const ForgotPassword = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

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
            <div className="rounded flex flex-row border w-full items-center px-4 py-2">
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
          </form>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="font-medium mb-2">Remember your account?</h1>
            <Link
              to="/account/signup"
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
