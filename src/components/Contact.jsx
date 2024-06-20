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
const teamPhotoResponsive =
  process.env.PUBLIC_URL + "/assets/Team-Photo-Mobile.webp";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
  const handleChipClick = (type, value) => {
    switch (type) {
      case "type":
        setSelectedType(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://youngproductions-768ada043db3.herokuapp.com/api/contactForm",
        {
          ...formData,
          selectedType,
          selectedBudget,
          selectedDate,
          meetingDateTime,
          description,
          hearing,
        }
      );
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
      });
      setSelectedType("");
      setSelectedBudget("");
      setSelectedDate("");
      setMeetingDateTime("");
      setDescription("");
      setHearing("");

      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Hero
        text="So you want to know more?"
        highlightText=" Sweet. Same here!"
        bgColor="white"
        textColor="black"
      />

      <Box className="team-photo" sx={{ padding: "0 50px" }}>
        <img src={teamPhoto} alt="team" className="desktop-teamPhoto" />
        <img
          src={teamPhotoResponsive}
          alt="team"
          style={{ width: "100%" }}
          className="mobile-teamPhoto"
        />
      </Box>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Formula Bold" }}
        className="contact-form-header"
      >
        Tell us everything about your project and we’ll get back to you once the
        bell rings. 🔔
      </Typography>

      <Box className="contact-form">
        <form onSubmit={handleSubmit}>
          <div>
            <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
              Brief us of what you need
            </Typography>
            {chipOptionsType.map((option) => (
              <Chip
                key={option}
                label={option}
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                onClick={() => handleChipClick("type", option)}
                onTouchStart={() => handleChipClick("type", option)}
                color={selectedType === option ? "primary" : "default"}
                sx={{
                  margin: "5px",
                  backgroundColor:
                    selectedType === option ? "#db4a41 !important" : null,
                  color: selectedType === option ? "white" : null,
                }}
              />
            ))}
          </div>

          <div>
            <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
              Project Budget (EGP)
            </Typography>
            <TextField
              label="Enter budget (EGP)"
              variant="outlined"
              fullWidth
              type="number"
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              sx={formStyle}
            />
          </div>

          <div>
            <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
              Project Delivery Date
            </Typography>
            <TextField
              label="Select Delivery Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              sx={formStyle}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </div>

          <div>
            <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
              Book a Meeting
            </Typography>
            <TextField
              label="Select date and time for meeting"
              type="datetime-local"
              fullWidth
              value={meetingDateTime}
              onChange={(e) => setMeetingDateTime(e.target.value)}
              sx={formStyle}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div>
            <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
              More About You...
            </Typography>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              sx={formStyle}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              sx={formStyle}
            />
            <TextField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              fullWidth
              sx={formStyle}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              sx={formStyle}
            />
            {/* Additional fields */}
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={formStyle}
            />
            <TextField
              label="Description"
              name="description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              sx={formStyle}
            />
            <TextField
              label="How did you hear about us"
              name="hearing"
              value={hearing}
              onChange={(e) => setHearing(e.target.value)}
              fullWidth
              sx={formStyle}
              select
            >
              <MenuItem value="Social Media">Social Media</MenuItem>
              <MenuItem value="Friend">From a friend</MenuItem>
              <MenuItem value="Event">Saw us in an event</MenuItem>
            </TextField>
            {/* End additional fields */}
          </div>

          <button className="form-submit" type="submit">
            Send
          </button>
        </form>

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
