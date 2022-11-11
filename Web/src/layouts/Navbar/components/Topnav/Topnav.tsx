import { Button, Container } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./Topnav.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Topnav = () => {
  return (
    <div className="top-nav">
      <Container className="top-nav-container">
        <ul>
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
        </ul>
        <Button variant="outlined" className="contact-btn">
          <span>
            Contact Us Now <ArrowRightAltIcon />
          </span>
        </Button>
      </Container>
    </div>
  );
};

export default Topnav;
