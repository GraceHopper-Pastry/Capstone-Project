import React, { useState, memo, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onClear } from "../store/singleUser";
import { logout } from "../store/auth";
// import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Tooltip,
  MenuItem,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { fetchSingleUser } from "../store/singleUser";
import CookieConsent, {
  Cookies,
  resetCookieConsentValue,
} from "react-cookie-consent";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  brandText: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },

  noDecoration: {
    textDecoration: "none !important",
  },
  logo: {
    maxWidth: 40,
    marginRight: '70px'
  }
});

const LoggedInNavBar = (props) => {
  const { classes } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const intakeScore = useSelector(
    (state) => state.singleUserReducer.intakeScore
  );

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, [intakeScore]);

  const handleClick = () => {
    console.log(resetCookieConsentValue());
    dispatch(onClear());
    dispatch(logout());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuPages = [
    {
      link: "/home",
      name: "Home",
      icon: <HomeIcon className="text-white" color="inherit" />,
    },
    {
      link: "/users/chat",
      name: "Chat",
      icon: <ChatBubbleIcon className="text-white" color="inherit" />,
    },
    // {
    //   link: '/offerings',
    //   name: 'Offerings',
    //   icon: <LocalOfferIcon className='text-white' color='inherit' />,
    // },
  ];
  //use this for a user who has taken their intake quiz
  const settings = [
    {
      link: "/users",
      name: "Profile",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/account",
      name: "Account Settings",
      icon: <ManageAccountsIcon className="text-white" />,
    },
  ];

  //use this for a user who has not taken their intake quiz so they can get back to the quiz view easily
  const settingsNoQuiz = [
    {
      link: "/users",
      name: "Profile",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/account",
      name: "Account Settings",
      icon: <ManageAccountsIcon className="text-white" />,
    },
    {
      link: "/quiz",
      name: "Mentor Match Quiz",
      icon: <HomeIcon className="text-white" />,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="inherit"
            ></Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="inherit"
            ></Typography>
          </div>
          {/* <div mdup="true">
            <Tooltip title="Open Navigation Menu">
              <IconButton
                className={classes.menuButtonText}
                onClick={handleOpenNavMenu}
                color="inherit"
                aria-label="menu"
                edge="start"
                size="large"
              >
                <MenuIcon color="inherit" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>About Us</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Community Posts</MenuItem>
            </Menu>
          </div>
          <div smdown="true"> */}

          <div className={classes.container}>
            <div className={classes.item}>
              {menuPages.map((page) => {
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
              })}
              <Button
                component={Link}
                to="/home"
                className={classes.noDecoration}
                color="inherit"
                size="medium"
                classes={{ text: classes.menuButtonText }}
                onClick={handleClick}
                endIcon={<LogoutIcon className="text-white" color="inherit" />}
              >
                Logout
              </Button>
              {/* </div> */}
            </div>
            <div className={classes.item}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {intakeScore !== null
                    ? settings.map((setting) => {
                        return (
                          <MenuItem
                            key={setting.name}
                            to={setting.link}
                            component={Link}
                            className={classes.noDecoration}
                            onClick={handleCloseUserMenu}
                          >
                            <Typography textAlign="center">
                              {setting.name}
                            </Typography>
                          </MenuItem>
                        );
                      })
                    : settingsNoQuiz.map((setting) => {
                        return (
                          <MenuItem
                            key={setting.name}
                            to={setting.link}
                            component={Link}
                            className={classes.noDecoration}
                            onClick={handleCloseUserMenu}
                          >
                            <Typography textAlign="center">
                              {setting.name}
                            </Typography>
                          </MenuItem>
                        );
                      })}
                </Menu>
              </Box>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

/**
 * CONTAINER
 */

LoggedInNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(LoggedInNavBar));
