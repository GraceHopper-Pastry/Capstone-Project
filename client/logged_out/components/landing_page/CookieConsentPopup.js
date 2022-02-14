import React from 'react';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import PropTypes from "prop-types";
import classNames from "classnames";
// import cookieIcon from "./assets/branding/transparent1.svg"
import { withStyles} from "@mui/styles";

// const styles = (theme) => ({
//   cookiePopup: {
//     background: theme.palette.primary.dark,
//     width: '25%',
//     position: "fixed",
//     left: '10px',
//     bottom: '20px',
//     boxShadow: '0px 0px 15px #cccccc',
//     padding: '5px 10px',
//   },
//   cookieText: {
//     textAlign: 'left',
//     fontSze: '15px',
//     color: theme.palette.common.white
//   },
//   cookieButton: {
//     width: '100%',
//     border: '0',
//     background: '#097fb7',
//     padding: '5px',
//     borderRadius: '10px',
//     color: theme.palette.common.white,
//     flex: "0 0 auto",
//     padding: "5px 10px",
//     margin: "15px",
//   },
//   overlay: {
//     position: "fixed",
//     left: '0',
//     top: '0',
//     width: "100%",
//     height: "100%",
//     zIndex: "999",
//     backgroundColor: "rgba(0,0,0,0.3)",
//   },
// })


function CookieConsentPopup(props) {
  const cookieValue = "TESTING"
  console.log(cookieValue)
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      onDecline={() => {
        alert("nay!");
      }}
      onAccept={() => {
        alert("yay!");

      }}
      style={{
        background: '#212529',
        position: "fixed",
        dislay: "flex",
        boxShadow: '0px 0px 15px #cccccc',
      }}
      // buttonText="I understand"
      location="top"
      expires={150}
      visable="show"
      hideOnAccept
      cookieName={cookieValue}
      overlay={true}
      ariaAcceptLabel
      ariaDeclineLabel
      debug={true}
      // buttonStyle={{
      //   background: '##4CAF50',
      //   color:'#fff',
      //   display: 'flex',
      //   alignItems: 'center'
      //  }}
      //  declineButtonStyle={{
      //   background: '#F44336',
      //   color:'#000',
      //   display: 'flex',
      //   alignItems: 'center'
      //  }}

    >
      <p>
      Stack Support uses cookies to improve the site performance and to ensure your user experience is enhanced and consistent between visits.
      </p>
      {/* <img
        display='flex'
        src={cookieIcon}
        alt="cookie-image"
      /> */}
    </CookieConsent>
  );
};


export default (CookieConsentPopup);



