import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import events from "data/events";
import Banner from "library/Banner/Banner";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EventInvites.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventForm from "./EventForm/EventForm";
import { CheckCircle, ContentCopy } from "@mui/icons-material";
import Button from "library/Button/Button";

const EventInvites: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [clipboardValue, setClipboardValue] = useState("");
  const { id } = useParams();

  const event = events.find((x) => x.id === id);

  return (
    <div className="event-invites">
      <Banner title="COME WITH US" bigTitle="Event Invite" hasBorder />
      <div className="event-invite-content">
        <Container>
          <div className="event-description">
            <div className="date-wrapper">
              <CalendarTodayIcon /> {event?.date}
            </div>
            <h1>{event?.title}</h1>
            <img src={event?.image} alt={event?.title} />
            <p>{event?.description}</p>
          </div>
          <EventForm
            date={event?.date ?? ""}
            description={event?.description ?? ""}
            id={event?.id ?? ""}
            image={event?.image ?? ""}
            setClipboardValue={setClipboardValue}
            setShowDialog={setShowDialog}
            title={event?.title ?? ""}
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
                  Share read-only reference ID link to invite an audience or
                  friends in this event.
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
              <Button onClick={() => setShowDialog(false)} variation="light">
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </div>
    </div>
  );
};

export default EventInvites;
