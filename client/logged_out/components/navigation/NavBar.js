import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import  {withStyles} from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LoginIcon from '@mui/icons-material/Login';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  brandText: {
    fontFamily: [
      "NotoSans",
      "NotoSansThai",
      "Arial",
      "Roboto",
      "'Helvetica Neue'",
      "sans-serif",
  ].join(","),
    fontWeight: 400
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight

  },
  noDecoration: {
    textDecoration: "none !important"
  }
});


const pages = ['Home', 'Offerings', 'Apply Now', 'Login'];
// when i get to NavigationDrawer
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = (props) => {
  const { classes, openSignUpForm, openLoginForm, handleDrawerOpen, handleDrawerClose, DrawerOpen, selectedTab } = props;
  const menuPages = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/offerings",
      name: "Offerings",
      icon: <LocalOfferIcon className="text-white" />
    },
    {
      link: "/signup",
      name: "Apply Now",
      icon: <HowToRegIcon className="text-white" />
    },
    {
      link: "/login",
      name: "Login",
      icon: <LoginIcon className="text-white" />
    }

    // {
    //   name: "Apply Now",
    //   onClick: openSignUpForm,
    //   icon: <HowToRegIcon className="text-white" />
    // },
    // {
    //   name: "Login",
    //   onClick: openLoginForm,
    //   icon: <LocalOfferIcon className="text-white" />
    // }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
            </Typography>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleDrawerOpen}
                aria-label="Open Site Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuPages.map(page => {
                if (page.link) {
                  return (
                    <Link
                      key={page.name}
                      to={page.link}
                      className={classes.noDecoration}
                      onClick={handleDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={page.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={page.name}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      {/* <NavigationDrawer
        menuPages={menuPages}
        anchor="left"
        open={DrawerOpen}
        selectedItem={selectedTab}
        onClose={handleDrawerClose}
      /> */}
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  openSignUpForm: PropTypes.func,
  openLoginForm: PropTypes.func,
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  DrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
