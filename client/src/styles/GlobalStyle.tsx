import { createGlobalStyle, css } from "styled-components";

type GlobalStyleProps = {
  isMobileNavOpen: boolean;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 html{
  overflow-x: hidden;
  ${(props) =>
    props.isMobileNavOpen &&
    css`
      position: fixed;
    `}
 }
 body{
   overflow-x: hidden;
 }
 
`;

export default GlobalStyle;
