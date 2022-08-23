import React from "react";
import * as S from "./styles";

type Props = {
  item: any;
};
const Book = (props: Props) => {
  const { item } = props;
  return (
    <S.Container key={item.title}>
      <S.BookDetails>
        <S.Image src={item.image} alt={item.title} />
        <S.InnerDetailsContainer>
          <S.Title>{item.title}</S.Title>
          <S.Author>{item.author}</S.Author>
          <S.PriceContainer>
            <S.CurrentPrice>₱{item.price.toFixed(2)}</S.CurrentPrice>
            {item.isOnSale ? (
              <S.OldPrice>₱{item.previousPrice?.toFixed(2)}</S.OldPrice>
            ) : (
              ""
            )}
          </S.PriceContainer>
          {item.isOnSale ? <S.SaleText>SALE</S.SaleText> : ""}
        </S.InnerDetailsContainer>
      </S.BookDetails>
      <S.AddToCartContainer>
        <S.AddToCartButton variant="cart">
          <S.CartIcon />
          <h1>Add to cart</h1>
        </S.AddToCartButton>
      </S.AddToCartContainer>
    </S.Container>
  );
};

export default Book;
