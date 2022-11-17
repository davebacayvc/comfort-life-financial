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
    id: "a40a3372-18e4-4b93-9aaf-a812175255db",
    event_date: new Date(),
    image: "/assets/others/event-2.png",
    variant: "light",
  },
  {
    title: "Christmas Party 3",
    date: "January 21, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    id: "a40a3372-18e4-4b93-9aaf-a812175255db",
    event_date: new Date(),
    image: "/assets/others/event-1.png",
    variant: "dark",
  },
];

export default events;
