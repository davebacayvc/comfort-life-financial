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
  const [openDrawer, setDrawer] = useState(false);
  const isMobileMode = useResponsive("mobile");
  const navLinks = [
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: paths.home,
        text: "Home",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: paths.about,
        text: "About Us",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: paths.contact,
        text: "Contact",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: paths.services,
        text: "Services",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
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
              {navLinks.map((link) => (
                <li>
                  <Link {...link.linkProps}>{link.linkProps.text}</Link>
                </li>
              ))}
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
            {navLinks.map((link) => (
              <li>
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
