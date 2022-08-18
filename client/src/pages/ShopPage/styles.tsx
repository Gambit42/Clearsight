import styled, { css } from "styled-components";
import Button from "src/components/Button";
import { IoCartOutline } from "react-icons/io5";

export const BookDetails = styled.div.attrs({
  className:
    "cursor-pointer flex flex-col items-center p-2 group justify-center border-gray-50",
})``;

export const BookTitleAuthorContainer = styled.div.attrs({
  className: "w-full text-left max-h-[300px] min-h-[120px] max-w-[160px]",
})``;

export const AuthorText = styled.h1.attrs({
  className: "text-sm text-gray-700 group-hover:text-red-900",
})``;

export const BookImage = styled.img.attrs({
  className:
    "w-full h-full rounded h-[200px] max-w-[120px] cursor-pointer scale-100 group-hover:scale-105 ease-in duration-100 py-2",
})``;

export const BookPricesContainer = styled.div.attrs({
  className:
    "w-full flex flex-row items-center justify-start text-left overflow-hidden flex-wrap pt-2",
})``;

export const BookNewPrice = styled.div.attrs({
  className: "text-sm font-medium text-gray-900",
})``;

export const BookOldPrice = styled.div.attrs({
  className: "pl-2 text-xs text-gray-700 line-through inline-block truncate",
})``;
export const SliderContent = styled.div.attrs({
  className:
    "min-h-[300px] border border-gray-100 flex flex-col justify-between border border-gray-50 w-full items-center",
})``;

export const StyledButton = styled(Button).attrs({ className: "text-sm" })`
  padding: 8px 16px; ;
`;

export const CartIcon = styled(IoCartOutline).attrs({
  className: "w-5 h-5 mr-2",
})``;
export const AddToCartButton = styled(Button).attrs({
  className: "text-sm flex flex-row items-center justify-center w-full",
})`
  padding: 8px 12px;
`;

export const AddToCartContainer = styled.div.attrs({
  className: "px-1 pb-4 max-w-[160px] w-full",
})``;

export const TitleText = styled.h1.attrs({
  className:
    "text-sm xss:max-w-[110px] xs:max-w-[160px] group-hover:text-red-900",
})`
  /* display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SaleText = styled.h1.attrs({
  className:
    "mt-1 text-center text-xs px-3 py-1 bg-green-500 rounded w-min text-white",
})``;
