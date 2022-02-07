import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { logout } from "../../../store";
import { Signup, Login } from "../../../components/AuthForm";
// import NavigationDrawer from "../../../shared/components/NavigationDrawer";
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
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
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
});

const NavBar = (props) => {
  const { handleClick, isLoggedIn, classes } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" color="inherit" />,
    },
    {
      link: "/offerings",
      name: "Offerings",
      icon: <LocalOfferIcon className="text-white" color="inherit" />,
    },
    {
      link: "/signup",
      name: "Apply Now",
      icon: <HowToRegIcon className="text-white" color="inherit" />,
    },
    {
      name: "Login",
      link: "/login",
      icon: <LoginIcon className="text-white" color="inherit" />,
    },
  ];

  const settings = [
    {
      link: "/home",
      name: "Profile",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/account",
      name: "Account Settings",
      icon: <ManageAccountsIcon className="text-white" />,
    },
    {
      name: "Logout",
      onClick: handleClick,
      icon: <LogoutIcon className="text-white" />,
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
          <div mdup="true">
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
          <div smdown="true">
            {menuPages.map((page) => {
              if (page.link) {
                return (
                  // <Link
                  //   key={page.name}
                  //   component={Link}
                  //   to={page.link}
                  //   className={classes.noDecoration}
                  // >
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
              }
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
            })}
          </div>
          {isLoggedIn ? (
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
                {settings.map((setting) => {
                  if (setting.link) {
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
                  }
                  return (
                    <MenuItem
                      onClick={setting.onClick}
                      classes={{ text: classes.menuButtonText }}
                      key={setting.name}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Apply Now">
                  <IconButton component={Link} to="signup">
                    <AccountCircle color="inherit" />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles, { withTheme: true })(memo(NavBar)));
