import React from "react";
import styled, { css } from "styled-components";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

type BurgerProps = {
  isBurgerOpen: boolean;
};

const BurgerIcon = (props: Props) => {
  const { isOpen, onClick } = props;

  return (
    <StyledBurgerContainer isBurgerOpen={isOpen} onClick={onClick}>
      <StyledSpan></StyledSpan>
      <StyledSpan></StyledSpan>
      <StyledSpan></StyledSpan>
    </StyledBurgerContainer>
  );
};

export default BurgerIcon;

export const StyledBurgerContainer = styled.div.attrs({
  className: "lg:hidden",
})<BurgerProps>`
  cursor: pointer;

  & :nth-child(1) {
    ${(props) =>
      props.isBurgerOpen &&
      css`
        transform: rotate(-45deg) translate(-5px, 3px);
      `}
  }
  & :nth-child(2) {
    top: 6px;
    ${(props) =>
      props.isBurgerOpen &&
      css`
        opacity: 0;
      `}
  }
  & :nth-child(3) {
    top: 12px;
    ${(props) =>
      props.isBurgerOpen &&
      css`
        transform: rotate(45deg) translate(-5px, -4px);
      `}
  }
`;

export const StyledSpan = styled.span`
  margin: 4px;
  border-radius: 10px;
  display: block;
  height: 2px;
  width: 20px;
  background: #111827;
  transition: ease all 0.3s;
`;
