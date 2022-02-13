import React, { Component, useEffect, useState } from "react";

/**
 * This shared class component will manage the state of all animations in our app.
 * Includes: toggle visibility and setting the timeout for the display CSS property
 */



function AnimatedVisibility({ visible, children }) {
  const [noDisplay, setNoDisplay] = useState(!visible);
  useEffect(() => {
    /* state change is triggered. Wait .65 of a second, and the prop disappears */
    if (!visible) setTimeout(() => setNoDisplay(true), 650);
    else setNoDisplay(false);
  }, [visible]);

  const style = noDisplay ? { display: "none" } : null;
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={visible}
      style={style}
    >
      {children}
    </Animated>
  );
}
