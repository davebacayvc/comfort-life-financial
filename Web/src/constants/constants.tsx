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
import Services from "pages/Services/Services";
import Events from "pages/Events/Events";

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "/assets/logos/comfort-life-financial-main-logo.png",
  },
  ICONS: {
    THINKING: "/assets/icons/thinking-icon.png",
  },
};

export const VIDEO_FINANCING = "/assets/video/coming-soon-video.mp4";
export const COMPANY_NAME = "Comfort Life Financial";

export const REACT_ROUTES: ReactRoutesType[] = [
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
    PATH: paths.services,
    ELEMENT: <PageWrapper component={<Services />} />,
  },
  {
    PATH: paths.events,
    ELEMENT: <PageWrapper component={<Events />} />,
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
    NAME: "Tel (PH)",
    VALUE: "+639 123 2223",
    icon: <LocalPhoneIcon />,
  },
  {
    NAME: "E-mail",
    VALUE: "comfortlife@test.com",
    icon: <AlternateEmailIcon />,
  },
  {
    NAME: "Business Inquiry",
    VALUE: "comfortlife@test.com",
    icon: <AlternateEmailIcon />,
  },
  {
    NAME: "General Inquiry",
    VALUE: "comfortlife@test.com",
    icon: <AlternateEmailIcon />,
  },
];

export const eventSteps = [
  {
    title: "01",
    subTitle: "Pick a Event",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    title: "02",
    subTitle: "Submit a form",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    title: "03",
    subTitle: "Get the refence ID",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    title: "04",
    subTitle: "Get in touch!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
];
