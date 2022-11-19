import { eventSteps } from "constants/constants";
import { EventsType } from "data/events";
import Banner from "library/Banner/Banner";
import WorkingSteps from "pages/Services/components/WorkingSteps";
import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard";
import "./Events.scss";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { CheckCircle, ContentCopy } from "@mui/icons-material";
import Button from "library/Button/Button";
import axios from "axios";
import ENDPOINTS from "constants/endpoints";

const Events: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clipboardValue, setClipboardValue] = useState("");
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get(ENDPOINTS.EVENTS);
      setEventsData(data);
    };

    fetchEvents();
  }, []);
  return (
    <div className="event-content">
      <Banner bigTitle="Events" title="See latest updates" hasBorder />
      {eventsData.map((event: EventsType, i: number) => (
        <React.Fragment key={i}>
          <EventCard
            {...event}
            setShowDialog={setShowDialog}
            setClipboardValue={setClipboardValue}
          />
        </React.Fragment>
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
            Share read-only reference ID link to invite an audience or friends
            in this event.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} variation="light">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Events;
