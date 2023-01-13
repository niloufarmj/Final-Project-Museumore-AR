import React, { useEffect, useRef } from "react";

function MindARViewer() {
  const sceneRef = useRef(null);
  const videoBtnRef = useRef(null);
  const audioBtnRef = useRef(null);
  useEffect(() => {
    // const sceneEl = sceneRef.current;
    // const arSystem = sceneEl.systems["mindar-image-system"];
    // arSystem.start();

    const video_btn = videoBtnRef.current;
    video_btn.addEventListener("click", (event) => {
      console.log("Video element was clicked!");
    });
    const audio_btn = audioBtnRef.current;
    audio_btn.addEventListener("click", (event) => {
      console.log("Audio element was clicked!");
    });

    return () => {
      // arSystem.stop();
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc: ../../Assets/ARTarget/targets.mind"
      color-space="sRGB"
      //embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
      height="200"
    >
      <a-camera
        position="0 0 0"
        look-controls="enabled: false"
        cursor="fuse: false; rayOrigin: mouse;"
        raycaster="far:
                ${customFields.libVersion}; objects: .clickable"
        
      ></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-image
          ref={videoBtnRef}
          class="clickable"
          src="../../Assets/Media/video-btn.png"
          width="0.2"
          height="0.2"
          position="0.3 0 0"
        ></a-image>
        <a-image
          ref={audioBtnRef}
          class="clickable"
          src="../../Assets/Media/audio-btn.png"
          width="0.2"
          height="0.2"
          position="-0.3 0 0"
        ></a-image>
      </a-entity>
    </a-scene>
    
  );
}

export default MindARViewer;
