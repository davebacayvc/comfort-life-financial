import AboutUs from "pages/AboutUs/AboutUs";
import Home from "pages/Home/Home";
import { ReactRoutesType } from "./type";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "/assets/logos/comfort-life-financial-main-logo.png",
  },
  ICONS: {
    THINKING: "/assets/icons/thinking-icon.png"
  }
};

export const VIDEO_FINANCING = "/assets/video/coming-soon-video.mp4";
export const COMPANY_NAME = "Comfort Life Financial";

export const REACT_ROUTES: ReactRoutesType[] = [
  {
    PATH: "/",
    ELEMENT: <PageWrapper component={<Home />} />,
  },
  {
    PATH: "/about",
    ELEMENT: <PageWrapper component={<AboutUs />} />,
  },
];
