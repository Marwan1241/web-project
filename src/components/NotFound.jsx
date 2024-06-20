import React from "react";
import Hero from "./Hero";

const NotFound = () => {
  return (
    <>
      <Hero
        text="OOPS! 404 - PAGE NOT FOUND "
        highlightText="Looks like we couldn't find the page you're looking for."
        bgColor="white"
        textColor="black"
      />
    </>
  );
};

export default NotFound;
