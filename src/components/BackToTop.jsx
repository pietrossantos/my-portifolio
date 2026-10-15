import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const TopButton = styled.button`
  position: fixed;
  right: 22px;
  bottom: 88px;
  z-index: 49;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid #397e50;
  border-radius: 12px;
  background: rgba(8, 27, 14, .94);
  color: #bdf8ca;
  box-shadow: 0 8px 30px rgba(0,0,0,.35);
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "12px")});
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity .25s, transform .25s, visibility .25s, border-color .2s, box-shadow .2s;
  &:hover { border-color: #83f6a2; box-shadow: 0 0 20px rgba(80,230,115,.18); }
  &:focus-visible { outline: 2px solid #a1f7b0; outline-offset: 3px; }
  svg { width: 20px; height: 20px; }
  @media (max-width: 520px) { right: 14px; bottom: 80px; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 320);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [location.pathname]);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <TopButton
      type="button"
      $visible={visible}
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m6 14 6-6 6 6" />
        <path d="M12 8v12" />
      </svg>
    </TopButton>
  );
}
