import { useEffect, useRef } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 1200; background: rgba(1,9,4,.86);
  backdrop-filter: blur(8px); display: grid; place-items: center; padding: 18px;
`;
const Panel = styled.section`
  width: min(670px,100%); max-height: min(85vh,850px); overflow-y: auto;
  background: linear-gradient(145deg,#102a19,#07150c);
  border: 1px solid #4b9b62; border-radius: 20px; color: #e9faed;
  box-shadow: 0 24px 80px rgba(0,0,0,.65),0 0 45px rgba(70,210,105,.1);
  .bar { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 16px 22px; border-bottom: 1px solid #2e6741; color: #9cd6ac; font: 600 12px "Oxanium",monospace; letter-spacing: .08em; }
  .close { border: 1px solid #447f54; background: #163b24; color: #d6f8df; border-radius: 8px; padding: 8px 12px; cursor: pointer; }
  .close:hover, .close:focus-visible { border-color: #9af7b2; }
  .body { padding: clamp(22px,5vw,36px); }
  .category { color: #8cf3a7; font-size: 12px; letter-spacing: .08em; }
  h2 { font: 700 clamp(1.65rem,4vw,2.5rem) "Oxanium",sans-serif; margin: 12px 0 18px; }
  p { color: #b9d4c0; line-height: 1.8; }
  h3 { color: #e7fbed; font: 600 15px "Oxanium",sans-serif; margin: 25px 0 12px; }
  .tags { display: flex; flex-wrap: wrap; gap: 9px; }
  .tags span { border: 1px solid #3a7650; border-radius: 99px; padding: 8px 12px; color: #b8f1c6; font-size: 12px; }
  .links { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .links a { padding: 12px 16px; border-radius: 9px; font-weight: 700; text-decoration: none; }
  .primary { background: linear-gradient(115deg,#43d16d,#a0f5b1); color: #06170c; }
  .secondary { border: 1px solid #4c9260; color: #d8fbe0; }
  .note { font-size: 12px; color: #91b69b; margin-top: 18px; }
`;

export default function ProjectDetailsModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = event => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); }
      if (event.key !== "Tab") return;
      const focusable = [...(panelRef.current?.querySelectorAll('button:not([disabled]), a[href]') ?? [])];
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <Overlay onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
      <Panel ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div className="bar"><span>PROJECT_DETAILS / ONLINE</span><button ref={closeRef} type="button" className="close" onClick={onClose} aria-label="Fechar detalhes do projeto">Fechar ×</button></div>
        <div className="body">
          <span className="category">{project.category}</span>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.description}</p>
          <h3>Tecnologias e características</h3>
          <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="links">
            {project.live && <a className="primary" href={project.live} target="_blank" rel="noopener noreferrer">Visitar projeto ↗</a>}
            <a className="secondary" href={project.github} target="_blank" rel="noopener noreferrer">Código no GitHub ↗</a>
          </div>
          {project.category.includes("equipe") && <p className="note">Projeto em equipe: a descrição apresenta especificamente minha participação.</p>}
        </div>
      </Panel>
    </Overlay>
  );
}
