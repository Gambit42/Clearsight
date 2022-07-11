import React from "react";
import styled from "styled-components";
import Button from "src/components/Button";
import { IoCartOutline } from "react-icons/io5";

const NewArrivals = () => {
  const array = [
    {
      title: "Gardens of the Moon",
      author: "Steven Erikson",
      isOnSale: true,
      previousPrice: 400,
      price: 200,
    },
    {
      title: "Promise of Blood",
      author: "Brian Mclellan",
      isOnSale: false,
      previousPrice: 400,
      price: 192.1,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      isOnSale: false,
      previousPrice: 400,
      price: 499.25,
    },
    {
      title: "Storm of Swords",
      author: "George R.R. Martin",
      isOnSale: true,
      previousPrice: 900,
      price: 700.25,
    },
    {
      title: "Wisdom of Crowds",
      author: "Joe Abercrombie",
      isOnSale: true,
      previousPrice: 700,
      price: 650.25,
    },
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      isOnSale: true,
      previousPrice: 100400,
      price: 699.5,
    },
  ];
  return (
    <div className="mx-auto max-w-6xl w-screen px-4 sm:w-11/12 font-montserrat pb-20 pt-10">
      <div className="flex flex-row justify-between items-center pt-10 pb-5 ">
        <h1 className="text-lg font-bold sm:text-2xl">New Arrivals</h1>
        <StyledButton type="primary" text="See more" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-content-center lg:grid-cols-6">
        {array.map((array) => (
          <div className="flex flex-col justify-between shadow w-full">
            <div className="cursor-pointer flex flex-col p-2 group">
              <img
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SY475_.jpg"
                alt="malaz"
                className="rounded mx-auto max-h-[300px] w-10/12 cursor-pointer scale-100 group-hover:scale-105 ease-in duration-100"
              />
              <div className="px-2 py-2 text-center max-h-[300px] min-h-[80px] group-hover:text-red-900 group-hover:underline">
                <TitleText className="text-sm mx-auto">{array.title}</TitleText>
                <h1 className="text-sm text-gray-700 pt-2 group-hover:text-red-900">
                  {array.author}
                </h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-center px-2 overflow-hidden flex-wrap">
              <h1 className="text-base font-medium text-gray-900 pt-2 text-center">
                ₱ {array.price.toFixed(2)}
              </h1>
              {array.isOnSale ? (
                <h1 className="pl-2 text-xs text-gray-700 pt-2 text-center line-through inline-block truncate">
                  ₱ {array.previousPrice.toFixed(2)}
                </h1>
              ) : (
                ""
              )}
            </div>
            <div className="p-4">
              <button className=" rounded  w-full border shadow-sm border-gray-200 py-2 text-sm hover:bg-red-700 hover:text-white ease-in duration-100 flex flex-row items-center justify-center">
                <IoCartOutline className="w-5 h-5 mr-2" />
                <h1>Add to cart</h1>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

export const StyledButton = styled(Button).attrs({ className: "text-sm" })`
  padding: 8px 16px; ;
`;

export const TitleText = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
