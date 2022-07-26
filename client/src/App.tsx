import React from "react";
import "./styles/tailwind.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "src/contexts/Provider";
import PublicRoutes from "src/routes/PublicRoutes";
import PrivateRoutes from "src/routes/PrivateRoutes";

function App() {
  return (
    <ContextProvider>
      <PublicRoutes />
      <ToastContainer />
    </ContextProvider>
  );
}

export default App;
