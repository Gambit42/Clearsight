import styled, { css } from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Button from "src/components/Button";

type MobileNavProps = {
  isBurgerOpen: boolean;
};

export const MenuItemName = styled.a.attrs({
  className: "text-lg font-medium",
})``;

export const ArrowContainer = styled.div.attrs({
  className:
    "top-4 right-3 absolute transition-transform duration-500 peer-checked:rotate-90 rotate-0 pointer-events-none",
})``;

export const CheckBoxLabel = styled.label.attrs({
  className:
    "px-4 py-2 h-14 w-full flex flex-row justify-between items-center cursor-pointer",
})``;

export const Checkbox = styled.input.attrs({
  className: "opacity-0 absolute peer",
})``;

export const SubMenuContainer = styled.ul.attrs({
  className: "px-6 max-h-0 transition-all duration-500 peer-checked:max-h-96",
})``;

export const MenuItems = styled.li.attrs({
  className:
    "relative flex flex-col border-gray-100 border-b-2 overflow-hidden",
})``;

export const SubMenuitems = styled.li.attrs({
  className: "py-2 last:mb-2 ",
})``;

export const SublistArrow = styled(IoIosArrowForward).attrs({
  className: "w-5 h-5 text-gray-900",
})``;

export const SearchForm = styled.form.attrs({
  className: "p-5 border border-gray-100 border-b-2",
})``;

export const SearchInnerContainer = styled.div.attrs({
  className:
    "flex flex-row items-center bg-stone-50 rounded border mx-auto max-w-2xl w-full h-full p-2",
})``;

export const SearchIcon = styled(IoSearchOutline).attrs({
  className: "w-6 h-6 mr-1 text-gray-400 cursor-pointer",
})``;

export const Input = styled.input.attrs({
  className: "w-full bg-transparent outline-none",
})``;

export const NavList = styled.ul.attrs({
  className: "overflow-y-auto",
})``;

export const MobileNav = styled.div<MobileNavProps>`
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  transition: transform 0.1s ease-in;
  transform: translateX(-100%);
  top: 4rem;
  z-index: 100;
  position: fixed;
  overflow-x: hidden;
  z-index: 999;
  border-top: #f1f5f9 1px solid;

  ${({ isBurgerOpen }) =>
    isBurgerOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const StyledButton = styled(Button)`
  margin-bottom: 10px;
  padding: 8px 34px;
`;

export const ButtonContainer = styled.div.attrs({
  className: "pt-16 px-4 flex flex-col justify-center items-center",
})``;

export const BottomSpacing = styled.div.attrs({
  className: "min-h-40 w-full py-14",
})``;
