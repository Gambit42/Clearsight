import React from "react";
import styled, { css } from "styled-components";

type Props = {
  children: React.ReactNode;
  type: string;
  remainingProps?: unknown;
};

type ButtonProps = {
  buttonType: string;
};

const Button = (props: Props) => {
  const { type, children, ...remainingProps } = props;

  return (
    <StyledButton {...remainingProps} buttonType={type}>
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

  ${({ buttonType }) =>
    buttonType === "primary" &&
    css`
      color: #fff;
      background-color: #b91c1c;

      &:hover {
        border: #dc2626 1px solid;
        background-color: #dc2626;
      }
    `}

  ${({ buttonType }) =>
    buttonType === "secondary" &&
    css`
        border: #b91c1c 1px solid;
        background-color: #fff;
        color: #b91c1c;

      &:hover {
        border: #dc2626 1px solid;
        color: #dc2626;
    `}

  ${({ buttonType }) =>
    buttonType === "cart" &&
    css`
        border: #16a34a 1px solid;
        background-color: #16a34a;
        color: #fff;

      &:hover {
        border: #16a34a 1px solid;
        color: #16a34a;
        background-color: #fff;
    `}



  ${({ buttonType }) => buttonType === "text" && css``}
`;
