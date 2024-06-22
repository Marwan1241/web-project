import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null); // Create a ref for the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Set the playback speed to half
    }
  }, []);

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
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/company-profile");
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
        ref={videoRef} // Attach the ref to the video element
      >
        <source src="/assets/loginbg.mp4" type="video/mp4" />
      </video>

      <div className="signup-container">
        <form onSubmit={handleLogin} className="signup-form">
          <h2
            style={{
              fontFamily: "Formula Bold",
              fontSize: "2rem",
              filter: "drop-shadow(2px 4px 4px black)",
              color: "white",
            }}
          >
            Login In to Your Company Profile
          </h2>
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
          <button className="btn btn-secondry" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
