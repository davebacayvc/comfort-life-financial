import AboutUs from "pages/AboutUs/AboutUs";
import Home from "pages/Home/Home";
import { ReactRoutesType } from "./type";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";
import ComingSoon from "pages/ComingSoon/ComingSoon";
import paths from "./routes";
import Contact from "pages/Contact/Contact";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InvalidRoute from "pages/InvalidRoute/InvalidRoute";
import Portal from "pages/Portal/Portal";
import Solutions from "pages/Solutions/Solutions";
import Events from "pages/Events/Events";
import EventInvites from "pages/EventInvites/EventInvites";
import adminRoutes from "pages/Admin/routes";

export const MAIN_LOCALHOST = "http://localhost:3000";

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    // MAIN: "/assets/logos/comfort-life-financial-main-logo.png",
    MAIN: "/assets/logos/comfort-life-new-logo.png",
    NEW: "/assets/logos/comfort-life-new-logo.png",
  },
  ICONS: {
    THINKING: "/assets/icons/thinking-icon.png",
  },
};

export const VIDEO_FINANCING = "/assets/video/coming-soon-video.mp4";
export const COMPANY_NAME = "Comfort Life Financial";

export const REACT_ROUTES: ReactRoutesType[] = [
  ...adminRoutes,
  {
    PATH: paths.index,
    ELEMENT: (
      <PageWrapper
        component={<ComingSoon />}
        showFooter={false}
        showNavbar={false}
      />
    ),
  },
  {
    PATH: paths.home,
    ELEMENT: <PageWrapper component={<Home />} />,
  },
  {
    PATH: paths.about,
    ELEMENT: <PageWrapper component={<AboutUs />} />,
  },
  {
    PATH: paths.contact,
    ELEMENT: <PageWrapper component={<Contact />} />,
  },
  {
    PATH: paths.portal,
    ELEMENT: <PageWrapper component={<Portal />} />,
  },
  {
    PATH: paths.solutions,
    ELEMENT: <PageWrapper component={<Solutions />} />,
  },
  {
    PATH: paths.events,
    ELEMENT: <PageWrapper component={<Events />} />,
  },
  {
    PATH: paths.event_invites,
    ELEMENT: <PageWrapper component={<EventInvites />} />,
  },
  {
    PATH: "*",
    ELEMENT: (
      <PageWrapper
        component={<InvalidRoute />}
        showFooter={false}
        showNavbar={false}
      />
    ),
  },
];

export const CONTACT_LIST = [
  {
    NAME: "Tel (US)",
    VALUE: "70 5066 4501 / 10 5501 3107",
    FLAG_CODE: "581",
    icon: <LocalPhoneIcon />,
  },
  {
    NAME: "E-mail",
    VALUE: "support@gocfs.pro",
    icon: <AlternateEmailIcon />,
  },
];

export const eventSteps = [
  {
    title: "01",
    subTitle: "Pick a Event",
    description: "",
  },
  {
    title: "02",
    subTitle: "Submit a form",
    description: "",
  },
  {
    title: "03",
    subTitle: "Get the refence ID",
    description: "",
  },
  {
    title: "04",
    subTitle: "Get in touch!",
    description: "",
  },
];

export const BLANK_VALUE: string = "—";
