import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "src/routes/PublicRoutes";
import PrivateRoutes from "src/routes/PrivateRoutes";
import HomePage from "src/pages/HomePage";
import CartPage from "src/pages/CartPage";
import SigninPage from "src/pages/SigninPage";
import AccountPage from "src/pages/AccountPage";
import SignupPage from "src/pages/SignupPage";
import ForgotPassword from "src/pages/ForgotPassword";
import ResetPassword from "src/pages/ResetPassword";
import ShopPage from "src/pages/ShopPage";

type Props = {
  isLoggedIn: boolean | undefined;
};
const AllRoutes = (props: Props) => {
  const { isLoggedIn } = props;

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/account/profile" element={<AccountPage />} />
        </Route>
        <Route element={<PublicRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/account/signin" element={<SigninPage />} />
          <Route path="/account/signup" element={<SignupPage />} />
          <Route path="/account/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/account/reset-password/:token"
            element={<ResetPassword />}
          />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop/:category" element={<ShopPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
