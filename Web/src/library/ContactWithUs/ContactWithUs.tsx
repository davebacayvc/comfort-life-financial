import React, { useState } from "react";
import "./ContactWithUs.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { PopupModal } from "react-calendly";

const ContactWithUs = () => {
  const [calendlyModal, setCalendlyModal] = useState(false);
  return (
    <React.Fragment>
      <div className="contact-with-us-wrapper">
        <div className="captions">
          <h5>Calendly Appointment</h5>
          <p>Powered by Calendly</p>
        </div>
        <div className="captions">
          <h1>Contact With Us!</h1>
        </div>
        <div>
          <button onClick={() => setCalendlyModal(true)}>
            BOOK APPOINTMENT <ArrowRightAltIcon />
          </button>
        </div>
      </div>
      <PopupModal
        url="https://calendly.com/dave-bacay-vc/call-us-testing"
        onModalClose={() => setCalendlyModal(false)}
        open={calendlyModal}
        rootElement={document.getElementById("root") as any}
      />
    </React.Fragment>
  );
};

export default ContactWithUs;
