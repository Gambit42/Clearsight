import React, { useState } from "react";
import UserLayout from "src/layouts/UserLayout";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "src/components/Button";
import styled from "styled-components";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    const config = {
      method: "POST",
      headers: { Authorization: token as string },
    };

    try {
      const data = await axios.post(
        "http://localhost:4000/account/reset-password",
        { password: password },
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
        navigate("/account/signin");
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
    const inputName = event.target.name;

    if (inputName === "password") {
      setPassword(inputValue);
    } else if (inputName === "confirmPassword") {
      setConfirmPassword(inputValue);
    }
  };

  const displayButton = isProcessing ? (
    <StyledButton variant="loading" type="button">
      <ClipLoader size={25} />
      <p className="ml-2">Resetting password</p>
    </StyledButton>
  ) : (
    <StyledButton variant="primary">Reset Password</StyledButton>
  );
  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex w-screen max-w-sm flex-col justify-center px-4 font-montserrat my-10">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Reset Password</h1>
            <p>Please type your new password to continue.</p>
          </div>
          <form className="flex flex-col w-full mt-10" onSubmit={handleSubmit}>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2">
              <AiOutlineLock className="mr-2" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full"
                onChange={handleFormInput}
                value={password}
              />
            </div>
            <div className="rounded flex flex-row border w-full items-center px-4 py-2 mt-4">
              <AiOutlineLock className="mr-2" />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="bg-transparent outline-none w-full"
                onChange={handleFormInput}
                value={confirmPassword}
              />
            </div>
            {displayButton}
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default ResetPassword;

export const StyledButton = styled(Button).attrs({
  className: "mt-10 w-full",
})``;
