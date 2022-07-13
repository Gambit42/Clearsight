import styled from "styled-components";
import Button from "src/components/Button";
import { IoCartOutline } from "react-icons/io5";

export const CartIcon = styled(IoCartOutline).attrs({
  className: "w-5 h-5 mr-2",
})``;

export const SectionContainer = styled.div.attrs({
  className: "px-4 max-w-6xl mx-auto font-montserrat",
})``;

export const SectionTitle = styled.h1.attrs({
  className: "text-lg font-bold sm:text-2xl pb-10",
})``;

export const BookDetailsContainer = styled.div.attrs({
  className:
    "flex flex-col items-center md:flex-row md:justify-center md:items-start",
})``;

export const BookImage = styled.img.attrs({
  className: "max-h-[400px]",
})``;

export const BookTextandButtonContainer = styled.div.attrs({
  className: "py-4 sm:w-4/5 md:w-3/5 md:pl-10",
})``;

export const BookTitleAndAuthorContainer = styled.div.attrs({
  className: "py-2",
})``;

export const BookPrice = styled.h1.attrs({
  className: "text-xl font-medium text-gray-900 pt-4",
})``;

export const ButtonsContainer = styled.div.attrs({
  className:
    "flex flex-col pt-6 w-10/12 max-w-[300px] sm:max-w-[400px] sm:flex-row sm:w-full",
})``;

export const AddToCartButton = styled(Button).attrs({
  className: "flex flex-row mr-2 items-center justify-center",
})``;

export const ViewMoreDetailsButton = styled(Button).attrs({
  className: "mt-2 flex flex-row items-center justify-center sm:mt-0",
})``;
