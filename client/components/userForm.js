import React from "react";
import { useFormik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/users";
import { useHistory } from "react-router-dom";

//yup lets us easily define custom validations for different fields
const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  // email: yup
  //   .string()
  //   .email("Enter a valid email")
  //   .required("Email is required"),
  // password: yup.string().required("Password is required"),
  bio: yup.string().required("Tell us about yourself!"),
  location: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  yearsInTech: yup
    .number("please enter a number")
    .required("Please enter 0 or more years"),
  school: yup
    .string()
    .required("Please enter your most relevent school or specify self-taught"),
  areaOfStudy: yup.string().required("Please enter an area of study"),
  endYear: yup
    .string()
    .required(
      "Please enter the year you finished or the current year for self-taught"
    ),
});

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-filled:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 34px) scale(1);",
  },
});

const UserForm = () => {
  //formik uses the same destructured assignment as the useState hook under the hood. We set the initial values, and we can also pass in a callback function.
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      // email: "",
      // password: "",
      bio: "",
      employer: "",
      jobTitle: "",
      location: "",
      industry: "",
      yearsInTech: 0,
      school: "",
      areaOfStudy: "",
      endYear: "",
    },
    onSubmit: (values) => {
      //here's where we will dispatch our new user
      dispatch(updateUser(JSON.stringify(values), history));
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="UserForm">
      {/* we can access the onSubmit function from the object we created above */}

      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <div>
            <StyledTextField
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              margin="normal"
              variant="filled"
              onChange={formik.handleChange}
              //touched value makes sure the user has actually started working with the form. This checks whether there are errors
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              //this line actually shows the error string
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <StyledTextField
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              margin="normal"
              variant="filled"
              //this onChange method comes for free with useFormik
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
          <StyledTextField
            id="bio"
            name="bio"
            label="Bio"
            value={formik.values.bio}
            margin="normal"
            variant="filled"
            multiline
            maxRows={4}
            onChange={formik.handleChange}
            error={formik.touched.bio && Boolean(formik.errors.bio)}
            helperText={formik.touched.bio && formik.errors.bio}
          />

          <StyledTextField
            id="employer"
            name="employer"
            label="Current Employer"
            value={formik.values.employer}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.employer && Boolean(formik.errors.employer)}
            helperText={formik.touched.employer && formik.errors.employer}
          />
          <StyledTextField
            id="jobTitle"
            name="jobTitle"
            label="Current Job Title"
            value={formik.values.jobTitle}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
            helperText={formik.touched.jobTitle && formik.errors.jobTitle}
          />
          <StyledTextField
            id="location"
            name="location"
            label="Zip Code"
            value={formik.values.location}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
          <StyledTextField
            id="industry"
            name="industry"
            label="Industry"
            value={formik.values.industry}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.industry && Boolean(formik.errors.industry)}
            helperText={formik.touched.industry && formik.errors.industry}
          />
          <StyledTextField
            id="yearsInTech"
            name="yearsInTech"
            label="Years in Tech"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={formik.values.yearsInTech}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={
              formik.touched.yearsInTech && Boolean(formik.errors.yearsInTech)
            }
            helperText={formik.touched.yearsInTech && formik.errors.yearsInTech}
          />
          <StyledTextField
            id="school"
            name="school"
            label="School (most recent or relevant)"
            value={formik.values.school}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.school && Boolean(formik.errors.school)}
            helperText={formik.touched.school && formik.errors.school}
          />
          <StyledTextField
            id="areaOfStudy"
            name="areaOfStudy"
            label="Area of Study"
            value={formik.values.areaOfStudy}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={
              formik.touched.areaOfStudy && Boolean(formik.errors.areaOfStudy)
            }
            helperText={formik.touched.areaOfStudy && formik.errors.areaOfStudy}
          />
          <StyledTextField
            id="endYear"
            name="endYear"
            label="Year of completion"
            value={formik.values.endYear}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.endYear && Boolean(formik.errors.endYear)}
            helperText={formik.touched.endYear && formik.errors.endYear}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default UserForm;
