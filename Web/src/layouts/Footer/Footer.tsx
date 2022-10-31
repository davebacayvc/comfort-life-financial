import { IMAGES } from "constants/constants";
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
      </div>
      <div className="bottom-footer">
        Copyright © 2022 Comfort Life Financial. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
