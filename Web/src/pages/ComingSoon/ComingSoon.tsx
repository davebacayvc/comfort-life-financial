import { IMAGES, VIDEO_FINANCING } from "constants/constants";
import Video from "pages/Home/components/Video/Video";
import "./ComingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <Video />
      <div className="content">
        <img src={IMAGES.COMPANY_LOGOS.MAIN} alt={IMAGES.COMPANY_LOGOS.MAIN} />
        <h5>Nice to meet you!</h5>
        <p>We are preparing something exciting & amazing for you.</p>
      </div>
    </div>
  );
};

export default ComingSoon;
