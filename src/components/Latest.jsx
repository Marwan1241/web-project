import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const LatestSection = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://youngproductions-768ada043db3.herokuapp.com/api/workVideos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLatestEvents(data.slice(-3)); // Extracting the last 3 entries
        setLoading(false);

        setError(null);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError(error.message);
        setLoading(false);
        // Retry logic
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, 1000); // Retry after 1 second
        }
      }
    };

    fetchData();
  }, [retryCount]); // Add retryCount to the dependency array

  // Conditionally render loading screen while data is being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Box sx={{ backgroundColor: "#F6F6F6", padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
          Latest Events
        </Typography>
        <Link
          to="/all-work"
          className="btn btn-secondry "
          style={{ textDecoration: "none" }}
        >
          All Work
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {latestEvents.map((event, index) => (
          <Card key={index} sx={{ maxWidth: "600px" }}>
            <CardMedia
              component="img"
              height="300"
              image={process.env.PUBLIC_URL + event.image}
              alt={event.title}
            />
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: "Formula Bold" }}>
                {event.title}
              </Typography>

              <Link
                to={`/event/${event.id}`}
                className="btn btn-secondry link-btn"
              >
                Discover
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default LatestSection;
