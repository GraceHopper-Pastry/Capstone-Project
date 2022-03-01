import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EditIcon from '@mui/icons-material/Edit';


import { fetchSingleUser } from "../../store/singleUser";

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.default,
// }));

function ProfileCard(props) {
  const { title, description, info, action, shadow } = props;
  const keyLabels = [];
  const values = [];

  // Convert key names from camelCase to Proper Case
  Object.keys(info).forEach((key) => {
    if (key.match(/[A-Z\s]+/)) {
      const letterUpperCase = Array.from(key).find((idx) => idx.match(/[A-Z]+/));
      const newKey = key.replace(letterUpperCase, ` ${letterUpperCase.toLowerCase()}`);

      keyLabels.push(newKey);
    } else {
      keyLabels.push(key);
    }
  })

  // Push key's value into the values array
  Object.values(info).forEach((val) => values.push(val));

  // Rendering each user's profile info for card
  const profileInfo = keyLabels.map((label, key) => (
    <Box key={label} display="flex" py={1} pr={2}>
      <Typography variant="button" fontWeight="bold">
        {label}: &nbsp;
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </Typography>
    </Box>
  ))


  return (
  <Card sx={{ height: '100%', boxShadow: !shadow && "none", }}>
    <Box display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
      <Typography className="profile-header-text" variant="h6" fontWeight="medium" textTransform="capitalize">
        {title}
      </Typography>
      <Typography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <IconButton>
                <EditIcon sx={{color: "secondary"}}/>
                </IconButton>


          </Tooltip>
        </Typography>
      </Box>
      <Box p={2}>
        <Box mb={2} lineHeight={1}>
          <Typography variant="button" color="text" fontWeight="light">
            {description}
          </Typography>
        </Box>
        <Box opacity={0.3}>
          <Divider />
        </Box>
        <Box>
          {profileInfo}
        </Box>
      </Box>
    </Card>
  );
}



ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
}

export default ProfileCard;
