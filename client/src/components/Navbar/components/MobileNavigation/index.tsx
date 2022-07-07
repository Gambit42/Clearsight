import React from "react";
import { MenuItems } from "../../utils/MenuItems";
import { Button } from "src/components";
import * as S from "./styles";

type Props = {
  isOpen: boolean;
};

const MobileNavigation = (props: Props) => {
  const { isOpen } = props;

  const handleDisplayMenuitems = MenuItems.map((item, index) => (
    <S.MenuItems>
      <S.Checkbox id={`${index}`} type="checkbox" />
      <S.ArrowContainer>
        {item.subList ? <S.SublistArrow /> : ""}
      </S.ArrowContainer>
      <S.CheckBoxLabel htmlFor={`${index}`}>
        <S.MenuItemName>{item.name}</S.MenuItemName>
      </S.CheckBoxLabel>
      <S.SubMenuContainer>
        {item.subList?.map((sublist) => (
          <S.SubMenuitems>{sublist.name}</S.SubMenuitems>
        ))}
      </S.SubMenuContainer>
    </S.MenuItems>
  ));

  return (
    <S.MobileNav isBurgerOpen={isOpen}>
      <S.SearchForm>
        <S.SearchInnerContainer>
          <S.SearchIcon />
          <S.Input placeholder="Search" />
        </S.SearchInnerContainer>
      </S.SearchForm>
      <S.NavList>{handleDisplayMenuitems}</S.NavList>
      <S.ButtonContainer>
        <S.StyledButton text="Sign in" type="primary" />
        <Button text="Join now" type="text" />
      </S.ButtonContainer>
      <S.BottomSpacing />
    </S.MobileNav>
  );
};

export default MobileNavigation;
