import { createContext } from "react";

type SearchBarProps = {
  isSearchBarOpen?: boolean;
  setIsSearchBarOpen?: (isSearchBarOpen: boolean) => void;
};

const SearchBarContext = createContext<SearchBarProps | null>(null);

export default SearchBarContext;
