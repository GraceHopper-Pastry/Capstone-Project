import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IntakeForm from "./IntakeForm";

export default function QuizPopup() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    //this will dispatch updateUser with intakeScore and dispatch getMentorMatches (not yet written) to fetch mentor matches
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <IntakeForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
