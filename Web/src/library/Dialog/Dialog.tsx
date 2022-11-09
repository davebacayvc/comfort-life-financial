import * as React from "react";
import DialogMUI, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import usePrompt from "hooks/useCallbackPrompt";

interface IDialog extends DialogProps {
  isDirty?: boolean;
}
const Dialog: React.FC<IDialog> = (props) => {
  const [open, setOpen] = React.useState(props.open);

  usePrompt(
    "All changes you made to this form will be undone. Are you sure you want discard changes?",
    props.isDirty
  );

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {}, [open]);
  return (
    <DialogMUI
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </DialogMUI>
  );
};

export default Dialog;
