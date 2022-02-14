import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";




// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar"
import {withStyles} from "@mui/styles";


import CustomCircularProgress from "../../shared/components/CustomCircularProgress";
import ImageUpload from "../../components/ImageUpload";
import QuizPopup from "../../components/QuizPopup";
import NotFound from "../../components/NotFound";

import { fetchSingleUser } from "../../store/singleUser";

import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import Image from "../assets/images/facebook1.png"


const breakpoints = {
  xl: 1920,
  lg:  1280,
  md: 960,
  sm:  600,
  xs: 0
}

const styles = theme => ({
  // backgroundImage: url(`${Image}`),
  "@keyframes spin": {
    from: { transform: "rotate(359deg)" },
    to: { transform: "rotate(0deg)" }
  },
  spin: { animation: "$spin 2s infinite linear" },
  listItemSecondaryAction: { paddingRight: theme.spacing(1) },
  appBar: {
    position: "relative",
    color: theme.palette.transparent.main

  },
  // tabs: {
  //     [`& .${tabsClasses.scrollButtons}`]: {
  //     '&.Mui-disabled': { opacity: 0.3 },
  //     },
  //     color: theme.pallete.secondary.dark
  //   }
})

import coverImage from "../assets/images/cover.png"


const Header = (props, { children}) => {
  const { classes } = props
  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleUserReducer)
  const intakeScore = useSelector(
    (state) => state.singleUserReducer.intakeScore
  );


  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();

      return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  // images
  const defaultImage = "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png"


  // user profile
  useEffect(() => {
    if (loading) {
      return (
      <div>
        <CustomCircularProgress />
      </div>
      )
    }

    // retrieve single user from thunk
    dispatch(fetchSingleUser());
    setLoading(false)

    if (!user) {
      const error = 500;
      const message = "OOPS! USER NOT FOUND";
        return (
          <div>
            <NotFound error={error} message={message} />
          </div>

        )
      }
  }, [intakeScore]);


  return (
    <div>
    <QuizPopup isOpen={user.intakeScore === null} />
    <Box position="relative" mb={5}>
      <Box
        sx={{
          backgroundImage: `url(${coverImage})`,
          backgroundColor: '#343A40',

          '&:hover': {
            backgroundColor: '#000',
            opacity: [0.9, 0.8, 0.7],
          },
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"

      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
      <Grid container spacing={3} alignItems="center">
          <Grid item>
              <div>
              <Avatar
              src={user.profilePic}
              alt={defaultImage}
              sx={{ width: 70, height: 70 }}
              shadow="md" />
              </div>
              <ImageUpload />
          </Grid>
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="button" color="text" fontWeight="bold">
                {user.jobTitle}
              </Typography>
              <Typography variant="h6" fontWeight="regular" >
                {user.industry}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
          </Grid>
        </Grid>
        {children}
      </Card>
    </Box>
  </div>
  );
}

Header.defaultProps = {
  children: "",
};

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired

};

export default withStyles(styles, { withTheme: true })(Header);
