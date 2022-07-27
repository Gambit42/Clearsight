import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>You are signed in</div>} />
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
