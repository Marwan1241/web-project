import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";

function Insights() {
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(3);

  const loadMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 3);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://youngproductions-768ada043db3.herokuapp.com/api/workVideos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
        // Handle error state or display a message to the user
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Hero
        text="Welcome to all things Young; whether it's fresh faces joining our team, creative projects in the press, or the latest updates from our work."
        bgColor="white"
        textColor="black"
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {videos.slice(0, visibleVideos).map((video, index) => (
          <Card
            key={index}
            style={{ maxWidth: 400, width: "100%", margin: "16px" }}
          >
            <Vimeo video={video.videoUrl} width="400" height="250" />
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Formula Bold",
                  margin: "15px 0",
                  fontSize: "2rem",
                }}
              >
                {video.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {video.description}
              </Typography>
              <Link
                to={`/event/${video.id}`}
                className="btn btn-secondry link-btn"
              >
                Discover
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        {visibleVideos < videos.length && (
          <button className="form-submit" onClick={loadMoreVideos}>
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default Insights;
