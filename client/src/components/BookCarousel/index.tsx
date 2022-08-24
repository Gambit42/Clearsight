import React, { useState } from "react";
import * as S from "./styles";
import { SwiperSlide } from "swiper/react";
import useGetProducts from "src/hooks/useGetProducts";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Book from "src/components/Book";
import BookSkeleton from "src/components/BookSkeleton";

type Props = {
  title: string;
  data?: any;
  otherProps?: unknown;
  category: string;
};

const BooksCarousel = (props: Props) => {
  const carouselLimit = 6;
  const { title, category, ...otherProps } = props;
  const { products, isLoading } = useGetProducts({
    genre: category,
    limit: carouselLimit,
  });

  const books = products.map((item) => (
    <SwiperSlide key={item.title}>
      <Book item={item} />
    </SwiperSlide>
  ));

  const Swiper = isLoading ? (
    <S.StyledSwiper
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        },
      }}
    >
      {Array(6)
        .fill(null)
        .map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <BookSkeleton />
            </div>
          </SwiperSlide>
        ))}
    </S.StyledSwiper>
  ) : (
    <S.StyledSwiper
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {books}
    </S.StyledSwiper>
  );

  return (
    <S.BookCarouselContainer {...otherProps}>
      <S.SectionTitleContainer>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.StyledButton variant="primary">See More</S.StyledButton>
      </S.SectionTitleContainer>
      {Swiper}
    </S.BookCarouselContainer>
  );
};

export default BooksCarousel;
