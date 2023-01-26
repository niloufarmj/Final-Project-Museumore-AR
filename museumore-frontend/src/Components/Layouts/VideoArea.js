import React from "react";
import "../../Assets/CSS/video.css";

function VideoArea(params) {
  return (
    <video controls className="video">
      <source src={params.src} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
}

export default VideoArea;
