import React, { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Settings() {
  const [answerChat, setAnswerChat] = useState(true);
  const [newMatch, setNewMatch] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [newOfferings, setNewOfferings] = useState(true);


  return (
      <Card sx={{ boxShadow: "none" }}>
        <Box p={2}>
          <Typography variant="h6" fontWeight="medium" textTransform="capitalize">
            platform settings
          </Typography>
        </Box>
        <Box pt={1} pb={2} px={2} lineHeight={1.25}>
          <Typography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            account
          </Typography>
          <Box display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <Box mt={0.5}>
              <Switch checked={answerChat} onChange={() => setAnswerChat(!answerChat)} />
            </Box>
            <Box width="80%" ml={0.5}>
              <Typography variant="button" fontWeight="regular" color="text">
                Email me when someone sends me a chat message
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <Box mt={0.5}>
              <Switch checked={newMatch} onChange={() => setNewMatch(!newMatch)} />
            </Box>
            <Box width="80%" ml={0.5}>
              <Typography variant="button" fontWeight="regular" color="text">
                Email me when my mentor match changes
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <Box mt={0.5}>
              <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
            </Box>
            <Box width="80%" ml={0.5}>
              <Typography variant="button" fontWeight="regular" color="text">
                Turn on on-site notifications
              </Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Typography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
              application
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <Box mt={0.5}>
              <Switch checked={newOfferings} onChange={() => setNewOfferings(!newOfferings)} />
            </Box>
            <Box width="80%" ml={0.5}>
              <Typography variant="button" fontWeight="regular" color="text">
                New mentor offerings
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <Box mt={0.5}>
              <Switch checked={productUpdates} onChange={() => setProductUpdates(!productUpdates)} />
            </Box>
            <Box width="80%" ml={0.5}>
              <Typography variant="button" fontWeight="regular" color="text">
                Monthly product updates
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <Box mt={0.5}>
              <Switch checked={subscribe} onChange={() => setSubscribe(!subscribe)} />
            </Box>
            <Box width="80%" ml={0.5}>
              <Typography variant="button" fontWeight="regular" color="text">
                Subscribe to newsletter
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  }

  export default Settings;


