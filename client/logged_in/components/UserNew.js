import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

// profile components
import Header from './Header'
import ProfileCard from './ProfileCard'
import BottomNav from './BottomNav'
import MentorProfile from "./MentorProfile"
import MenteeProfile from "./MenteeProfile"
import Settings from "./Settings";
import QuizPopup from "../../components/QuizPopup";

import { fetchSingleUser } from "../../store/singleUser";


// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function UserNew() {
  const dispatch = useDispatch();

  const {
    id,
    firstName,
    lastName,
    email,
    bio,
    employer,
    location,
    yearsInTech,
    school,
    jobTitle,
    industry,
    profilePic,
    areaOfStudy,
    endYear,
    intakeScore,
    isMentor,
    Mentees,
    Mentors
  } =  useSelector((state) => state.singleUserReducer)

   // user profile
   useEffect(() => {
    // retrieve single user from thunk
    dispatch(fetchSingleUser());

  }, []);


  return (
    <Box className="single-user-container" sx={{ backgroundColor: 'transparent', color: '#344767', p: 3, position: 'relative'}}>
    <QuizPopup isOpen={intakeScore === null} />
      <Box component="wrapper" display="grid" justifyContent="center" id="container-box-test" mb={2} >
        <Header
          firstName={firstName}
          lastName={lastName}
          intakeScore={intakeScore}
          industry={industry}
          profilePic={profilePic}
          jobTitle={jobTitle}

          />


            <Card id="profile-body-card" >
            <Divider>
            <Chip label="stack support" variant="outlined" color="secondary" size="small"  />
            </Divider>
            <Grid container spacing={1} >
            {/* <Grid item xs={12} md={6} xl={4}>
              {!!id && (
                <Settings />
              )}
              </Grid> */}
              <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex'}}>
                <Divider orientation="vertical" sx={{ ml: -1, mr: 1}} />
                <ProfileCard
                  title="profile information"
                  description={bio}
                  info={{
                  fullName: firstName + " " + lastName,
                  email: email,
                  currentEmployer: employer,
                  location: location,
                  techExperience: yearsInTech + " (years)",
                  education: school,
                  class: endYear,
                  discipline: areaOfStudy,
                  }}
                  action={{ route: "/users/edit", tooltip: "Edit Profile" }}
                  shadow={false} />
                <Divider orientation="horizontal" sx={{ ml: 2 }} />
                </Grid>
                <Divider orientation="horizontal" />
                <Grid item  xs={12} xl={4} sx={{ display: 'flex'}} >
                  {/* IF USER IS A MENTOR */}
                  {!!isMentor ? (
                    <MentorProfile title="your mentees" isMentor={isMentor} profiles={Mentees} intakeScore={intakeScore} shadow={false} id={id} />
                    ) : (
                      <MenteeProfile title="your mentor" isMentor={isMentor} profiles={Mentors} intakeScore={intakeScore} shadow={false} id={id} />
                    )}

                </Grid>
              </Grid>
            </Card>
            <Box pt={2} px={2} lineHeight={1.25}>
              {!!isMentor ? (
              <Typography variant="h6" fontWeight="medium" backgroundColor="transparent">
                Your Current Offerings
              </Typography>
              ) : (
                <Typography variant="h6" fontWeight="medium" backgroundColor="transparent">
                Your Mentor's Offerings
              </Typography>
              )}
              <Box mb={1}>
                <Typography variant="button" color="text">
                  Explore
                </Typography>
              </Box>
            </Box>
          </Box>
        {/* MENTOR OFFERINGS HERE: PLACEHOLDER */}
      <BottomNav />
    </Box>
    );
  }

  export default UserNew;
