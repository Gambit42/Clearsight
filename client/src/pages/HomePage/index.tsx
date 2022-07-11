import React from "react";
import UserLayout from "src/layouts/UserLayout";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";

const index = () => {
  return (
    <UserLayout>
      <Banner />
      <NewArrivals />
    </UserLayout>
  );
};

export default index;
