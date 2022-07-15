import React, { useState } from "react";
import Button from "src/components/Button";
import BookCarousel from "src/components/BookCarousel";
import CartItems from "./components/CartItems";
import UserLayout from "src/layouts/UserLayout";
import styled from "styled-components";

const CartPage = () => {
  const [cart, setCart] = useState(true);
  const array = [
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      isOnSale: false,
      previousPrice: 400,
      price: 499.25,
      quantity: 1,
    },
    {
      title: "Wisdom of Crowds",
      author: "Joe Abercrombie",
      isOnSale: true,
      previousPrice: 700,
      price: 650.25,
      quantity: 1,
    },
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      isOnSale: true,
      previousPrice: 100400,
      price: 699.5,
      quantity: 1,
    },
  ];
  const cartIsEmpty = cart && (
    <div className="flex flex-col items-center justify-center py-10 border-y-2 border-gray-200">
      <h1 className="pb-4">Your cart is currently empty.</h1>
      <Button type="primary">
        <h1>Continue shopping</h1>
      </Button>
    </div>
  );

  const cartItems = !cart && (
    <div>
      <CartItems />
      <div className="flex flex-col sm:flex-row sm:justify-between py-5">
        <span></span>
        <div className="sm:min-w-[400px] flex-col items-end justify-end">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-lg font-medium">Subtotal</h1>
            <p className="text-lg font-semibold">₱2000.00</p>
          </div>
          <p className="pb-5 pt-1 text-sm pr-4 sm:w-10/12">
            *Total is calculated upon checkout.
          </p>
          <StyledButton type="primary">Proceed to checkout</StyledButton>
        </div>
      </div>
    </div>
  );

  return (
    <UserLayout>
      <StyledDiv>
        <h1 className="pt-10 text-2xl font-semibold">YOUR CART</h1>
        <div className="mt-5 mb-10">
          {cartIsEmpty}
          {cartItems}
        </div>
      </StyledDiv>
      {/* <StyledBookCarousel title="Recommended" /> */}
      <button onClick={() => setCart(!cart)}>Set Cart Items</button>
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
