// SignUp.jsx
import React, { useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      companyName,
      companyAddress,
      contactNumber,
      email,
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        userData
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      console.log("Company profile created successfully", response.data);
    } catch (error) {
      console.error("Error signing up", error);
      setError("Error signing up");
    }
  };

  return (
    <>
      <Hero text="Sign Up" />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp} className="signup-form">
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Company Address:</label>
            <input
              type="text"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
