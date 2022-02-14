import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


import { fetchSingleUser } from "../../store/singleUser";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

function ProfileCard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleUserReducer)

  // user profile
  useEffect(() => {
    // retrieve single user from thunk
    dispatch(fetchSingleUser());

  }, []);



  return (
  <Card sx={{ height: "100%", boxShadow: "none" }}>
  <Box sx={{ flexGrow: 1, overflow: 'hidden' , px: 3}} >
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
    <Grid container spacing={0} alignItems="center">
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        bio :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.bio}
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        email :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.email}
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        location :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.location}
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        years in tech :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.yearsInTech}
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        school :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.school}
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        graduation :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.endYear}
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        area of study :
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        {user.areaOfStudy}
      </Typography>
      </Grid>
    </Grid>
  </Paper>
  </Box>
  <Box opacity={0.3}>
    <Divider orientation="vertical" sx={{ mx: 0 }} />
  </Box>
  {/* <Box sx={{ flexGrow: 1, maxWidth: 752}}>
    <Grid container spacing={2}>
    {user.isMentor ? (
      <Demo>
      <Divider orientation="vertical" />
    <MentorProfile />
    </Demo>

    ): (
      <Demo>
      <Divider orientation="vertical" />
      <MenteeProfile  />
    </Demo>
    )}
    </Grid>
    </Box> */}
  </Card>
  );
}

export default ProfileCard;
