import { Button } from "@mui/material";
import Table from "pages/Admin/components/Table/Table";
import Title from "pages/Admin/components/Title/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "redux/actions/eventActions";
import Form from "./components/Form";

const Events: React.FC = () => {
  const dispatch = useDispatch();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    dispatch(listEvents() as any);
  }, [dispatch]);

  const eventList = useSelector((state: any) => state.eventList);
  const { loading, error, events } = eventList;

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
        id: "eventId",
        label: "Event ID",
        minWidth: 80,
        align: "left",
      },
      {
        id: "title",
        label: "Title",
        minWidth: 80,
        align: "left",
      },
      {
        id: "eventDate",
        label: "Event Date",
        minWidth: 80,
        align: "left",
      },
      {
        id: "description",
        label: "Description",
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

    rows: events?.map((event: any) => {
      return {
        eventId: event._id,
        title: event.title,
        eventDate: event.event_date,
        description: event.description,
        actions: actionButtons,
      };
    }),
  };

  const addEventHandler = () => {
    setShowDrawer(true);
  };

  useEffect(() => {}, [events]);

  console.log(events);

  return (
    <div className="admin-events">
      <Title
        title="Events"
        subtitle="Lorem Ipsum is simply dummy text of the printing"
        button={{
          show: true,
          text: "Add Event",
          onClick: addEventHandler,
        }}
      />
      <Table
        columns={tableDefs.columns}
        rows={tableDefs.rows}
        loading={loading}
      />
      <Form
        setShowDialog={setShowDialog}
        setShowDrawer={setShowDrawer}
        showDrawer={showDrawer}
      />
    </div>
  );
};

export default Events;
