import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch , useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

// @mui material components
import Grid from '@mui/material/Grid';
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

import { fetchSingleUser } from "../../store/singleUser";


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

function MentorProfile() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.singleUserReducer)
  const history = useHistory()

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    history.push("users/chat")
  };

  // user profile
  useEffect(() => {
    // retrieve single user from thunk
    dispatch(fetchSingleUser());

  }, []);

  function generate(ele) {
      return user.Mentees.map(person => {
        React.cloneElement(ele, {
          key: person.id
        })
      })
    }

  return (
  <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Your Mentees:
    </Typography>
    {user.Mentees.length ? (
    <Demo>
      {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
    <List  sx={{ width: '100%', maxWidth: 360}} component="nav" >
      {generate(
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <ListItemButton
              component={Link}
              to="/users/chat"
              edge="end"
              aria-label="chat"
              selected={selectedIndex === 0}

              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ChatBubbleIcon
                fontSize="small"
                sx={{ mt: -0.25 }}
                aria-label={user.isMentor
                  ? "Chat with your Mentees!"
                  : "Chat with your Mentor"}

                />
            </ListItemButton>
          }
        >
          <ListItemAvatar>
            <Avatar
              src={person.profilePic}
              sx={{ width: 56, height: 56 }}
              variant="rounded"
            >
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={person.firstName + " " + person.lastName}
          />
        </ListItem>
      )}
      <Divider variant="inset" component="li" />
    </List>
    </Demo>
    ) : (
    <Demo>
    {/* IF MENTOR HAS NOT YET BEEN ASSIGNED MENTEES */}
    <Typography sx={{ mt: 4, mb: 2 }} variant="button" component="div">
      Check back soon to meet your new mentees!
    </Typography>
    </Demo>
    )}
  </Grid>
  );
}

export default MentorProfile


