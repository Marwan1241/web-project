import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function IftarForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://youngproductions-768ada043db3.herokuapp.com/api/submitForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Optionally, you can show a success message to the user
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can show an error message to the user
    }
  };

  const handleLocationCapture = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = "AIzaSyB5GDGXGS7IHSwJI95-Y1OMcEfmTsSuiNI";
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              const address = data.results[0].formatted_address;
              setFormData({ ...formData, location: address });
            } else {
              alert("Could not fetch the location. Please try again later.");
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            alert(
              "An error occurred while fetching the location. Please try again later."
            );
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          alert(
            "An error occurred while fetching the location. Please try again later."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  return (
    <div className="formContainer" style={{ marginTop: "15vh" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontFamily: "Formula Bold",
          color: "#c62828",
          margin: "30px 20px 0 20px",
        }}
      >
        Ramadan Kareem
      </h2>
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.6rem",
          fontFamily: "Formula Bold",
          color: "#c62828",
          margin: "0px 20px 0 20px",
        }}
      >
        Fill this form to to recieve your gift
      </h3>
      <form className="iftar-form form" onSubmit={handleSubmit}>
        <img src="/assets/iftar-form.webp" alt="Youngito Holding A Lantern" />
        <TextField
          className="formInput"
          label="First Name"
          variant="outlined"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          className="formInput"
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          className="formInput"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          className="formInput"
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          className="formInput"
          label="Address"
          variant="outlined"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <Box className="locationCapture">
          <TextField
            label="Location"
            variant="outlined"
            name="location"
            value={formData.location}
            onChange={handleChange}
            disabled
          />

          <Button
            variant="contained"
            color="error"
            onClick={handleLocationCapture}
          >
            Capture Exact Location
          </Button>
        </Box>
        <Button
          variant="contained"
          color="error"
          type="submit"
          className="iftar-submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default IftarForm;
