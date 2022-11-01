import { Button, Container } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./Topnav.scss";

const Topnav = () => {
  return (
    <div className="top-nav">
      <Container className="top-nav-container">
        <ul>
          <li>
            <CallIcon /> <span>+880 013 143 206</span>
          </li>
          <li>
            <EmailIcon /> <span>test@gmail.com</span>
          </li>
        </ul>
        <Button variant="outlined" className="contact-btn">
          Contact Us Now
        </Button>
      </Container>
    </div>
  );
};

export default Topnav;
