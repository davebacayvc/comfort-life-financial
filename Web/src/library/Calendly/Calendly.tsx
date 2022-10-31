import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e: any) => console.log(e.data.payload),
  });
  return (
    <React.Fragment>
      <InlineWidget url="https://calendly.com/dave-bacay-vc" />
    </React.Fragment>
  );
};

export default Calendly;
