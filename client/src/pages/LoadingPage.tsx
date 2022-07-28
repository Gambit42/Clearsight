import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <SyncLoader color="#dc2626" size={15} />
    </div>
  );
};

export default LoadingPage;
