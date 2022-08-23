import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookSkeleton = () => {
  return (
    <>
      <MainSkeleton />
      <DetailSkeleton />
      <DetailSkeleton />
    </>
  );
};

export default BookSkeleton;

export const MainSkeleton = styled(Skeleton).attrs({
  className: "w-full min-h-[280px]",
})``;

export const DetailSkeleton = styled(Skeleton).attrs({
  className: "mt-5 w-full h-[20px]",
})``;
