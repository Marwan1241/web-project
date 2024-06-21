// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        console.log("Login successful");
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in", error);
      setError("Error logging in");
    }
  };

  return (
    <div>
      <Hero text="Login" />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
