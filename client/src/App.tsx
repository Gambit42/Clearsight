import "./styles/tailwind.css";
import useAuth from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import AllRoutes from "src/routes/AllRoutes";
import LoadingPage from "src/pages/LoadingPage";

function App() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <AllRoutes isLoggedIn={isLoggedIn} />
      <ToastContainer />
    </>
  );
}

export default App;
