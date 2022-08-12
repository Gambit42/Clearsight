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
      <BookCarousel title="New Arrivals" genre="Sci-fi" />
      <Featured />
      <BookCarousel title="Fantasy" genre="Fantasy" />
      <BookCarousel title="Sci-Fi" genre="Sci-fi" />
      <BottomBanner />
    </UserLayout>
  );
};

export default index;
