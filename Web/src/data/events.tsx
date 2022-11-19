import { EventCardVariant } from "pages/Events/components/EventCard";

export type EventsType = {
  title: string;
  date: string;
  description: string;
  id: string;
  event_date: string | Date;
  image: string;
  variant: EventCardVariant;
};

export type EventInvite = {
  id: string;
  date: string | Date;
  eventId: string;
  invitee: string;
  referenceId: string;
  title: string;
  description: string;
  event_date: string | Date;
  image: string;
  variant: EventCardVariant;
};

const events: EventsType[] = [
  {
    title: "Christmas Party 1",
    date: "January 21, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "a40a3372-18e4-4b93-9aaf-a812175255db",
    event_date: new Date(),
    image: "/assets/others/event-1.png",
    variant: "dark",
  },
  {
    title: "Christmas Party 2",
    date: "January 21, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "d9832c5e-293e-4588-8f58-eb2d31cf3a3b",
    event_date: new Date(),
    image: "/assets/others/event-2.png",
    variant: "light",
  },
  {
    title: "Christmas Party 3",
    date: "January 21, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "7a1c45a8-dd86-44c7-8277-bf9eec496f80",
    event_date: new Date(),
    image: "/assets/others/event-1.png",
    variant: "dark",
  },
];

export default events;
