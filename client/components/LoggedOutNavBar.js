import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
  Hidden,
  IconButton,
  Box,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.light,
    position: "sticky"


  },
  Button: {
    display: "flex",
    justifyContent: "flex-start",
  },
  // toolbar: {
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  brandText: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  logo: {
    boxSizing: "border-box",
    color: "#24282c",
    marginRight: "24px",
    marginTop: "8px",
    marginBottom: "8px",
    width: "initial",
    display: "inline-flex",
    height: "65px",
    objectFit: "scale-down"


  }
});

const LoggedOutNavBar = (props) => {
  const { classes } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuPages = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" color="inherit" />,
    },
    // {
    //   link: '/offerings',
    //   name: 'Offerings',
    //   icon: <LocalOfferIcon className='text-white' color='inherit' />,
    // },
    {
      link: "/signup",
      name: "Sign Up",
      icon: <HowToRegIcon className="text-white" color="inherit" />,
    },
    {
      name: "Sign In",
      link: "/login",
      icon: <LoginIcon className="text-white" color="inherit" />,
    },
  ];

  return (
    <Box sx={{boxSizing: "border-box", borderRadius: 16, margin: 0, padding: 0, overflowX: "hidden", backgroundColor: "default"}}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="inherit"
            >
                <img className={classes.logo} src="/images/brand_logo/med_assets/transparent5.png" alt="stack suport" />
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="inherit"
            ></Typography>
          </div>

          <div smdown="true">
            {menuPages.map((page) => {
              if (page.link) {
                return (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.link}
                    className={classes.noDecoration}
                    color="inherit"
                    size="medium"
                    classes={{ text: classes.menuButtonText }}
                    endIcon={page.icon}
                  >
                    {page.name}
                  </Button>
                );
              } else {
                return (
                  <Button
                    color="inherit"
                    size="medium"
                    onClick={page.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={page.name}
                    endIcon={page.icon}
                  >
                    {page.name}
                  </Button>
                );
              }
            })}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

/**
 * CONTAINER
 */

LoggedOutNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(LoggedOutNavBar));
