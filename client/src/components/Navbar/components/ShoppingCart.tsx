import React from "react";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";

type Props = {
  cartCount: number | null;
};

type CartProps = {
  isEmpty: boolean;
};

const ShoppingCart = (props: Props) => {
  const { cartCount } = props;
  return (
    <StyledAnchorTag>
      <Cart />
      <CartCount isEmpty={cartCount === 0 || cartCount === null ? true : false}>
        <StyledSpan>{cartCount}</StyledSpan>
      </CartCount>
    </StyledAnchorTag>
  );
};

export default ShoppingCart;

export const StyledAnchorTag = styled.a`
  position: relative;
  margin: 0 10px;
`;

export const StyledSpan = styled.span.attrs({
  className: "text-white text-center",
})`
  font-size: 12px;
`;

export const Cart = styled(IoCartOutline).attrs({
  className: "cursor-pointer h-6 w-6 sm:h-7 sm:w-7 z-10 text-gray-900",
})``;

export const CartCount = styled.div<CartProps>`
  display: ${({ isEmpty }) => (isEmpty ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  z-index: 20;
  min-width: 19px;
  height: 19px;
  padding: 2px 3px;
  left: 15px;
  top: -4px;
  pointer-events: none;
`;
