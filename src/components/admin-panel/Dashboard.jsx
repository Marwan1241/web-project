import React from "react";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ color: "white" }} gutterBottom>
        Dashboard
      </Typography>
      <Typography sx={{ color: "white" }} variant="body1">
        Welcome to the dashboard!
      </Typography>
    </div>
  );
};

export default Dashboard;
