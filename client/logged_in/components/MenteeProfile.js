import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch , useSelector} from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";

// @mui material components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from '@mui/material/Grid';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemButton';
import ListItemButton from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Divider from '@mui/material/Divider';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from "@mui/material";



function MenteeProfile(props) {
  const history = useHistory();
  const { intakeScore, profiles, title, isMentor, shadow} = props;
  // const {firstName, lastName, profilePic, id, jobTitle, employer} = profiles;
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(true);
  const pathname = useLocation()




// React.cloneElement(element, [props], [...children])

//   element: The element to be cloned
// [props]: Props that will be added to the cloned element in addition to those of the original element
// [...children]: The children of the cloned object. Note that the children of the existing object are not copied


  const yesProfiles = (
   profiles.map(({id, firstName, lastName, profilePic, jobTitle, employer, isMentor }) => (
    <Box key={id} component="li" display="flex" alignItems="center" p={1} mb={1}>
      <Box mr={2}>
        <Avatar
          src={profilePic}
          sx={{ width: 100, height: 100 }}
          shadow="md"
          aria-label={firstName}
        />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="space-between" px={6}>
        <Typography variant="button" fontWeight="medium">
          {firstName + " " + lastName}
        </Typography>
        <Typography variant="caption" color="text">
          {secondary ? jobTitle + " at " + employer : null }
        </Typography>
      </Box>
      <Box ml="auto">
        <IconButton
          component={Link}
          to="/users/chat"
          edge="end"
          aria-label={isMentor ? "chat with your mentee"  : "chat with your mentor"}
          color="info"
          size="large"
          >
          <ChatBubbleIcon />
        </IconButton>
      </Box>
  </Box>
  ))
)



   {/* IF USER HAS NOT YET BEEN ASSIGNED A MENTOR */}
  const noProfiles = (
      <Box component="li" display="flex" alignItems="center" py={1} mb={1}>
        <Box mr={2}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            shadow="md"
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
          <Typography variant="button" fontWeight="medium">
           No Mentor Assigned Yet
          </Typography>
          <Typography variant="caption" color="text">
            Find a Mentor and Connect!
          </Typography>
        </Box>
        <Box ml="auto">
          <IconButton
            component={Link}
            to={`/users/mentors/${intakeScore}`}
            edge="end"
            aria-label={isMentor ? "chat with your mentee"  : "chat with your mentor"}
            color="info"
            >
            <PersonAddIcon />
          </IconButton>
        </Box>
    </Box>
  )

  return (
    <Card sx={{ boxShadow: !shadow && "none", flexGrow: 3, flexDirection: "row"}}>
      <Box p={2}>
      <Typography className="profile-header-text" variant="h6" fontWeight="medium" textTransform="capitalize" >
        {title}
      </Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={0.5} ml={2}>
        <FormGroup row width="50%">
        <Box display="flex" mt={0.5}>
          <FormControlLabel
            sx={{fontSize: '12px'}}
            control={
              <Checkbox
                checked={dense}
                onChange={(event) => setDense(event.target.checked)}
              />
            }
            label="Enable Dense View"
          />
          </Box>
          <Box display="flex" mt={0.5}>
          <FormControlLabel
            control={
              <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
              />
            }
            label="Enable Title View"
          />
        </Box>

        </FormGroup>
        </Box>
        <Box  p={3} >
          {!!profiles.length? (
            [yesProfiles]
          ) : (
            [noProfiles]
          )}
        </Box>
  </Card>
  );
};


export default MenteeProfile

