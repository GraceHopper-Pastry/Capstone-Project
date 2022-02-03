import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../../../store'
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
  Box
} from '@mui/material';
import  {withStyles} from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
    fontFamily: "Roboto",
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


const NavBar = (props) => {
  const {handleClick, isLoggedIn, classes} = props

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  ];

  const settings = [
    {
      link: "/home",
      name: "Profile",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/account",
      name: "Account Settings",
      icon: <ManageAccountsIcon className="text-white" />
    },
    {
      name: "Logout",
      onClick: handleClick,
      icon: <LogoutIcon className="text-white" />
    }

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
            <Hidden mdUp>
            <IconButton
              className={classes.menuButtonText}
              onClick={handleOpenNavMenu}
              color="inherit"
              aria-label="Open Navigation"
            >
              <MenuIcon color="primary" />
              <MenuIcon />
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
                      onClick={handleCloseNavMenu}
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
          {isLoggedIn ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(page => {
                if (page.link) {
                  return (
                    <MenuItem
                      key={page.name}
                      to={page.link}
                      className={classes.noDecoration}
                      onClick={handleCloseUserMenu}
                    >
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem
                    onClick={page.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={page.name}
                  >
                    {page.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          ) : (
            <div>
          {/* The navbar will show these links before you log in */}
            <Tooltip title="Apply Now">
              <Button to={'/signup'}>
                <AccountCircle />
              </Button>
            </Tooltip>
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

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapState, mapDispatch)(withStyles(styles, { withTheme: true })(memo(NavBar)));
