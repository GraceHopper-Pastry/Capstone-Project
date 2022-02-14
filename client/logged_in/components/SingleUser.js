import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import Header from './Header'
import ProfileCard from './ProfileCard'
import BottomNav from './BottomNav'


import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";



function SingleUser() {

  return (
    <Box mb={2}>
      <Header/>
        <Box mt={5} mb={3}>
          <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex'}}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1}} />
            <ProfileCard />
          </Grid>
          </Box>
        <BottomNav />
      </Box>
    );
  }

  export default SingleUser;
