import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IntakeForm from './IntakeForm';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    padding: '0px 0px 0px 0px',
  },
});

//QuizPopup should only appear on page load if the user does not have an intake score
function QuizPopup({ isOpen, classes }) {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    //this will dispatch updateUser with intakeScore and dispatch getMentorMatches (not yet written) to fetch mentor matches
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        // repositiononupdate={false}
        // style={{ padding: '0px 0px 0px 0px' }}
      >
        <DialogContent className={classes.root}>
          <IntakeForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

QuizPopup.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(QuizPopup);
