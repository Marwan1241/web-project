// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Hero from "./Hero";
// import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// const JobApplicationForm = ({ positionName, requirements, description }) => {
//   return (
//     <div>
//       <Hero
//         text="Job Application Form - "
//         highlightText={positionName} // Set the position name as the highlight text
//       />

//       <Box sx={{ width: "70%", margin: "2% auto" }}>
//         <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
//           Job Requirements
//         </Typography>
//         <List>
//           {requirements.map((requirement, index) => (
//             <ListItem sx={{ padding: "6px 0" }} key={index}>
//               <ListItemText
//                 primary={`- ${requirement}`}
//                 sx={{
//                   background: "black",
//                   color: "white",
//                   padding: "10px 15px",
//                   borderRadius: "5px",
//                 }}
//               />
//             </ListItem>
//           ))}
//         </List>

//         <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
//           Job Description
//         </Typography>
//         <p
//           style={{
//             background: "black",
//             color: "white",
//             padding: "10px 15px",
//             borderRadius: "5px",
//           }}
//         >
//           - {description}
//         </p>
//       </Box>

//       <Formik
//         initialValues={{
//           fullName: "",
//           email: "",
//           phone: "",
//           resume: "",
//         }}
//         validationSchema={Yup.object({
//           fullName: Yup.string().required("Full Name is required"),
//           email: Yup.string()
//             .email("Invalid email address")
//             .required("Email is required"),
//           phone: Yup.string().required("Phone number is required"),
//           resume: Yup.mixed()
//             .required("Resume is required")
//             .test("fileSize", "File size is too large", (value) => {
//               return value && value.size <= 1024 * 1024 * 5; // 5MB max
//             })
//             .test("fileFormat", "Unsupported file format", (value) => {
//               return (
//                 value &&
//                 ["application/pdf", "image/jpeg", "image/png"].includes(
//                   value.type
//                 )
//               );
//             }),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className="careers-form form">
//             <h2>{positionName}</h2>
//             <div className="form-group">
//               <label htmlFor="fullName">Full Name</label>
//               <Field className="form-input" type="text" name="fullName" />
//               <ErrorMessage
//                 className="error-message"
//                 name="fullName"
//                 component="div"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <Field className="form-input" type="email" name="email" />
//               <ErrorMessage
//                 className="error-message"
//                 name="email"
//                 component="div"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <Field className="form-input" type="text" name="phone" />
//               <ErrorMessage
//                 className="error-message"
//                 name="phone"
//                 component="div"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="resume">Resume</label>
//               <Field
//                 className="form-input"
//                 type="file"
//                 name="resume"
//                 accept=".pdf,.jpg,.jpeg,.png"
//               />
//               <ErrorMessage
//                 className="error-message"
//                 name="resume"
//                 component="div"
//               />
//             </div>
//             <button
//               className="form-submit"
//               type="submit"
//               disabled={isSubmitting}
//             >
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default JobApplicationForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Hero from "./Hero";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// Custom Input Component for handling file inputs
const FileInput = ({ field, form, ...props }) => {
  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    form.setFieldValue(field.name, file); // Update Formik state with the file
  };

  return <input type="file" {...field} {...props} onChange={handleChange} />;
};

const JobApplicationForm = ({ positionName, requirements, description }) => {
  return (
    <div>
      <Hero text="Job Application Form - " highlightText={positionName} />

      <Box sx={{ width: "70%", margin: "2% auto" }}>
        <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
          Job Requirements
        </Typography>
        <List>
          {requirements.map((requirement, index) => (
            <ListItem sx={{ padding: "6px 0" }} key={index}>
              <ListItemText
                primary={`- ${requirement}`}
                sx={{
                  background: "black",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "5px",
                }}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h3" sx={{ fontFamily: "Formula Bold" }}>
          Job Description
        </Typography>
        <p
          style={{
            background: "black",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
          }}
        >
          - {description}
        </p>
      </Box>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          resume: null,
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Full Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phone: Yup.string().required("Phone number is required"),
          resume: Yup.mixed()
            .required("Resume is required")
            .test(
              "fileSize",
              "File size is too large",
              (value) => value && value.size <= 1024 * 1024 * 5
            ) // Max size 5MB
            .test(
              "fileFormat",
              "Unsupported file format",
              (value) =>
                value &&
                ["application/pdf", "image/jpeg", "image/png"].includes(
                  value.type
                )
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          formData.append("fullName", values.fullName);
          formData.append("email", values.email);
          formData.append("phone", values.phone);
          formData.append("resume", values.resume);

          fetch(
            "https://youngproductions-768ada043db3.herokuapp.com/api/jobApplications",
            {
              method: "POST",
              body: formData,
              // Headers are not set because the browser will set the `Content-Type`
              // to `multipart/form-data` and properly handle the boundary
            }
          )
            .then((response) => response.json())
            .then((data) => {
              alert("Application submitted successfully!");
              setSubmitting(false);
            })
            .catch((error) => {
              console.error("Error submitting application:", error);
              alert("An error occurred. Please try again.");
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="careers-form form">
            <h2>{positionName}</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <Field className="form-input" type="text" name="fullName" />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field className="form-input" type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field className="form-input" type="text" name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              <Field
                name="resume"
                accept=".pdf,.jpg,.jpeg,.png"
                component={FileInput}
              />
              <ErrorMessage
                name="resume"
                component="div"
                className="error-message"
              />
            </div>
            <button
              className="form-submit"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobApplicationForm;
