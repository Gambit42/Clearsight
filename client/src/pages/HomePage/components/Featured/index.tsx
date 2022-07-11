import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Featured = () => {
  return (
    <div className="px-4 max-w-6xl mx-auto font-montserrat">
      <div className="pb-10">
        <h1 className="text-lg font-bold sm:text-2xl">Featured Book</h1>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SY475_.jpg"
          alt="malaz"
          className="max-h-[400px]"
        />
        <div className="py-4 first-line:sm:w-4/5 md:w-3/5 md:pl-10">
          <div className="py-2">
            <h1>Gardens of the Moon</h1>
            <h1>Steven Erikson</h1>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur quae quaerat reprehenderit quo molestias consequuntur
            delectus sint repellat dignissimos atque provident libero ipsa
            harum, alias eligendi nam illo dolorum. Tempora iste veniam
            aspernatur dolorem provident nobis debitis id saepe?
          </p>
          <h1 className="text-xl font-medium text-gray-900 pt-4">₱ 200.00</h1>
          <div className="flex flex-col pt-6 w-10/12 max-w-[300px] sm:max-w-[400px] sm:flex-row sm:w-full">
            <button className="rounded text-white border shadow-sm border-gray-200 py-2 px-6 text-sm bg-red-700 hover:bg-white hover:text-gray-900 ease-in duration-100 flex flex-row items-center justify-center sm:mr-4">
              <IoCartOutline className="w-5 h-5 mr-2" />
              <h1>Add to cart</h1>
            </button>
            <button className="mt-2 rounded border shadow-sm border-gray-200 py-2 px-6 text-sm hover:bg-red-700 hover:text-white bg-white ease-in duration-100 flex flex-row items-center justify-center sm:mt-0">
              <h1>View More Details</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
