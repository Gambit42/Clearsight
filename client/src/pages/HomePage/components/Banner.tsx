import React from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import * as S from "./styles";

export default function Banner() {
  const bannerImages = [
    "banner_GoT.jpg",
    "banner_dune.jpg",
    "banner_war.jpg",
    "banner_dune2.jpg",
  ];

  const slides = bannerImages.map((image) => (
    <SwiperSlide>
      <S.StyledBanner backgroundImage={image}></S.StyledBanner>
    </SwiperSlide>
  ));

  return (
    <S.BannerContainer>
      <S.StyledSwiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides}
      </S.StyledSwiper>
      <S.SwiperContent>
        <S.SubText>Everything Science Fiction and Fantasy</S.SubText>
        <S.MainText>Dragon's Hoard Bookstore</S.MainText>
        <S.StyledButton type="primary" text="Shop Now" />
      </S.SwiperContent>
    </S.BannerContainer>
  );
}
