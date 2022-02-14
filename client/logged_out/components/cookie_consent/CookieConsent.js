import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import PropTypes from "prop-types";
import classNames from "classnames";
const styles = (theme) => ({
  cookiePopup: {
    background: theme.pallete.primary.dark,
    width: '25%',
    position: fixed,
    left: '10px',
    bottom: '20px',
    boxShadow: '0px 0px 15px #cccccc',
    padding: '5px 10px',
  },
  cookieText: {
    textAlign: left,
    fontSze: '15px',
    color: theme.palette.primary.contrastText
  },
  cookieButton: {
    width: '100%',
    border: '0',
    background: '#097fb7',
    padding: '5px',
    borderRadius: '10px',
    color: theme.palette.common.white,
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "15px",
  },
  overlay: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: "999",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
})


function CookieConsent(props) {
  const { classes } = props
  const cookieValue = getCookieConsentValue()
  console.log(cookieValue)
  return (
    <CookieConsent
      enableDeclineButton
      onDecline={() => {
        alert("nay!");
      }}
      onAccept={() => {
        alert("yay!");

      }}
      className={classes.cookiePopup}
      buttonText="I understand"
      location="left"
      expires={150}
      visable="show"
      hideOnAccept
      cookieValue={cookieValue}
      overlay={true}
      ariaAcceptLabel
      ariaDeclineLabel
      debug={true}
      buttonStyle={classes.cookieButton}
      overlayStyle={classes.overlay}
    >
      Stack Support uses cookies to enhance your user experience.
    </CookieConsent>
  );
};

CookieConsent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(CookieConsent);



