import React from "react";
import * as S from "./styles";

const Featured = () => {
  return (
    <S.SectionContainer>
      <S.SectionTitle>Featured Book</S.SectionTitle>
      <S.BookDetailsContainer>
        <S.BookImage
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SY475_.jpg"
          alt="malaz"
        />
        <S.BookTextandButtonContainer>
          <S.BookTitleAndAuthorContainer>
            <h1>Gardens of the Moon</h1>
            <h1>Steven Erikson</h1>
          </S.BookTitleAndAuthorContainer>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur quae quaerat reprehenderit quo molestias consequuntur
            delectus sint repellat dignissimos atque provident libero ipsa
            harum, alias eligendi nam illo dolorum. Tempora iste veniam
            aspernatur dolorem provident nobis debitis id saepe?
          </p>
          <S.BookPrice>₱ 200.00</S.BookPrice>
          <S.ButtonsContainer>
            <S.AddToCartButton>
              <S.CartIcon />
              <h1>Add to cart</h1>
            </S.AddToCartButton>
            <S.ViewMoreDetailsButton>
              <h1>View More Details</h1>
            </S.ViewMoreDetailsButton>
          </S.ButtonsContainer>
        </S.BookTextandButtonContainer>
      </S.BookDetailsContainer>
    </S.SectionContainer>
  );
};

export default Featured;
