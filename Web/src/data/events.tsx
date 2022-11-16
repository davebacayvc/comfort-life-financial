import { EventCardVariant } from "pages/Events/components/EventCard";

type Events = {
  title: string;
  date: string;
  description: string;
  id: string;
  event_date: string | Date;
  image: string;
  variant: EventCardVariant;
};
const events: Events[] = [
  {
    title: "Christmas Party",
    date: "Pick a Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "a40a3372-18e4-4b93-9aaf-a812175255db",
    event_date: new Date(),
    image: "/assets/others/event-1.png",
    variant: "dark",
  },
  {
    title: "Christmas Party",
    date: "Pick a Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "a40a3372-18e4-4b93-9aaf-a812175255db",
    event_date: new Date(),
    image: "/assets/others/event-2.png",
    variant: "light",
  },
  {
    title: "Christmas Party",
    date: "Pick a Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "a40a3372-18e4-4b93-9aaf-a812175255db",
    event_date: new Date(),
    image: "/assets/others/event-1.png",
    variant: "dark",
  },
];

export default events;
