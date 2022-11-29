import { Button } from "@mui/material";
import Table from "pages/Admin/components/Table/Table";
import Title from "pages/Admin/components/Title/Title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "redux/actions/eventActions";

const Events = () => {
  const dispatch = useDispatch();

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
        eventDate: event.date,
        description: event.description,
        actions: actionButtons,
      };
    }),
  };
  return (
    <div className="admin-events">
      <Title
        title="Events"
        subtitle="Lorem Ipsum is simply dummy text of the printing"
      />
      <Table columns={tableDefs.columns} rows={tableDefs.rows} />
    </div>
  );
};

export default Events;
