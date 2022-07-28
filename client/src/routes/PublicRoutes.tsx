import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isLoggedIn: boolean | undefined;
};

const PublicRoutes = (props: Props) => {
  const { isLoggedIn } = props;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
