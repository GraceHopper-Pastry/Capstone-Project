import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function ExperienceDialog() {
  const [open, setOpen] = useState(true);
  const [yearsOfExp, setYearsOfExp] = useState("");

  const handleClose = () => {
    setOpen(false);
    const yearsOfExperience = localStorage.setItem("Experience", yearsOfExp);
  };

  const handleChange = (e) => {
    setYearsOfExp(e.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            How long have you been a software engineer?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="yearsOfExperience"
            label="years"
            type="number"
            value={yearsOfExp}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 0 } }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
