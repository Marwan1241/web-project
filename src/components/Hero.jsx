import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Hero = ({ text, subtext, highlightText, bgColor, textColor }) => {
  return (
    <Box className="hero-container" sx={{ background: bgColor }}>
      <Typography
        variant="h2"
        sx={{ fontFamily: "Formula Bold", color: textColor }}
        className="hero-text"
      >
        {text}
        <span style={{ color: "#DB4A41" }}>{highlightText}</span>
      </Typography>
      {subtext && (
        <Typography
          variant="body1"
          sx={{ fontFamily: "Formula Bold", color: textColor }}
        >
          {subtext}
        </Typography>
      )}
    </Box>
  );
};

export default Hero;
