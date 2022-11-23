import { Button } from "@mui/material";
import Table from "pages/Admin/components/Table/Table";
import Title from "pages/Admin/components/Title/Title";
import React from "react";
import "./EventInvites.scss";

const EventInvites = () => {
  const actionButtons = (
    <div className="action-buttons">
      <Button variant="outlined" size="small">
        View
      </Button>
      <Button variant="outlined" size="small" color="error">
        Delete
      </Button>
    </div>
  );
  const tableDefs = {
    columns: [
      {
        id: "refId",
        label: "Reference ID",
        minWidth: 80,
        align: "left",
      },
      {
        id: "eventName",
        label: "Event Name",
        minWidth: 80,
        align: "left",
      },
      {
        id: "clientName",
        label: "Client Name",
        minWidth: 80,
        align: "left",
      },
      {
        id: "mobileNumber",
        label: "Mobile Number",
        minWidth: 80,
        align: "left",
      },
      {
        id: "emailAddress",
        label: "Email Address",
        minWidth: 80,
        align: "left",
      },
      {
        id: "actions",
        label: "Actions",
        minWidth: 80,
        align: "left",
      },
    ],

    rows: [
      {
        refId: "refId",
        eventName: "event name",
        clientName: "client name",
        mobileNumber: "mobile Number",
        emailAddress: "emailAddress",
        actions: actionButtons,
      },
      {
        refId: "refId",
        eventName: "event name",
        clientName: "client name",
        mobileNumber: "mobile Number",
        emailAddress: "emailAddress",
        actions: actionButtons,
      },
    ],
  };

  return (
    <div className="admin-event-invites">
      <Title
        title="Event Invites"
        subtitle="Lorem Ipsum is simply dummy text of the printing"
      />
      <Table columns={tableDefs.columns} rows={tableDefs.rows} />
    </div>
  );
};

export default EventInvites;
