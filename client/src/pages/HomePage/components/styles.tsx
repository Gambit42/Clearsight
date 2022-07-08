import styled from "styled-components";
import Button from "src/components/Button";
import { Swiper } from "swiper/react";

type BannerProps = {
  backgroundImage: string;
};

export const BannerContainer = styled.div.attrs({
  className: "pt-16 relative flex items-center justify-center font-montserrat",
})``;

export const SwiperContent = styled.div.attrs({
  className:
    "absolute flex flex-col items-center justify-center w-full max-w-6xl px-5 sm:px-10 sm:items-start sm:justify-start z-10",
})``;

export const SubText = styled.div.attrs({
  className:
    "text-white text-xs font-semibold italic md:text-base lg:text-lg pointer-events-none",
})``;

export const MainText = styled.div.attrs({
  className:
    "text-center text-3xl text-white font-bold md:text-5xl lg:text-6xl pointer-events-none pt-1",
})``;

export const StyledButton = styled(Button)`
  margin-top: 30px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100vw;
  height: 60vh;

  .swiper-pagination-bullet {
    width: 15px !important;
    height: 15px !important;
    background-color: #fff !important;
  }

  @media (min-width: 768px) {
    height: 70vh;
  }
`;

export const StyledBanner = styled.div<BannerProps>`
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 4rem;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #171717;
    opacity: 0.5;
  }
`;
