import React, { useState } from "react";
import GlobalStyle from "src/styles/GlobalStyle";
import SearchBarContext from "src/contexts/SearchBarContext";
import MobileNavContext from "src/contexts/MobileNavContext";

type Props = {
  children: React.ReactNode;
};

const ContextProvider = (props: Props) => {
  const { children } = props;
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  return (
    <SearchBarContext.Provider value={{ isSearchBarOpen, setIsSearchBarOpen }}>
      <MobileNavContext.Provider
        value={{ isMobileNavOpen, setIsMobileNavOpen }}
      >
        <GlobalStyle isMobileNavOpen={isMobileNavOpen} />
        {children}
      </MobileNavContext.Provider>
    </SearchBarContext.Provider>
  );
};

export default ContextProvider;
