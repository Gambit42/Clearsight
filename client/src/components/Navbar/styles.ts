import { GiDoubleDragon } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import Button from "src/components/Button";

import styled, { css } from "styled-components";

type SearchProps = {
  isSearchOpen: boolean | undefined;
};

export const StyledButton = styled(Button).attrs({
  className: "hidden lg:block",
})`
  padding: 8px 14px;
  font-size: 14px;
  margin: 0 10px;
`;

export const Nav = styled.div.attrs({
  className: "bg-white fixed w-screen h-16 shadow-sm lg:h-18",
})`
  z-index: 999;
`;

export const Container = styled.div.attrs({
  className:
    "relative flex flex-row mx-auto max-w-6xl items-center h-full justify-between sm:w-11/12 px-4",
})`
  position: relative;
`;

export const SearchIcon = styled(IoSearchOutline).attrs({
  className: "w-6 h-6 mr-1 text-gray-400 cursor-pointer mb-1",
})``;

export const SearchContainer = styled.div.attrs({
  className:
    "hidden sm:flex opacity-0 flex items-center justify-center absolute z-50 top-18 bg-white w-full h-40",
})<SearchProps>`
  visibility: hidden;
  transition: ease all 0.3s;
  ${(props) =>
    props.isSearchOpen &&
    css`
      transition: ease all 0.3s;
      visibility: visible;
      opacity: 1;
    `}
`;

export const SearchBarAndIconContainer = styled.div.attrs({
  className: "flex flex-row items-center border-b-2 rounded-sm border-gray-300",
})``;

export const SearchBar = styled.input.attrs({
  className: "outline-none w-0 sm:w-[500px] lg:w-[700px]",
})``;

export const Logo = styled.div.attrs({
  className:
    "flex flex-row items-end absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
})``;

export const Icon = styled(GiDoubleDragon).attrs({
  className: "h-6 w-6 text-red-700 mr-1 sm:mr-2 sm:h-8 sm:w-8",
})``;

export const SearchButton = styled(IoSearchOutline).attrs({
  className: "hidden sm:block h-7 w-7 z-10 text-gray-900 cursor-pointer",
})``;
