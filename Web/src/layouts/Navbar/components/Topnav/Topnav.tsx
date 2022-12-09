import { Container } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./Topnav.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Topnav = () => {
  return (
    <div className="top-nav">
      <Container className="top-nav-container">
        <ul className="left-icons">
          <li>
            <div className="top-nav-icon">
              <CallIcon />
            </div>
            <span>+880 013 143 206</span>
          </li>
          <li>
            <div className="top-nav-icon">
              <EmailIcon />
            </div>
            <span>test@gmail.com</span>
          </li>
          <li>
            <div className="top-nav-icon">
              <LocationOnIcon />
            </div>
            <span>Dasmarinas, Cavite, Philippines</span>
          </li>
        </ul>
        <ul className="right-icons">
          <li className="icon-text">
            <span>Follow Our Socials</span>
          </li>
          <li>
            <div className="top-nav-icon">
              <FaFacebookF />
            </div>
          </li>
          <li>
            <div className="top-nav-icon">
              <FaTwitter />
            </div>
          </li>
          <li>
            <div className="top-nav-icon">
              <FaLinkedinIn />
            </div>
          </li>
          <li>
            <div className="top-nav-icon">
              <FaInstagram />
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Topnav;
