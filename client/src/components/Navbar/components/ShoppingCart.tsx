import React from "react";
import styled from "styled-components";
import { BsBag } from "react-icons/bs";

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

export const Cart = styled(BsBag).attrs({
  className: "cursor-pointer h-5 w-5 sm:h-6 sm:w-6 z-10 text-gray-900",
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
  left: 11px;
  top: -4px;
  pointer-events: none;
`;
