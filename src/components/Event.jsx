import React, { useState } from "react";
import { Typography, Box, CardMedia } from "@mui/material";
// import Vimeo from "@u-wave/react-vimeo";

const Event = ({
  location,
  date,
  title,
  videoUrl,
  description,
  headquarters,
  facebook,
  instagram,
  tiktok,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Box
        className="event-page"
        sx={{ padding: "20px", paddingBottom: "60px" }}
      >
        <Box sx={{ margin: "20px 5px", marginTop: "100px" }}>
          <Typography
            variant="h5"
            sx={{ color: "#777777" }}
            className="event-location"
          >
            {location}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#777777" }}
            className="event-date"
          >
            {date}
          </Typography>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Formula Bold",
            margin: "40px 0 40px 0",
            color: "white",
          }}
          className="event-title"
        >
          {title}
        </Typography>

        <CardMedia
          component="iframe"
          allowFullScreen
          controls
          autoPlay
          loop
          muted
          height="300"
          src={videoUrl}
          title={title}
          sx={{
            borderRadius: "10px",
            border: "none",
          }}
        />

        <Box className="event-info-container">
          <Box className="event-desc-container">
            <Typography sx={{ color: "white" }} variant="body1">
              {showFullDescription
                ? description
                : `${description.slice(0, 160)}...`}
            </Typography>
            {!showFullDescription && (
              <button className="btn-read-more" onClick={toggleDescription}>
                Read More...
              </button>
            )}

            <button className="btn btn-primary link-btn">Share</button>
          </Box>

          <Box className="event-sharing-container">
            <Typography
              variant="h5"
              sx={{ fontFamily: "Formula Bold", color: "white" }}
            >
              {title}
            </Typography>

            <Typography variant="body1" sx={{ color: "white" }}>
              Headquarters for {title}
            </Typography>

            <Typography sx={{ color: "#777777" }}>{headquarters}</Typography>

            <Box className="event-social-media">
              <a
                href={instagram}
                target="_blank"
                className="btn btn-primary link-btn"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                href={tiktok}
                target="_blank"
                className="btn btn-primary link-btn"
                rel="noreferrer"
              >
                TIKTOK
              </a>
              <a
                href={facebook}
                target="_blank"
                className="btn btn-primary link-btn"
                rel="noreferrer"
              >
                FACEBOOK
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Event;
