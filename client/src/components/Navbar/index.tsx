import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import BurgerIcon from "./components/BurgerIcon";
import ShoppingCart from "./components/ShoppingCart";
import MobileNavigation from "./components/MobileNavigation";
import SearchBarContext from "src/contexts/SearchBarContext";
import MobileNavContext from "src/contexts/MobileNavContext";
import { AuthContext } from "src/contexts/AuthContext";
import { MenuItems } from "./utils/MenuItems";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isSearchBarOpen, setIsSearchBarOpen } =
    useContext(SearchBarContext) || {};
  const { isMobileNavOpen, setIsMobileNavOpen } =
    useContext(MobileNavContext) || {};
  const { user, dispatch, isLoading } = useContext(AuthContext) || {};
  const cartCount = 4;

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
    setIsMobileNavOpen?.(!isMobileNavOpen);
  };

  const handleSearchOpen = () => {
    setIsSearchBarOpen?.(!isSearchBarOpen);
  };

  console.log(user);

  const handleLogout = async () => {
    const config = {
      withCredentials: true,
    };
    try {
      await axios.post("http://localhost:4000/account/logout", null, config);
      dispatch({ type: "LOGOUT" });
      localStorage.setItem("isSignedIn", "");
      console.log("Sign_out");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisplayMenuitems = MenuItems.map((item) => (
    <Link
      to={item.path}
      key={item.path}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <li className="list-none mr-2">
        <div className="text-lg font-semibold cursor-pointer p-2 hover:text-red-700">
          {item.name}
        </div>
      </li>
    </Link>
  ));

  const displayUserOptions =
    user?.length !== 0 ? (
      <h1>hi logged in</h1>
    ) : (
      <>
        <Link
          to="/account/signin"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <S.StyledButton variant="primary">Sign In</S.StyledButton>
        </Link>
        <Link
          to="/account/signup"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <S.StyledButton variant="secondary">Register</S.StyledButton>
        </Link>
      </>
    );

  return (
    <S.Nav>
      <S.Container>
        <BurgerIcon isOpen={isOpen} onClick={handleMobileNav} />
        <div className="hidden lg:flex justify-evenly">
          {handleDisplayMenuitems}
        </div>
        <S.Logo onClick={handleLogout}>
          <S.Icon />
          <h1 className="font-bold text-base sm:text-xl">DH Bookstore</h1>
        </S.Logo>
        <div className="flex flex-row items-center">
          <S.SearchButton onClick={handleSearchOpen} />
          <ShoppingCart cartCount={cartCount} />
          {displayUserOptions}
        </div>
      </S.Container>
      <S.SearchContainer isSearchOpen={isSearchBarOpen}>
        <S.SearchBarAndIconContainer>
          <S.SearchIcon />
          <S.SearchBar placeholder="Search" />
        </S.SearchBarAndIconContainer>
      </S.SearchContainer>
      <MobileNavigation isOpen={isOpen} onClick={handleMobileNav} />
    </S.Nav>
  );
};

export default Navbar;
