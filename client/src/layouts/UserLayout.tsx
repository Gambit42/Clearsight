import React, { useContext } from "react";
import { Navbar, Footer } from "src/components";
import styled, { css } from "styled-components";
import SearchBarContext from "src/contexts/SearchBarContext";
import MobileNavContext from "src/contexts/MobileNavContext";

type Props = {
  children: React.ReactNode;
};

type OverlayProps = {
  isOverlayVisible: boolean | undefined;
};

const UserLayout = (props: Props) => {
  const { children } = props;

  const { isSearchBarOpen, setIsSearchBarOpen } =
    useContext(SearchBarContext) || {};
  const { isMobileNavOpen } = useContext(MobileNavContext) || {};

  const handleRemoveOverlay = () => {
    setIsSearchBarOpen?.(false);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <Overlay
        isOverlayVisible={isSearchBarOpen || isMobileNavOpen}
        onClick={handleRemoveOverlay}
      />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;

export const Overlay = styled.div.attrs({
  className: `z-40 fixed w-full h-full bg-neutral-900/50 backdrop-blur-sm`,
})<OverlayProps>`
  display: none;
  visible: hidden;
  opacity: 0;
  transition: all 0.3s ease;

  ${(props) =>
    props.isOverlayVisible &&
    css`
      display: block;
      visible: visible;
      opacity: 1;
    `};
`;
