import React from "react"

export default function Video({ source, loaded, style }) {
  const videoEl = React.createRef();
  function onVideoLoad() {
    videoEl.current.play();
    videoEl.current.playbackRate=0.8;
    loaded();
  }
  return (
    <video style={style} ref={videoEl} onCanPlayThrough={onVideoLoad} loop playsInline inline autoPlay muted>
      <source src={source} type="video/mp4" />
    </video>
  );
}