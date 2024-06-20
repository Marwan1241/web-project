import React from "react";
import { Typography, Button, TextField, Paper } from "@mui/material";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper style={{ padding: 20 }}>
        <Typography variant="h6" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Username" fullWidth />
          <TextField
            type="password"
            label="Password"
            fullWidth
            style={{ marginTop: 10 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
