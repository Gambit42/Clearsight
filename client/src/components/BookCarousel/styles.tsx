import styled, { css } from "styled-components";
import Button from "src/components/Button";
import { IoCartOutline } from "react-icons/io5";
import { Swiper } from "swiper/react";

const arrowStyles = css`
  color: #111;
  font-size: 25px;
`;

export const BookDetails = styled.div.attrs({
  className: "cursor-pointer flex flex-col p-2 group",
})``;

export const BookTitleAuthorContainer = styled.div.attrs({
  className:
    "px-2 py-2 text-center max-h-[300px] min-h-[80px] group-hover:text-red-900 group-hover:underline",
})``;

export const AuthorText = styled.h1.attrs({
  className: "text-sm text-gray-700 pt-2 group-hover:text-red-900",
})``;

export const BookImage = styled.img.attrs({
  className:
    "rounded mx-auto max-h-[200px] max-w-[150px] cursor-pointer scale-100 group-hover:scale-105 ease-in duration-100",
})``;

export const BookPricesContainer = styled.div.attrs({
  className:
    "flex flex-row items-center justify-center text-center px-2 overflow-hidden flex-wrap",
})``;

export const BookNewPrice = styled.div.attrs({
  className: "text-base font-medium text-gray-900 pt-2 text-center",
})``;

export const BookOldPrice = styled.div.attrs({
  className:
    "pl-2 text-xs text-gray-700 pt-2 text-center line-through inline-block truncate",
})``;
export const SliderContent = styled.div.attrs({
  className: "flex flex-col justify-between border border-gray-50 w-full",
})``;

export const StyledButton = styled(Button).attrs({ className: "text-sm" })`
  padding: 8px 16px; ;
`;

export const CartIcon = styled(IoCartOutline).attrs({
  className: "w-5 h-5 mr-2",
})``;
export const AddToCartButton = styled.button.attrs({
  className:
    "rounded  w-full border shadow-sm border-gray-200 py-2 text-sm hover:bg-red-700 hover:text-white ease-in duration-100 flex flex-row items-center justify-center",
})``;

export const AddToCartContainer = styled.div.attrs({
  className: "py-4 px-2 sm:px-4",
})``;

export const TitleText = styled.h1.attrs({
  className: "text-sm mx-auto",
})`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledSwiper = styled(Swiper)`
  position: unset;
  margin: 0 40px 0 40px;

  .swiper-pagination-bullet {
    width: 15px !important;
    height: 15px !important;
    background-color: #111 !important;
  }
  .swiper-pagination {
    margin-bottom: 10px;
  }
  .swiper-button-prev:after {
    ${arrowStyles}
  }
  .swiper-button-next:after {
    ${arrowStyles}
  }
`;

export const BookCarouselContainer = styled.div.attrs({
  className:
    "mx-auto max-w-6xl w-screen px-4 sm:w-11/12 font-montserrat pb-20 pt-10 relative",
})``;

export const SectionTitleContainer = styled.div.attrs({
  className: "flex flex-row justify-between items-center pt-10 pb-5 ",
})``;

export const SectionTitle = styled.h1.attrs({
  className: "text-lg font-bold sm:text-2xl",
})``;
