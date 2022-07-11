import React from "react";
import UserLayout from "src/layouts/UserLayout";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import BookCarousel from "src/components/BookCarousel";

const index = () => {
  return (
    <UserLayout>
      <Banner />
      <BookCarousel title="New Arrivals" />
      <Featured />
      <BookCarousel title="Fantasy" />
      <BookCarousel title="Sci-Fi" />
    </UserLayout>
  );
};

export default index;
