import React from "react";
import Button from "src/components/Button";
import * as S from "./styles";

const BottomBanner = () => {
  return (
    <S.StyledBanner backgroundImage="./banner_shipping.jpg">
      <div className="text-center relative z-30 w-full h-full flex flex-col justify-center items-center font-montserrat">
        <h1 className="text-white px-2 pb-3 text-lg sm:text-2xl font-bold sm:w-4/5">
          Free shipping nationwide for purchases above P899
        </h1>
        <Button variant="primary">Shop Now</Button>
      </div>
    </S.StyledBanner>
  );
};

export default BottomBanner;
