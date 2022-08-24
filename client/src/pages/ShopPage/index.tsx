import React, { useState, useEffect } from "react";
import UserLayout from "src/layouts/UserLayout";
import { Link, useParams, useLocation } from "react-router-dom";
import useGetProducts from "src/hooks/useGetProducts";
import { IoIosArrowDown } from "react-icons/io";
import * as S from "./styles";
import Pagination from "./Pagination";
import Book from "src/components/Book";
import BookSkeleton from "src/components/BookSkeleton";

const ShopPage = () => {
  const location = useLocation();
  const limit = 12;
  const [title, setTitle] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSorterOpen, setIsSorterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSorter, setActiveSorter] = useState("None");
  const { category } = useParams();
  const { count, products, isLoading } = useGetProducts({
    genre: category,
    limit: limit,
  });

  useEffect(() => {
    switch (category) {
      case "all":
        setTitle("All");
        setActiveCategory("All");
        break;
      case "fantasy":
        setTitle("Fantasy");
        setActiveCategory("Fantasy");
        break;
      case "sci-fi":
        setTitle("Sci-Fi");
        setActiveCategory("Sci-Fi");
        break;
      default:
        setTitle("All");
        setActiveCategory("All");
        break;
    }
  }, [category]);

  const categories = [
    { name: "All", path: "/shop/all" },
    { name: "Fantasy", path: "/shop/fantasy" },
    { name: "Sci-Fi", path: "/shop/sci-fi" },
  ];

  const filters = [
    { name: "Best sellers", query: "?orderBy=numberOfSales&orderWay=desc" },
    { name: "New", query: "?orderBy=createdAt&orderWay=desc" },
    { name: "Price (High to low)", query: "?orderBy=price&orderWay=desc" },
    { name: "Price (Low to high)", query: "?orderBy=price&orderWay=asc" },
    { name: "Default", query: "" },
  ];

  const books = isLoading ? (
    <div className="grid grid-cols-1 xss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-10">
      {Array(12)
        .fill(null)
        .map((item, index) => (
          <div key={index}>
            <BookSkeleton />
          </div>
        ))}
    </div>
  ) : (
    <>
      <div className="grid grid-cols-1 xss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-10">
        {products.map((item) => (
          <Book key={item.title} item={item} />
        ))}
      </div>
    </>
  );

  return (
    <UserLayout>
      <div
        className="min-h-screen px-4 mt-16 w-screen max-w-6xl mx-auto flex flex-col justify-start font-montserrat"
        onClick={() => {
          setIsCategoriesOpen(false);
          setIsSorterOpen(false);
        }}
      >
        <div className="pt-10">
          <h1 className="text-lg font-bold sm:text-2xl">{`${title} Books`}</h1>
        </div>
        <div className="flex flex-col xs:flex-row">
          <div className="pt-5 flex flex-col items-start sm:flex-row sm:items-center xs:mr-10">
            <h1 className="mr-5 mb-2 sm:mb-0">SHOP BY</h1>
            <div className="flex flex-col items-center justify-center border border-gray-100 py-2 px-6 relative">
              <div
                className="flex flex-row items-center cursor-pointer"
                onClick={(event: any) => {
                  event.stopPropagation();
                  setIsCategoriesOpen(!isCategoriesOpen);
                }}
              >
                <h1 className="">{activeCategory}</h1>
                <IoIosArrowDown className="w-6 h-6 ml-2" />
              </div>
              <div
                className={`${
                  isCategoriesOpen ? "z-50 first-line:opacity-100" : "opacity-0"
                } left-0 mt-12 top-0  flex flex-col absolute px-5 py-4 transition-all duration-200 border border-gray-100 drop-shadow-sm min-w-[150px] bg-white`}
                onClick={() => {
                  setIsCategoriesOpen(false);
                }}
              >
                {categories.map((item) => (
                  <Link
                    key={item.path}
                    to={{
                      pathname: item.path,
                      search: location.search,
                    }}
                    onClick={() => {
                      setIsCategoriesOpen(false);
                    }}
                  >
                    <h1 className="py-1">{item.name}</h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-5 flex flex-col items-start sm:flex-row sm:items-center">
            <h1 className="mr-5 mb-2 sm:mb-0">SORT BY</h1>
            <div className="flex flex-col items-center justify-center border border-gray-100 py-2 px-6 relative">
              <div
                className="flex flex-row items-center z-10 cursor-pointer"
                onClick={(event: any) => {
                  event.stopPropagation();
                  setIsSorterOpen(!isSorterOpen);
                }}
              >
                <h1 className="">{activeSorter}</h1>
                <IoIosArrowDown className="w-6 h-6 ml-2" />
              </div>
              <div
                className={`${
                  isSorterOpen ? "opacity-100 z-50" : " opacity-0"
                } left-0 mt-12 top-0  flex flex-col absolute px-5 py-4 transition-all duration-200 border border-gray-100 drop-shadow-sm min-w-[200px] bg-white`}
                onClick={() => {
                  setIsSorterOpen(false);
                }}
              >
                {filters.map((item) => (
                  <Link
                    key={item.query}
                    to={{
                      search: item.query,
                    }}
                    onClick={() => {
                      setIsCategoriesOpen(false);
                    }}
                  >
                    <h1
                      className="py-1"
                      onClick={() => {
                        setActiveSorter(item.name);
                      }}
                    >
                      {item.name}
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {books}
        <Pagination
          count={count}
          limit={limit}
          genre={activeCategory}
          sorter={activeSorter}
        />
      </div>
    </UserLayout>
  );
};

export default ShopPage;
