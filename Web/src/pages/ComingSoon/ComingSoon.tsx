import { IMAGES, VIDEO_FINANCING } from "constants/constants";
import "./ComingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <video width="400" controls autoPlay={true} muted playsInline loop>
        <source src="/assets/video/coming-soon-video.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <img src={IMAGES.COMPANY_LOGOS.MAIN} alt={IMAGES.COMPANY_LOGOS.MAIN} />
      <h5>Nice to meet you!</h5>
      <p>We are preparing something exciting & amazing for you.</p>
    </div>
  );
};

export default ComingSoon;
