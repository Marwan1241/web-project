import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import LoadingScreen from "./LoadingScreen";

const Clients = () => {
  const [clients, setClients] = useState([]);

  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://youngproductions-768ada043db3.herokuapp.com/api/clients"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setClients(data);
        setLoading(false);

        setError(null);
      } catch (error) {
        console.error("Error fetching clients:", error);
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
  }, [retryCount]);

  useEffect(() => {
    // Apply overflow: hidden to the body when loading
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  // Conditionally render loading screen while data is being fetched
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <Box
      className="client-section"
      sx={{
        backgroundColor: "black",
        padding: "50px",
        textAlign: "left",
      }}
    >
      <Box className="client-section-text" sx={{ width: "70%" }}>
        <Typography variant="body2" color="lightgray">
          Our clients... we call them friends now.
        </Typography>

        <Typography
          variant="h3"
          sx={{ fontFamily: "Formula Bold", color: "white", margin: "15px 0" }}
          className="client-title"
        >
          Some are ambitious startups, others are already part of the
          establishment.{" "}
          <span style={{ color: "#DB4A41" }}>
            All of them are going places.
          </span>
        </Typography>

        <button className="btn btn-primary">work with us</button>
      </Box>

      <Box className="client-list">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <img src={client.logoUrl} alt={client.name} />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
