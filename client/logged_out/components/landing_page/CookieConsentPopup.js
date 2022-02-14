import React from 'react';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import PropTypes from "prop-types";
import classNames from "classnames";
// import cookieIcon from "./assets/branding/transparent1.svg"
import { withStyles} from "@mui/styles";


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
    >
      <p style={{flexWrap: 'wrap',justifyContent: 'center'}}>
      Stack Support uses cookies to ensure an enhanced and consistent user experience between visits.

      </p>
    </CookieConsent>
  );
};


export default (CookieConsentPopup);



