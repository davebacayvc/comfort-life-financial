import { IMAGES } from "constants/constants";
import paths from "constants/routes";
import { Link } from "react-router-dom";
import "./InvalidRoute.scss";

const InvalidRoute = () => {
  return (
    <div className="not-found-container">
      <img src={IMAGES.COMPANY_LOGOS.MAIN} alt={IMAGES.COMPANY_LOGOS.MAIN} />
      <h3>Oops! Page not found</h3>
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <h2>we are sorry, but the page you requested was not found.</h2>
      <Link to={paths.home}>Back to the Home Page</Link>
    </div>
  );
};

export default InvalidRoute;
