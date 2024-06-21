import React, { useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import Testimonials from "./Testimonials";

const teamPhoto = process.env.PUBLIC_URL + "/assets/Team-Photo-1.webp";
const teamPhotoResponsive = process.env.PUBLIC_URL + "/assets/Team-Photo-Mobile.webp";

const formStyle = {
  margin: "10px 0",
  width: "100%",
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#db4a41",
  },
  "& .MuiOutlinedInput-root:hover fieldset": {
    borderColor: "#db4a41",
  },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
    borderColor: "#db4a41",
  },
};

function Contact() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [meetingDateTime, setMeetingDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [hearing, setHearing] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const chipOptionsType = [
    "Commercial",
    "Post Production",
    "Podcast",
    "Documentary",
    "Short Film",
    "Photography",
    "Campaign",
    "Motion Design",
    "Website",
    "Logo Design",
    "Graphic Design",
    "Other",
  ];

  const chipOptionsBudget = [
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  const handleChipClick = (type, value) => {
    switch (type) {
      case "type":
        setSelectedType(value);
        break;
      case "budget":
        setSelectedBudget(value);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "firstName" || name === "lastName") {
      // Allow only letters for first name and last name
      newValue = value.replace(/[^a-zA-Z]/g, "");
    } else if (name === "phoneNumber") {
      // Allow only numbers for phone number
      newValue = value.replace(/[^0-9]/g, "");
    }

    switch (name) {
      case "firstName":
        setFirstName(newValue);
        break;
      case "lastName":
        setLastName(newValue);
        break;
      case "email":
        setEmail(newValue);
        setEmailError(!validateEmail(newValue));
        break;
      case "companyName":
        setCompanyName(newValue);
        break;
      case "phoneNumber":
        setPhoneNumber(newValue);
        break;
      case "description":
        setDescription(newValue);
        break;
      case "hearing":
        setHearing(newValue);
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    try {
      const response = await axios.post(
        "https://youngproductions-768ada043db3.herokuapp.com/api/contact",
        {
          selectedType,
          selectedBudget,
          selectedDate,
          meetingDateTime,
          description,
          hearing,
          firstName,
          lastName,
          email,
          companyName,
          phoneNumber,
        }
      );
      setSubmitted(true);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Hero
        imgSrc={teamPhoto}
        imgSrcResponsive={teamPhotoResponsive}
        heading="Let's work together"
        text="We’d love to hear about what you’re working on and how we can help."
      />

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>

        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
        />
        <TextField
          label="Company Name"
          name="companyName"
          value={companyName}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
        />
        <TextField
          label="Preferred Date"
          name="preferredDate"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          fullWidth
          sx={formStyle}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
          error={emailError}
          helperText={emailError ? "Please enter a valid email address" : ""}
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          value={description}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
        />
        <TextField
          label="How did you hear about us"
          name="hearing"
          value={hearing}
          onChange={handleInputChange}
          fullWidth
          sx={formStyle}
          select
        >
          <MenuItem value="Social Media">Social Media</MenuItem>
          <MenuItem value="Friend">From a friend</MenuItem>
          <MenuItem value="Event">Saw us in an event</MenuItem>
        </TextField>

        <Typography variant="h6" component="h2" gutterBottom>
          What type of project is this?
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {chipOptionsType.map((option, index) => (
            <Chip
              key={index}
              label={option}
              onClick={() => handleChipClick("type", option)}
              sx={{
                margin: "5px",
                backgroundColor:
                  selectedType === option ? "#db4a41" : "default",
                color: selectedType === option ? "#fff" : "default",
              }}
            />
          ))}
        </Box>

        <Typography variant="h6" component="h2" gutterBottom>
          What is your budget range?
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {chipOptionsBudget.map((option, index) => (
            <Chip
              key={index}
              label={option}
              onClick={() => handleChipClick("budget", option)}
              sx={{
                margin: "5px",
                backgroundColor:
                  selectedBudget === option ? "#db4a41" : "default",
                color: selectedBudget === option ? "#fff" : "default",
              }}
            />
          ))}
        </Box>

        <button className="form-submit" type="submit">
          Send
        </button>

        {submitted && (
          <Box
            sx={{
              backgroundColor: "rgb(0, 128, 0, 0.7)",
              color: "white",
              padding: "20px",
              textAlign: "center",
              width: "100px",
              margin: "20px auto",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="body1">Submitted</Typography>
          </Box>
        )}
      </Box>

      <Testimonials />
    </>
  );
}

export default Contact;
