import React, { useState } from "react";
import Hero from "./Hero";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const validationSchema = yup.object({
  companyName: yup.string().required("Company name is required"),
  companyLogo: yup.mixed().required("Company logo is required"),
  companyEmail: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
  contactNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Enter a valid contact number")
    .required("Contact number is required"),
});

const Input = styled("input")({
  display: "none",
});

function SignUp() {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      companyLogo: null,
      companyEmail: "",
      companyAddress: "",
      username: "",
      password: "",
      contactNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Hero text="Sign Up" subtext="Sign up to create an account with us" />
      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="companyName"
                name="companyName"
                label="Company Name"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="companyLogo">
                <Input
                  accept="image/*"
                  id="companyLogo"
                  name="companyLogo"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "companyLogo",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
                {formik.errors.companyLogo && formik.touched.companyLogo ? (
                  <Typography color="error">
                    {formik.errors.companyLogo}
                  </Typography>
                ) : null}
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="companyEmail"
                name="companyEmail"
                label="Company Email"
                value={formik.values.companyEmail}
                onChange={formik.handleChange}
                error={
                  formik.touched.companyEmail &&
                  Boolean(formik.errors.companyEmail)
                }
                helperText={
                  formik.touched.companyEmail && formik.errors.companyEmail
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="companyAddress"
                name="companyAddress"
                label="Company Address (Optional)"
                value={formik.values.companyAddress}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="contactNumber"
                name="contactNumber"
                label="Contact Number"
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactNumber &&
                  Boolean(formik.errors.contactNumber)
                }
                helperText={
                  formik.touched.contactNumber && formik.errors.contactNumber
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default SignUp;
