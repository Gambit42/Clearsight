import styled from "styled-components";
import Button from "src/components/Button";
import { Swiper } from "swiper/react";

type BannerProps = {
  backgroundImage: string;
};

export const BannerContainer = styled.div.attrs({
  className:
    "pt-16 relative flex items-center justify-center font-montserrat lg:w-4/5 lg:h-[400px] lg:max-w-6xl mx-auto ",
})``;

export const SwiperContent = styled.div.attrs({
  className:
    "absolute flex flex-col items-center justify-center max-w-6xl px-5 sm:px-10 sm:items-start sm:justify-start z-10 lg:pt-8 left-0 lg:w-3/5",
})``;

export const MainText = styled.div.attrs({
  className:
    "text-center text-3xl text-white font-semibold pointer-events-none",
})``;

export const SubText = styled.div.attrs({
  className:
    "font-medium text-center text-gray-50 text-sm pt-2 pointer-events-none sm:text-left sm:w-10/12 max-w-[500px]",
})``;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100vw;
  height: 55vh;

  .swiper-pagination-bullet {
    width: 15px !important;
    height: 15px !important;
    background-color: #fff !important;
  }

  @media (min-width: 1024px) {
    margin-top: 40px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const StyledBanner = styled.div<BannerProps>`
  background-color: #f3f3f3;
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
