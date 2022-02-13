import * as React from "react";
import Switch from '@mui/material/Switch';
import "./Animation.css";
export default function AnimationToggle() {
  const [checked, setChecked] = React.useState(true);

  const bodyStyle = getComputedStyle(document.body);

  const handleChange = (event) => {
    if (setChecked(event.target.checked === false )){
      // stop animation
      document.body.style.setProperty("--toggle", "0");
      document.body.style.setProperty("--playState", "paused");
    } else {
      // play animation
      document.body.style.setProperty("--toggle", "1");
      document.body.style.setProperty("--playState", "running");
    }

  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Play Animation?' }}
    />
  );

  }
