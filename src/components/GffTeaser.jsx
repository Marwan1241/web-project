import React from "react";
import { Typography, Box } from "@mui/material";

function GffTeaser() {
  return (
    <Box className="gff-teaser-container">
      <Typography variant="h2" component="h2" className="gff-teaser-text">
        COMING SOON
      </Typography>
    </Box>
  );
}

export default GffTeaser;

// import React, { useEffect } from "react";
// import { Box } from "@mui/material";

// function GffTeaser() {
//   useEffect(() => {
//     const videoContainer = document.getElementById(
//       "gff-teaser-video-container"
//     );
//     const iframe = document.getElementById("gff-teaser-video");

//     const playVideo = () => {
//       if (!iframe.src.includes("?autoplay=1")) {
//         iframe.src += "?autoplay=1";
//       }
//     };

//     const handleClick = () => {
//       playVideo();
//     };

//     videoContainer.addEventListener("click", handleClick);

//     return () => {
//       videoContainer.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <Box id="gff-teaser-video-container" className="gff-teaser-video-container">
//       <iframe
//         src="https://www.youtube.com/embed/EPMELYSItds?si=Jd5yS_9ADYKlf0gU?autoplay=0"
//         title="YouTube video player"
//         width="100%"
//         height="100%"
//         allow="autoplay"
//         frameBorder="0"
//         allowFullScreen
//         id="gff-teaser-video"
//       ></iframe>
//     </Box>
//   );
// }

// export default GffTeaser;
