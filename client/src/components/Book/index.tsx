import React from "react";
import * as S from "./styles";
import useCartTransactions from "src/hooks/useCartTransactions";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  item?: any;
};
const Book = (props: Props) => {
  const { item } = props;
  const { handleCartTransactions, isLoading } = useCartTransactions({
    productId: item._id,
    quantity: 1,
  });

  const displayedButton = isLoading ? (
    <S.AddToCartButton variant="loading" type="button">
      <ClipLoader size={18} />
      <h1 className="ml-2">Adding to Cart</h1>
    </S.AddToCartButton>
  ) : (
    <S.AddToCartButton
      variant="cart"
      type="button"
      onClick={() => {
        handleCartTransactions();
      }}
    >
      <S.CartIcon />
      <h1>Add to cart</h1>
    </S.AddToCartButton>
  );

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
      <S.AddToCartContainer>{displayedButton}</S.AddToCartContainer>
    </S.Container>
  );
};

export default Book;
