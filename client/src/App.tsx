import React from "react";
import "./styles/tailwind.css";
import ContextProvider from "src/contexts/Provider";
import PrivateRoutes from "src/routes/PrivateRoutes";

function App() {
  return (
    <ContextProvider>
      <PrivateRoutes />
    </ContextProvider>
  );
}

export default App;
