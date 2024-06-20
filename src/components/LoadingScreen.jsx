import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <img
        src="/assets/young-logo-white.webp"
        alt="young-logo"
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingScreen;
