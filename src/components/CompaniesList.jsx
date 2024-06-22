import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Hero from "./Hero";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies", error);
      }
    };

    fetchCompanies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setCompanies(companies.filter((company) => company.id !== id));
    } catch (error) {
      console.error("Error deleting company", error);
    }
  };

  return (
    <Box>
      <Hero
        text="Welcome to the Companies List"
        subtext="Browse and manage all company profiles"
      />
      <Box
        sx={{
          padding: 4,
          margin: "60px 60px",
          backgroundColor: "#f9f9f9",
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontFamily: "Formula Bold", color: "#db4a41", marginTop: 4 }}
        >
          Companies List
        </Typography>
        <Grid container spacing={4}>
          {companies.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {company.companyName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Address: {company.companyAddress}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Contact: {company.contactNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {company.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={() => handleDelete(company.id)}
                  >
                    <DeleteIcon sx={{ color: "#db4a41" }} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CompaniesList;
