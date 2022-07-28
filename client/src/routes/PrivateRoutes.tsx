import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isLoggedIn: boolean | undefined;
};

const PrivateRoutes = (props: Props) => {
  const { isLoggedIn } = props;

  if (!isLoggedIn) {
    return <Navigate to="account/signin" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
