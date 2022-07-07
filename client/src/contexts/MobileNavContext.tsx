import { createContext } from "react";

type MobileNavProps = {
  isMobileNavOpen?: boolean;
  setIsMobileNavOpen?: (isMobileNavOpen: boolean) => void;
};

const MobileNavContext = createContext<MobileNavProps | null>(null);

export default MobileNavContext;
