import { IMAGES } from "constants/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img src={IMAGES.COMPANY_LOGOS.MAIN} alt={IMAGES.COMPANY_LOGOS.MAIN} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <ul className="social-icons">
          <li>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <ul>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="bottom-footer">
        Copyright © 2022 Comfort Life Financial. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
