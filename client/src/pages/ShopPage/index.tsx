import React, { useState, useEffect } from "react";
import UserLayout from "src/layouts/UserLayout";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const [title, setTitle] = useState("");
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    switch (category) {
      case "all":
        setTitle("All Products");
        break;
      case "new-arrivals":
        setTitle("New Arrivals");
        break;
      case "best-sellers":
        setTitle("Best Sellers");
        break;
      case "fantasy":
        setTitle("Fantasy");
        break;
      case "scifi":
        setTitle("Science Fiction");
        break;
      default:
        setTitle("All Products");
        break;
    }
  }, [category]);

  return (
    <UserLayout>
      <div className="min-h-screen px-4 mt-16 w-screen max-w-6xl mx-auto flex flex-col justify-start font-montserrat">
        <div className="pt-10">
          <h1 className="text-lg font-bold sm:text-2xl">{title}</h1>
        </div>
      </div>
    </UserLayout>
  );
};

export default ShopPage;
