import React from "react";
import styled, { css } from "styled-components";

type Props = {
  children: React.ReactNode;
  variant: string;
  remainingProps?: unknown;
};

type ButtonProps = {
  buttonVariant: string;
};

const Button = (props: Props) => {
  const { variant, children, ...remainingProps } = props;

  return (
    <StyledButton {...remainingProps} buttonVariant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px 30px;
  transition: 0.3s ease all;
  border: transparent 1px solid;
  border-radius: 4px;

  ${({ buttonVariant }) =>
    buttonVariant === "primary" &&
    css`
      color: #fff;
      background-color: #b91c1c;

      &:hover {
        border: #dc2626 1px solid;
        background-color: #dc2626;
      }
    `}

  ${({ buttonVariant }) =>
    buttonVariant === "secondary" &&
    css`
        border: #b91c1c 1px solid;
        background-color: #fff;
        color: #b91c1c;

      &:hover {
        color: #fff;
      background-color: #b91c1c;
    `}

  ${({ buttonVariant }) =>
    buttonVariant === "cart" &&
    css`
        border: #16a34a 1px solid;
        background-color: #16a34a;
        color: #fff;

      &:hover {
        border: #16a34a 1px solid;
        color: #16a34a;
        background-color: #fff;
    `}

    ${({ buttonVariant }) =>
    buttonVariant === "loading" &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: transparent 1px solid;
      background-color: #e5e7eb;
      color: #111827;
    `}





  ${({ buttonVariant }) => buttonVariant === "text" && css``}
`;
