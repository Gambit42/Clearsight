import React from "react";
import styled, { css } from "styled-components";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="w-full max-w-6xl mx-auto px-4 py-10 flex flex-col font-montserrat lg:flex-row items-center lg:justify-between lg:w-4/5 lg:items-start">
        <div className="pb-4 w-4/5 md:w-3/5 lg:w-2/5 text-center lg:text-left">
          <h1 className="text-2xl text-white font-semibold">DH BOOKSTORE</h1>
          <p className="text-sm text-gray-200 pt-2 font-medium">
            DH Bookstore short for "Dragon's Hoard Bookstore" is an ecommerce
            mockup website made solely for educational purposes. I don't earn
            anything from this website.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row text-center lg:text-left">
          <div className="pb-4">
            <h1 className="text-lg text-white font-semibold">Shop</h1>
            <div className="pt-2 text-gray-200 text-sm font-medium">
              <h1>Popular</h1>
              <h1 className="py-1">Fantasy</h1>
              <h1>SciFi</h1>
            </div>
          </div>
          <div className="lg:px-16 text-center">
            <h1 className="text-lg text-white font-semibold">
              Connect with us
            </h1>
            <div className="flex flex-row pt-2 text-gray-50 text-sm font-medium justify-center lg:justify-start">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

export const iconStyles = css`
  width: 24px;
  height: 24px;
  margin: 0 10px 10px 0;
`;

export const StyledFooter = styled.div.attrs({ className: "bg-neutral-700" })`
  width: 100vw;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  ${iconStyles}
`;

export const InstagramIcon = styled(FaInstagram)`
  ${iconStyles}
`;

export const TwitterIcon = styled(FaTwitter)`
  ${iconStyles}
`;
