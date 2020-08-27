import React, { useState, useEffect } from "react"

export default function Video({ source, loaded, style }) {
  const [videoEl, setEl] = useState(null);
  useEffect(() => {
    if (videoEl != null && videoEl.readyState > 3) {
      loaded();
    }
    if (videoEl) console.log(videoEl.readyState)
  })

  function onVideoLoad() {
    videoEl.play();
    videoEl.playbackRate=0.8;
    loaded();
  }

  return (
    <video style={style} ref={v => setEl(v)} canPlay={onVideoLoad} onCanPlay={onVideoLoad} loop playsInline inline autoPlay muted>
      <source src={source} type="video/mp4" />
    </video>
  );
}