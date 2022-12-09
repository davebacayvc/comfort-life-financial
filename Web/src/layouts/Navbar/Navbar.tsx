import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { IMAGES } from "constants/constants";
import Topnav from "./components/Topnav/Topnav";
import { Button, Container } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Drawer } from "@mui/material";
import useResponsive from "hooks/useResponsive";
import paths from "constants/routes";

const Navbar: React.FC = () => {
  const url = window.location.href;
  const currentPage = url.split("/")[3];
  const [openDrawer, setDrawer] = useState(false);
  const isMobileMode = useResponsive("mobile");
  const navLinks = [
    {
      className: "nav-item",
      linkProps: {
        className: `nav-links ${
          currentPage === paths.home.substring(1) ? "nav-links-active" : ""
        }`,
        to: paths.home,
        text: "Home",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: `nav-links ${
          currentPage === paths.events.substring(1) ? "nav-links-active" : ""
        }`,
        to: paths.events,
        text: "Events",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: `nav-links ${
          currentPage === paths.about.substring(1) ? "nav-links-active" : ""
        }`,
        to: paths.about,
        text: "About Us",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: `nav-links ${
          currentPage === paths.contact.substring(1) ? "nav-links-active" : ""
        }`,
        to: paths.contact,
        text: "Contact",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: `nav-links ${
          currentPage === paths.solutions.substring(1) ? "nav-links-active" : ""
        }`,
        to: paths.solutions,
        text: "Solutions",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: `nav-links ${
          currentPage === paths.portal.substring(1) ? "nav-links-active" : ""
        }`,
        to: paths.portal,
        text: "Portal",
      },
      dropdown: false,
    },
  ];

  return (
    <React.Fragment>
      <Topnav />
      <nav className="navbar">
        <Container className="container-navbar">
          <Link to="/" className="navbar-logo">
            <img
              src={IMAGES.COMPANY_LOGOS.MAIN}
              alt={IMAGES.COMPANY_LOGOS.MAIN}
            />
          </Link>
          {!isMobileMode && (
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link {...link.linkProps}>{link.linkProps.text}</Link>
                </li>
              ))}
              <li className="highlight-button">
                <Link to="/">TALK TO US</Link>
              </li>
            </ul>
          )}
          {isMobileMode && (
            <Button
              onClick={() => setDrawer(true)}
              className="navbar-mobile-button"
            >
              <MenuOpenIcon />
            </Button>
          )}
        </Container>
      </nav>
      {isMobileMode && (
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setDrawer(false)}
        >
          <ul className="nav-links-drawer">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link {...link.linkProps}>{link.linkProps.text}</Link>
              </li>
            ))}
          </ul>
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default Navbar;
