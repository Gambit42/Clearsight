import React from "react";
import styled from "styled-components";

type CartItems = {
  title: string;
  author: string;
  image: string;
  price: number;
  quantity: number;
};

type Props = {
  cart: CartItems[];
};

const CartItems = (props: Props) => {
  const { cart } = props;
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="h-14 text-left ">
          <th className="font-medium">Item</th>
          <th className="font-medium md:text-center">Price</th>
          <th className="font-medium hidden md:table-cell md:text-center">
            Quantity
          </th>
          <th className="font-medium hidden md:table-cell md:text-center">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr className="h-24 border-y-2 border-gray-200" key={item.title}>
            <td className="pr-4">
              <div className="flex flex-row">
                <img
                  className="max-h-[70px] min-w-[60px]"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SY475_.jpg"
                  alt="malaz"
                />
                <div className="flex flex-col items-start ml-2 text-sm">
                  <h1 className="text-sm">{item.title}</h1>
                  <h1 className="text-sm">{item.author}</h1>
                  <button className="underline text-left pt-1 cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>
            </td>
            <td className="md:text-center">
              <h1 className="pb-2">₱{item.price}</h1>
              <div className="text-xs flex flex-row items-center md:hidden">
                <h1 className="mr-2">Qty</h1>
                <InputNumberContainer>
                  <input
                    className="text-sm text-center bg-gray-50 px-2 py-1 outline-none border shadow max-w-[40px]"
                    value={item.quantity}
                    type="number"
                  />
                </InputNumberContainer>
              </div>
            </td>
            <td className="hidden md:table-cell md:text-center">
              <InputNumberContainer>
                <input
                  className="text-sm text-center bg-gray-50 p-2 outline-none border shadow max-w-[40px]"
                  value={item.quantity}
                  type="number"
                />
              </InputNumberContainer>
            </td>
            <td className="hidden md:table-cell md:text-center">
              <h1 className="pb-2">₱{item.price}</h1>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartItems;

export const InputNumberContainer = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
