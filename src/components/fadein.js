import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(true);
  const [ref, inView] = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) setVisible(true);
    else setVisible(false);
  }, [inView]);
  
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      {children}
    </div>
  );
}