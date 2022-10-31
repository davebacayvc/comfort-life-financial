import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "./components/Dropdown/Dropdown";
import { Button } from "@mui/material/";
import "./Navbar.scss";
import { IMAGES } from "constants/constants";

const Navbar: React.FC = () => {
  const navLinks = [
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: "/",
        text: "Home",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: "/about",
        text: "About Us",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: "/contact",
        text: "Contact",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: "/services",
        text: "Services",
      },
      dropdown: false,
    },
    {
      className: "nav-item",
      linkProps: {
        className: "nav-links",
        to: "/portal",
        text: "Portal",
      },
      dropdown: false,
    },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={IMAGES.COMPANY_LOGOS.MAIN} alt={IMAGES.COMPANY_LOGOS.MAIN} />
      </Link>
      <ul className="nav-menu">
        {navLinks.map((link) => (
          <React.Fragment>
            <li className="nav-item">
              <Link {...link.linkProps}>{link.linkProps.text}</Link>
            </li>
            {link.dropdown && <Dropdown />}
          </React.Fragment>
        ))}
      </ul>
      <Button />
    </nav>
  );
};

export default Navbar;
