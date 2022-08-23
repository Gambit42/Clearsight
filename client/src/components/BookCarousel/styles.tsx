import styled, { css } from "styled-components";
import Button from "src/components/Button";
import { IoCartOutline } from "react-icons/io5";
import { Swiper } from "swiper/react";

const arrowStyles = css`
  color: #111;
  font-size: 25px;
`;

export const StyledButton = styled(Button).attrs({ className: "text-sm" })`
  padding: 8px 16px; ;
`;

export const StyledSwiper = styled(Swiper)`
  position: unset;
  margin: 0 40px 0 40px;

  .swiper-slide {
    width: 100%;

    @media (min-width: 480px) {
      width: 50%;
    }

    @media (min-width: 768px) {
      width: 33%;
    }

    @media (min-width: 1024px) {
      width: 25%;
    }

    @media (min-width: 1100px) {
      width: 20%;
    }
  }
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
  className: "section-title text-lg font-bold sm:text-2xl",
})``;
