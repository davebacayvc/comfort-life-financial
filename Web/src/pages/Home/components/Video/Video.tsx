import React from "react";

const Video = () => {
  return (
    <React.Fragment>
      <div className="video-container">
        <video controls={false} autoPlay={true} muted playsInline loop>
          <source src="/assets/video/coming-soon-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-overlay" />
    </React.Fragment>
  );
};

export default Video;
