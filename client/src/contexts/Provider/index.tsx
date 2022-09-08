import React, { useState, useReducer } from "react";
import GlobalStyle from "src/styles/GlobalStyle";
import SearchBarContext from "src/contexts/SearchBarContext";
import MobileNavContext from "src/contexts/MobileNavContext";
import CartContext from "src/contexts/CartContext";
import { AuthContext, authReducer } from "src/contexts/AuthContext";

type Props = {
  children: React.ReactNode;
};

const ContextProvider = (props: Props) => {
  const initialValues = {
    user: localStorage.getItem("_user") || [],
    isLoggedIn: false,
    token: "",
    isLoading: true,
  };
  const { children } = props;
  const [state, dispatch] = useReducer(authReducer, initialValues);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartData, setCartData] = useState<any>({});

  return (
    <AuthContext.Provider
      value={{
        user: state.user.user,
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        token: state.token,
        dispatch,
      }}
    >
      <CartContext.Provider
        value={{ cartCount, setCartCount, cartData, setCartData }}
      >
        <SearchBarContext.Provider
          value={{ isSearchBarOpen, setIsSearchBarOpen }}
        >
          <MobileNavContext.Provider
            value={{ isMobileNavOpen, setIsMobileNavOpen }}
          >
            <GlobalStyle isMobileNavOpen={isMobileNavOpen} />
            {children}
          </MobileNavContext.Provider>
        </SearchBarContext.Provider>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default ContextProvider;
