import React from "react";
import UserLayout from "src/layouts/UserLayout";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Button from "src/components/Button";
import styled from "styled-components";

const SigninPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex w-screen max-w-sm flex-col justify-center px-4 font-montserrat">
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
              />
            </div>
            <div className="rounded flex flex-row border items-center px-4 py-2 mt-4 w-full">
              <AiOutlineLock className="mr-2" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <StyledButton variant="primary">Sign In</StyledButton>
              <p className="inline-block text-center mt-2 text-blue-500 cursor-pointer">
                Forgot Password
              </p>
            </div>
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
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default SigninPage;

export const StyledButton = styled(Button).attrs({
  className: "mt-10 w-full",
})``;
