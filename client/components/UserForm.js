import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/singleUser";
import { useHistory } from "react-router-dom";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

//yup lets us easily define custom validations for different fields
const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
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
    .number()
    .required(
      "Please enter the year you finished, expect to finish, or the current year for self-taught"
    ),
});

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-filled:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 34px) scale(1);",
    padding: "5px",
  },
});

const styles = (theme) => ({});

const UserForm = ({ classes }) => {
  //formik uses the same destructured assignment as the useState hook under the hood. We set the initial values, and we can also pass in a callback function.
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleUserReducer);

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      bio: user.bio || "",
      employer: user.employer || "",
      jobTitle: user.jobTitle || "",
      location: user.location || "",
      industry: user.industry || "",
      yearsInTech: user.yearsInTech || 0,
      school: user.school || "",
      areaOfStudy: user.areaOfStudy || "",
      endYear: user.endYear || 2022,
    },
    onSubmit: (values) => {
      //here's where we will dispatch our new user
      dispatch(updateUser(values, history));
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <div className="UserForm">
        {/* we can access the onSubmit function from the object we created above */}

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item s={6} md={3} lg={2}>
              <StyledTextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name*"
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
            </Grid>
            <Grid item s={6} md={3} lg={2}>
              <StyledTextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name*"
                value={formik.values.lastName}
                margin="normal"
                variant="filled"
                //this onChange method comes for free with useFormik
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item s={12} md={6} lg={4}>
              <StyledTextField
                fullWidth
                id="bio"
                name="bio"
                label="Bio*"
                // margin="normal"
                multiline
                variant="filled"
                value={formik.values.bio}
                rows={4}
                onChange={formik.handleChange}
                error={formik.touched.bio && Boolean(formik.errors.bio)}
                helperText={formik.touched.bio && formik.errors.bio}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="employer"
                name="employer"
                label="Current Employer"
                value={formik.values.employer}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={
                  formik.touched.employer && Boolean(formik.errors.employer)
                }
                helperText={formik.touched.employer && formik.errors.employer}
              />
            </Grid>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="jobTitle"
                name="jobTitle"
                label="Current Job Title"
                value={formik.values.jobTitle}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={
                  formik.touched.jobTitle && Boolean(formik.errors.jobTitle)
                }
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
              />
            </Grid>

            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="industry"
                name="industry"
                label="Industry"
                value={formik.values.industry}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={
                  formik.touched.industry && Boolean(formik.errors.industry)
                }
                helperText={formik.touched.industry && formik.errors.industry}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="school"
                name="school"
                label="School*"
                value={formik.values.school}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={formik.touched.school && Boolean(formik.errors.school)}
                helperText={formik.touched.school && formik.errors.school}
              />
            </Grid>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="areaOfStudy"
                name="areaOfStudy"
                label="Area of Study*"
                value={formik.values.areaOfStudy}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={
                  formik.touched.areaOfStudy &&
                  Boolean(formik.errors.areaOfStudy)
                }
                helperText={
                  formik.touched.areaOfStudy && formik.errors.areaOfStudy
                }
              />
            </Grid>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="endYear"
                name="endYear"
                label="Year of completion*"
                type="number"
                InputProps={{ inputProps: { min: 1950 } }}
                value={formik.values.endYear}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={formik.touched.endYear && Boolean(formik.errors.endYear)}
                helperText={formik.touched.endYear && formik.errors.endYear}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="location"
                name="location"
                label="Zip Code*"
                value={formik.values.location}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>
            <Grid item s={4} md={2} lg={1}>
              <StyledTextField
                fullWidth
                id="yearsInTech"
                name="yearsInTech"
                label="Years in Tech*"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                value={formik.values.yearsInTech}
                margin="normal"
                variant="filled"
                onChange={formik.handleChange}
                error={
                  formik.touched.yearsInTech &&
                  Boolean(formik.errors.yearsInTech)
                }
                helperText={
                  formik.touched.yearsInTech && formik.errors.yearsInTech
                }
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="outlined"
            style={{ width: "33%", marginLeft: "25px" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserForm);
