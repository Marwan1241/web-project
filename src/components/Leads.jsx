import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Leads = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontFamily: "Formula Bold", marginBottom: "20px" }}
      >
        Join Our Creative Community
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", textAlign: "center" }}
      >
        Subscribe to the Young newsletter to receive studio updates, new work
        and to our latest thoughts.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: "black",
            },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "black",
            },
          }}
        />
        <button
          className="btn btn-secondry btn-hover-alt"
          variant="contained"
          color="primary"
        >
          Subscribe
        </button>
      </Box>
    </Box>
  );
};

export default Leads;
