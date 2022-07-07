import React from "react";
import "./styles/tailwind.css";
import UserLayout from "./layouts/UserLayout";
import ContextProvider from "src/contexts/Provider";

function App() {
  return (
    <ContextProvider>
      <UserLayout>
        <></>
      </UserLayout>
    </ContextProvider>
  );
}

export default App;
