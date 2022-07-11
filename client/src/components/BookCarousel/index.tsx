import React from "react";
import * as S from "./styles";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  title: string;
  data?: any;
};

const BooksCarousel = (props: Props) => {
  const { title } = props;
  const array = [
    {
      title: "Gardens of the Moon",
      author: "Steven Erikson",
      isOnSale: true,
      previousPrice: 400,
      price: 200,
    },
    {
      title: "Promise of Blood",
      author: "Brian Mclellan",
      isOnSale: false,
      previousPrice: 400,
      price: 192.1,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      isOnSale: false,
      previousPrice: 400,
      price: 499.25,
    },
    {
      title: "Storm of Swords",
      author: "George R.R. Martin",
      isOnSale: true,
      previousPrice: 900,
      price: 700.25,
    },
    {
      title: "Wisdom of Crowds",
      author: "Joe Abercrombie",
      isOnSale: true,
      previousPrice: 700,
      price: 650.25,
    },
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      isOnSale: true,
      previousPrice: 100400,
      price: 699.5,
    },
  ];

  const books = array.map((item) => (
    <SwiperSlide>
      <S.SliderContent>
        <S.BookDetails>
          <S.BookImage
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SY475_.jpg"
            alt="malaz"
          />
          <S.BookTitleAuthorContainer>
            <S.TitleText>{item.title}</S.TitleText>
            <S.AuthorText>{item.author}</S.AuthorText>
          </S.BookTitleAuthorContainer>
        </S.BookDetails>
        <S.BookPricesContainer>
          <S.BookNewPrice>₱ {item.price.toFixed(2)}</S.BookNewPrice>
          {item.isOnSale ? (
            <S.BookOldPrice>₱ {item.previousPrice.toFixed(2)}</S.BookOldPrice>
          ) : (
            ""
          )}
        </S.BookPricesContainer>
        <S.AddToCartContainer>
          <S.AddToCartButton>
            <S.CartIcon />
            <h1>Add to cart</h1>
          </S.AddToCartButton>
        </S.AddToCartContainer>
      </S.SliderContent>
    </SwiperSlide>
  ));

  return (
    <S.BookCarouselContainer>
      <S.SectionTitleContainer>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.StyledButton type="primary" text="See more" />
      </S.SectionTitleContainer>
      <S.StyledSwiper
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books}
      </S.StyledSwiper>
    </S.BookCarouselContainer>
  );
};

export default BooksCarousel;
