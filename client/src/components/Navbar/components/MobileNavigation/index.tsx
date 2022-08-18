import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "../../utils/MenuItems";
import { Button } from "src/components";
import * as S from "./styles";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const MobileNavigation = (props: Props) => {
  const { isOpen, onClick } = props;
  const navigate = useNavigate();

  const handleDisplayMenuitems = MenuItems.map((item, index) => (
    <S.MenuItems
      key={item.name}
      onClick={() => {
        if (item.name !== "Genres") {
          navigate(item.path);
          onClick();
        }
      }}
    >
      <S.Checkbox id={`${index}`} type="checkbox" />
      <S.ArrowContainer>
        {item.subList ? <S.SublistArrow /> : ""}
      </S.ArrowContainer>
      <S.CheckBoxLabel htmlFor={`${index}`}>
        <S.MenuItemName>{item.name}</S.MenuItemName>
      </S.CheckBoxLabel>
      <S.SubMenuContainer>
        {item.subList?.map((sublist) => (
          <S.SubMenuitems key={sublist.name}>{sublist.name}</S.SubMenuitems>
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
        <Link to="/account/signin" onClick={onClick}>
          <S.StyledButton variant="primary">Sign in</S.StyledButton>
        </Link>
        <Link to="/account/signup" onClick={onClick}>
          <Button variant="secondary">Register</Button>
        </Link>
      </S.ButtonContainer>
      <S.BottomSpacing />
    </S.MobileNav>
  );
};

export default MobileNavigation;
