import React from "react";
import UserLayout from "src/layouts/UserLayout";
import WelcomeBanner from "./components/WelcomeBanner";
import Featured from "./components/Featured";
import BottomBanner from "./components/BottomBanner";
import BookCarousel from "src/components/BookCarousel";

type Props = {};

const index = (props: Props) => {
  return (
    <UserLayout>
      <WelcomeBanner />
      <BookCarousel title="New Arrivals" />
      <Featured />
      <BookCarousel title="Fantasy" />
      <BookCarousel title="Sci-Fi" />
      <BottomBanner />
    </UserLayout>
  );
};

export default index;
