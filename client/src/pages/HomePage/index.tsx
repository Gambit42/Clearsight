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
      <BookCarousel title="New Arrivals" category="new-arrivals" />
      <BookCarousel title="Best Sellers" category="best-sellers" />
      <Featured />
      <BookCarousel title="Fantasy" category="fantasy" />
      <BookCarousel title="Sci-Fi" category="sci-fi" />
      <BottomBanner />
    </UserLayout>
  );
};

export default index;
