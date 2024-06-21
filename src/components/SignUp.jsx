import React, { useState } from "react";
import axios from "axios";
import Hero from "./Hero";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users", {
        username,
        password,
        id: Date.now().toString(),
      });
      console.log("User created successfully", response.data);
    } catch (error) {
      console.error("Error signing up", error);
      setError("Error signing up");
    }
  };

  return (
    <div>
      <Hero text="Sign Up" />
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
