import React, { useContext } from "react";
import Button from "src/components/Button";
import BookCarousel from "src/components/BookCarousel";
import CartItems from "./components/CartItems";
import UserLayout from "src/layouts/UserLayout";
import styled from "styled-components";
import CartContext from "src/contexts/CartContext";
import { AuthContext } from "src/contexts/AuthContext";

const CartPage = () => {
  const { user } = useContext(AuthContext) || {};
  const { cartData: cart } = useContext(CartContext) || {};

  // const cartIsEmpty = cart?.length <= 0 && (
  //   <div className="flex flex-col items-center justify-center py-10 border-y-2 border-gray-200">
  //     <h1 className="pb-4">Your cart is currently empty.</h1>
  //     <Button variant="primary">
  //       <h1>Continue shopping</h1>
  //     </Button>
  //   </div>
  // );

  const cartItems =
    cart && cart.items?.length >= 0 ? (
      <>
        <CartItems cart={cart.items} />
        <div className="flex flex-col sm:flex-row sm:justify-between py-5">
          <span></span>
          <div className="sm:min-w-[400px] flex-col items-end justify-end">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-lg font-medium">Subtotal</h1>
              <p className="text-lg font-semibold">{`₱ ${cart.totalCost}`}</p>
            </div>
            <p className="pb-5 pt-1 text-sm pr-4 sm:w-10/12">
              *Total is calculated upon checkout.
            </p>
            <StyledButton variant="primary">Proceed to checkout</StyledButton>
          </div>
        </div>
      </>
    ) : (
      <div className="flex flex-col items-center justify-center py-10 border-y-2 border-gray-200">
        <h1 className="pb-4">Your cart is currently empty.</h1>
        <Button variant="primary">
          <h1>Continue shopping</h1>
        </Button>
      </div>
    );

  return (
    <UserLayout>
      <StyledDiv>
        <h1
          className="pt-10 text-2xl font-semibold"
          onClick={() => {
            console.log(cart);
          }}
        >
          YOUR CART
        </h1>
        <div className="mt-5 mb-10">{cartItems}</div>
      </StyledDiv>
    </UserLayout>
  );
};

export default CartPage;

export const StyledButton = styled(Button).attrs({ className: "w-full" })``;

export const StyledDiv = styled.div.attrs({
  className:
    "px-4 mt-16 w-screen max-w-6xl mx-auto flex flex-col justify-start font-montserrat min-h-[70vh]",
})``;

export const StyledBookCarousel = styled(BookCarousel)`
  .section-title {
    font-weight: 600;
  }
`;
