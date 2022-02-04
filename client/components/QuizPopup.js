import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IntakeForm from "./IntakeForm";
//QuizPopup should only appear on page load if the user does not have an intake score
export default function QuizPopup({ intakeScore }) {
  const [open, setOpen] = useState(!intakeScore);

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
