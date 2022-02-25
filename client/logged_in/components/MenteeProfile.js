import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch , useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

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
import Link from '@mui/material/Link';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';




function MenteeProfile(props) {
  const history = useHistory();
  const { intakeScore, profiles, title, isMentor, shadow} = props;
  // const {firstName, lastName, profilePic, id, jobTitle, employer} = profiles;
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);


  const actions = [
    {
      condition: 1,
      label: "message your mentor",
      color: "#3F51B5",
      route: "/users/chat"
    },
    {
      condition: 0,
      label: "choose your mentor",
      color: "#3F51B5",
      route: `/users/mentors/${intakeScore}`


    }
  ]

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (!!profiles.length) {
    //   history.push(`/users/mentors/${intakeScore}`)
    // }
    history.push("users/chat")
    } else {
      history.push(`users/mentors/${intakeScore}`)
    }
  };

// React.cloneElement(element, [props], [...children])

//   element: The element to be cloned
// [props]: Props that will be added to the cloned element in addition to those of the original element
// [...children]: The children of the cloned object. Note that the children of the existing object are not copied


  const yesProfiles = (
    <List dense={dense}>
   {profiles.map(({id, firstName, lastName, profilePic, jobTitle, employer, isMentor }) => (
    <span key={id}>
    <ListItem
      secondaryAction={
        <ListItemButton
        component={Link}
        to="/users/chat"
        edge="end"
        aria-label={isMentor ? "chat with your mentee"  : "chat with your mentor"}
        color="#3F51B5"
        backgroundColor="#3F5185"
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ChatBubbleIcon size="large" color="#3F5185" selected={selectedIndex === 2}/>
      </ListItemButton>
      }
    >
      <ListItemAvatar>
        <Avatar
          src={profilePic}
          sx={{ width: 100, height: 100 }}
          shadow="md"
          aria-label={firstName}
        />
      </ListItemAvatar>
      <ListItemText
        primary={firstName + " " + lastName}
        secondary={secondary ? jobTitle + " at " + employer : null }
      />
    </ListItem>
  </span>
  ))}
  </List>
)


   {/* IF USER HAS NOT YET BEEN ASSIGNED A MENTOR */}
  const noProfiles = (
    <List dense={dense}>
     <ListItem
      secondaryAction={
        <ListItemButton
          component={Link}
          to={`/users/mentors/${intakeScore}`}
          edge="end"
          size="large"
          color="#3F51B5"
          aria-label={isMentor ? "Check back soon to meet your mentees!" : "Find a mentor and connect"}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}

      >
        <PersonAddIcon />
      </ListItemButton>
      }
     >
      <ListItemAvatar>
        <Avatar
          sx={{ width: 56, height: 56 }}
          shadow="md"
          aria-label="Jane Doe"
        />
      </ListItemAvatar>
      <ListItemText
        primary="No Mentor Assigned yet"
        secondary={secondary ? "Explore your personal match recommendations" : null }
      />
    </ListItem>
  </List>
  )

  return (
    <Card sx={{ boxShadow: !shadow && "none", flexGrow: 3, flexDirection: "row"}}>
      <Box p={2}>
      <Typography variant="h6" fontWeight="medium" textTransform="capitalize" >
        {title}
      </Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={0.5} ml={2}>
        <FormGroup row width="50%">
        <Box display="flex" mt={0.5}>
          <FormControlLabel
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
        <Box component="div" display="flex" alignItems="center" justifyContent="space-between" p={3} >
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

