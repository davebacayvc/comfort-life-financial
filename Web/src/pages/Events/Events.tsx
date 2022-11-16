import { eventSteps } from "constants/constants";
import events from "data/events";
import Banner from "library/Banner/Banner";
import WorkingSteps from "pages/Services/components/WorkingSteps";
import React, { useState } from "react";
import EventCard from "./components/EventCard";
import "./Events.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { CheckCircle, ContentCopy } from "@mui/icons-material";

const Events = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [clipboardValue, setClipboardValue] = useState(
    "https://localhost:3000/invites/145SGDS"
  );
  return (
    <div className="event-content">
      <Banner bigTitle="Events" title="See latest updates" hasBorder />
      {events.map((event, i) => (
        <EventCard {...event} />
      ))}
      <WorkingSteps
        bigTitle={
          <React.Fragment>
            Some <span>easy steps</span> to go in a event!
          </React.Fragment>
        }
        title="WORKING STEPS"
        steps={eventSteps}
      />

      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        className="custom-dialog"
      >
        <DialogTitle>
          <div className="custom-dialog-title">
            <CheckCircle />
            <span>Event Form Submitted</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="event-dialog-content">
            <p>
              Share read-only reference ID link to invite an audience or friends
              in this event.
            </p>
            <div className="copy-input">
              <TextField
                label="Reference ID"
                value={clipboardValue}
                fullWidth
                disabled
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        navigator.clipboard.writeText(clipboardValue)
                      }
                    >
                      <ContentCopy />
                    </IconButton>
                  ),
                }}
              />
              <p className="sent-email-instructions">
                This link has also sent to your email
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Events;
