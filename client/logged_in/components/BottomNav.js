import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import classNames from "classnames";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {withStyles} from '@mui/styles'
import { Link } from 'react-router-dom';


import { fetchSingleUser } from "../../store/singleUser";

const styles = (theme) => ({
  paper: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.light

  },
  bottomNav: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.light

  },
  root: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText

  }


})

function BottomNav(props) {
  const { classes, theme } = props
  const dispatch = useDispatch();
  const pathname = useLocation()
  const [value, setValue] = React.useState(pathname);
  const {isMentor, intakeScore } = useSelector((state) => state.singleUserReducer)

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, [isMentor,intakeScore])


  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        className={classes.root}
        showLabels={true}
        value ={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        >

        <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/users/Edit" label="Edit Profile" icon={<EditIcon />} />
        {!isMentor && (
         <BottomNavigationAction component={Link} to={`/users/mentors/${intakeScore}`} label="Mentor Options" icon={<QuizIcon />} />
        )}
        {!!isMentor && (
          <BottomNavigationAction component={Link} to={'/features/comingsoon'} label="Manage Offerings" icon={<LocalOfferIcon />} />
        )}

      </BottomNavigation>
    </Box>
  );
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })((BottomNav));
