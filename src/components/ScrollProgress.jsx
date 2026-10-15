import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Track = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 1100;
  pointer-events: none;
  background: transparent;

  .fill {
    height: 100%;
    width: 100%;
    transform: scaleX(var(--scroll-progress, 0));
    transform-origin: left center;
    background: linear-gradient(90deg, #2cbd5b, #8bf6a7);
    box-shadow: 0 0 12px rgba(100, 255, 146, .65);
    will-change: transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .fill { transition: none; }
  }
`;

export default function ScrollProgress() {
  const location = useLocation();
  const fillRef = useRef(null);
  const frameRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      frameRef.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollable)) : 0;
      fillRef.current?.style.setProperty("--scroll-progress", String(progress));
      setVisible(scrollable > 0);
    };
    const requestUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(update);
    };
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    const observer = new ResizeObserver(requestUpdate);
    observer.observe(document.documentElement);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      observer.disconnect();
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [location.pathname]);

  return <Track aria-hidden="true" style={{ opacity: visible ? 1 : 0 }}><div className="fill" ref={fillRef} /></Track>;
}
