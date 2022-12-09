import { eventSteps } from "constants/constants";
import { EventsType } from "data/events";
import Banner from "library/Banner/Banner";
import WorkingSteps from "pages/Solutions/components/WorkingSteps";
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
import { useSelector, useDispatch } from "react-redux";
import { listEvents } from "redux/actions/eventActions";
import { useNavigate } from "react-router-dom";
import Spinner from "library/Spinner/Spinner";
import paths from "constants/routes";
import { FaFileDownload } from "react-icons/fa";
// @ts-ignore
import { saveAs } from "file-saver";

const Events: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [clipboardValue, setClipboardValue] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    dispatch(listEvents() as any);
  }, [dispatch]);

  const eventList = useSelector((state: any) => state.eventList);
  const { loading, error, events } = eventList;

  if (error) {
    navigate(paths.invalid);
  }

  const downloadImage = () => {
    saveAs(ticket, "Event Ticket"); // Put your image url here.
  };

  return (
    <div className="event-content">
      <Banner bigTitle="Events" title="See latest updates" hasBorder />
      <WorkingSteps
        bigTitle={
          <React.Fragment>
            Some <span>easy steps</span> to go in a event!
          </React.Fragment>
        }
        title="WORKING STEPS"
        topTitle="Join With Us!"
        steps={eventSteps}
      />
      {events.map((event: EventsType, i: number) => (
        <React.Fragment key={i}>
          <EventCard
            {...event}
            id={event._id}
            setShowDialog={setShowDialog}
            setClipboardValue={setClipboardValue}
            setTicket={setTicket}
          />
        </React.Fragment>
      ))}

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
              This link has also been sent to your email.
            </p>
            <a href={ticket} download>
              <img alt="event-ticket" src={ticket} className="ticket-img" />
            </a>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} variation="light">
            CLOSE
          </Button>
          <Button
            onClick={downloadImage}
            variation="dark"
            className="download-button"
          >
            <FaFileDownload /> DOWNLOAD TICKET
          </Button>
        </DialogActions>
      </Dialog>
      <Spinner isVisible={loading} />
    </div>
  );
};

export default Events;
