import React from "react";

import { useFormik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
//yup lets us easily define custom validations for different fields
const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-filled:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 34px) scale(1);",
  },
  // "&:hover .MuiOutlinedInput-notchedOutline": {
  //   borderColor: "red",
  // },
  // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //   borderColor: "purple",
  // },
});

const UserForm = () => {
  //formik uses the same destructured assignment as the useState hook under the hood. We set the initial values, and we can also pass in a callback function.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      //here's where we will dispatch our new user
      console.log(JSON.stringify(values));
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
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            margin="normal"
            variant="filled"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

// //Data
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   biography: "",
//   occupation: "",
//   company: "",
//   city: "",
//   state: "",
//   industry: "",
//   educationOne: "",
//   educationTwo: "",
// };

// const options = [
//   { label: "Computer Programmer", value: "Computer_programmer" },
//   { label: "Web Developer", value: "web_developer" },
//   { label: "User Experience Designer", value: "user_experience_designer" },
//   { label: "Systems Analyst", value: "systems_analyst" },
//   { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
// ];

// const UserForm = () => {
//   const classes = useStyle();

//   const onSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Grid container justify="center" spacing={1}>
//       <Grid item md={6}>
//         <Card className={classes.padding}>
//           <CardHeader title="REGISTER FORM"></CardHeader>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//           >
//             {({ dirty, isValid, values, handleChange, handleBlur }) => {
//               return (
//                 <Form>
//                   <CardContent>
//                     <Grid item container spacing={1} justify="center">
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="First Name"
//                           variant="outlined"
//                           fullWidth
//                           name="firstName"
//                           value={values.firstName}
//                           component={TextField}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="Last Name"
//                           variant="outlined"
//                           fullWidth
//                           name="lastName"
//                           value={values.lastName}
//                           component={TextField}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="Email"
//                           variant="outlined"
//                           fullWidth
//                           name="email"
//                           value={values.email}
//                           component={TextField}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="Password"
//                           variant="outlined"
//                           fullWidth
//                           name="password"
//                           value={values.password}
//                           type="password"
//                           component={TextField}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="Biography"
//                           variant="outlined"
//                           fullWidth
//                           name="biography"
//                           value={values.biography}
//                           component={TextField}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={12}>
//                         <FormControl fullWidth variant="outlined">
//                           <InputLabel id="demo-simple-select-outlined-label">
//                             Occupation
//                           </InputLabel>
//                           <Select
//                             labelId="demo-simple-select-outlined-label"
//                             id="demo-simple-select-outlined"
//                             label="Occupation"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.occupation}
//                             name="occupation"
//                           >
//                             <MenuItem>None</MenuItem>
//                             {options.map((item) => (
//                               <MenuItem key={item.value} value={item.value}>
//                                 {item.label}
//                               </MenuItem>
//                             ))}
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="City"
//                           variant="outlined"
//                           fullWidth
//                           name="city"
//                           value={values.city}
//                           component={TextField}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={6}>
//                         <Field
//                           label="Country"
//                           variant="outlined"
//                           fullWidth
//                           name="country"
//                           value={values.country}
//                           component={TextField}
//                         />
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                   <CardActions>
//                     <Button
//                       disabled={!dirty || !isValid}
//                       variant="contained"
//                       color="primary"
//                       type="Submit"
//                       className={classes.button}
//                     >
//                       REGISTER
//                     </Button>
//                   </CardActions>
//                 </Form>
//               );
//             }}
//           </Formik>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

export default UserForm;
