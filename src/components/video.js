import React from "react"

export default function Video({ source, loaded }) {
  const videoEl = React.createRef();
  function onVideoLoad() {
    videoEl.current.play();
    videoEl.current.playbackRate=0.8;
    loaded();
  }
  return (
    <video loop ref={videoEl} onLoadedData={onVideoLoad}>
      <source src={source} type="video/mp4" />
    </video>
  );
}