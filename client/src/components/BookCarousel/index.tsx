import React, { useState } from "react";
import * as S from "./styles";
import { SwiperSlide } from "swiper/react";
import useFindByGenre from "src/hooks/useFindByGenre";
import { Pagination, Navigation } from "swiper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  title: string;
  data?: any;
  otherProps?: unknown;
  category: string;
};

const BooksCarousel = (props: Props) => {
  const carouselLimit = 6;
  const { title, category, ...otherProps } = props;
  const { products, isLoading } = useFindByGenre({
    genre: category,
    limit: carouselLimit,
  });

  console.log(category);

  const books = products.map((item) => (
    <SwiperSlide key={item.title}>
      <S.SliderContent>
        <S.BookDetails>
          <S.BookImage src={item.image} alt="malaz" />
          <S.BookTitleAuthorContainer>
            <S.TitleText>{item.title}</S.TitleText>
            <S.AuthorText>{item.author}</S.AuthorText>
            <S.BookPricesContainer>
              <S.BookNewPrice>₱{item.price.toFixed(2)}</S.BookNewPrice>
              {item.isOnSale ? (
                <S.BookOldPrice>
                  ₱{item.previousPrice?.toFixed(2)}
                </S.BookOldPrice>
              ) : (
                ""
              )}
            </S.BookPricesContainer>
            {item.isOnSale ? <S.SaleText>SALE</S.SaleText> : ""}
          </S.BookTitleAuthorContainer>
        </S.BookDetails>
        <S.AddToCartContainer>
          <S.AddToCartButton variant="cart">
            <S.CartIcon />
            <h1>Add to cart</h1>
          </S.AddToCartButton>
        </S.AddToCartContainer>
      </S.SliderContent>
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
              <Skeleton className="w-full min-h-[220px]" />
              <Skeleton className="mt-5 w-full" height={20} />
              <Skeleton className="mt-2 w-full" height={20} />
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
