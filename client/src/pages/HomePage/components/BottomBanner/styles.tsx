import styled from "styled-components";

// export const BannerContainer = styled.div.attrs({
//   className:
//     "relative flex items-center justify-center font-montserrat lg:max-w-6xl mx-auto lg:w-4/5 lg:h-[400px] rounded-sm bg-transparent",
// })``;

type BannerProps = {
  backgroundImage: string;
};

export const StyledBanner = styled.div<BannerProps>`
  background-color: #f3f3f3;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 30vh;
  max-width: 1152px;
  max-height: 200px;
  position: relative;
  margin: 100px auto;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #171717;
    opacity: 0.5;
    z-index: 20;

    @media (min-width: 1024px) {
      border-radius: 10px;
    }
  }

  @media (min-width: 1024px) {
    width: 80%;
    border-radius: 10px;
    height: 300px;
  }
`;
