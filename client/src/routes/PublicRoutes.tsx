import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import CartPage from "src/pages/CartPage";
import SigninPage from "src/pages/SigninPage";
import SignupPage from "src/pages/SignupPage";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account/signin" element={<SigninPage />} />
        <Route path="/account/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
