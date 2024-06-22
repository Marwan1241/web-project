import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import Hero from "./Hero";

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);
  const [editing, setEditing] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompany = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setCompany(user);
        setCompanyName(user.companyName);
        setCompanyAddress(user.companyAddress);
        setContactNumber(user.contactNumber);
        setEmail(user.email);
      }
    };

    fetchCompany();
  }, []);

  const validateInput = (input) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    return regex.test(input);
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleEditToggle = () => {
    setEditing(!editing);
    setError("");
  };

  const handleSave = async () => {
    if (!validateInput(companyName) || !validateInput(companyAddress)) {
      setError("Text fields should not contain special characters.");
      return;
    }

    if (!validatePhoneNumber(contactNumber)) {
      setError("Contact number must be a valid 10-digit number.");
      return;
    }

    const updatedCompany = {
      ...company,
      companyName,
      companyAddress,
      contactNumber,
      email,
    };

    try {
      await axios.put(
        `http://localhost:5000/users/${company.id}`,
        updatedCompany
      );
      setCompany(updatedCompany);
      localStorage.setItem("user", JSON.stringify(updatedCompany));
      setEditing(false);
    } catch (error) {
      console.error("Error updating company profile", error);
      setError("Error updating company profile");
    }
  };

  if (!company) return <div>Loading...</div>;

  return (
    <Box>
      <Hero
        text="Welcome - "
        highlightText={companyName}
        subtext="Here; you are in control, you can edit your company profile as much as you need "
      />
      <Paper elevation={3} sx={{ padding: 4, margin: "60px 60px" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontFamily: "Formula Bold", color: "#db4a41" }}
        >
          Your Company Profile
        </Typography>
        {editing ? (
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Company Address"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              fullWidth
            />
            <TextField
              label="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            {error && <Typography color="error">{error}</Typography>}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <button className="btn btn-secondry" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondry" onClick={handleEditToggle}>
                Cancel
              </button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography variant="body1">
              <strong>Company Name:</strong> {company.companyName}
            </Typography>
            <Typography variant="body1">
              <strong>Company Address:</strong> {company.companyAddress}
            </Typography>
            <Typography variant="body1">
              <strong>Contact Number:</strong> {company.contactNumber}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {company.email}
            </Typography>
            <button
              className="btn btn-secondry"
              onClick={handleEditToggle}
              style={{ marginTop: "20px" }}
            >
              Edit
            </button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CompanyProfile;
