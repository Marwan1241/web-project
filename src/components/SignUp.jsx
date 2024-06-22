import React, { useState, useRef, useEffect } from "react";
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  const validateInput = (input) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    return regex.test(input);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const isUsernameTaken = async (username) => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;
      return users.some((user) => user.username === username);
    } catch (error) {
      console.error("Error checking username", error);
      return true;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (
      !validateInput(companyName) ||
      !validateInput(companyAddress) ||
      !validateInput(username)
    ) {
      setError("Text fields should not contain special characters.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter."
      );
      return;
    }

    if (!validatePhoneNumber(contactNumber)) {
      setError("Contact number must be a valid 10-digit number.");
      return;
    }

    if (await isUsernameTaken(username)) {
      setError("Username is already taken.");
      return;
    }

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
      navigate("/company-profile");
      console.log("Company profile created successfully", response.data);
    } catch (error) {
      console.error("Error signing up", error);
      setError("Error signing up");
    }
  };

  return (
    <>
      <div className="signup-container">
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            top: 0,
            bottom: 0,
            height: "120%",
            objectFit: "cover",
            zIndex: -1,
          }}
          ref={videoRef}
        >
          <source src="/assets/loginbg.mp4" type="video/mp4" />
        </video>
        <form onSubmit={handleSignUp} className="signup-form">
          <h2
            style={{
              fontFamily: "Formula Bold",
              fontSize: "2rem",
              filter: "drop-shadow(2px 4px 4px black)",
              color: "white",
            }}
          >
            Create A Company Profile
          </h2>
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
          <button className="btn btn-secondary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
