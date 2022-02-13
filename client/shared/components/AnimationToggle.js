import * as React from "react";

// stop animation
document.body.style.setProperty("--toggle", "0");
document.body.style.setProperty("--playState", "paused");


// play animation
document.body.style.setProperty("--toggle", "1");
document.body.style.setProperty("--playState", "running");
