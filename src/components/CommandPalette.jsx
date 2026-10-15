import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const commands = [
  { label: "Início", description: "Página inicial e apresentação", path: "/", keywords: "home hero" },
  { label: "Projetos", description: "Conheça meus trabalhos", path: "/projects", keywords: "portfolio trabalhos" },
  { label: "Habilidades", description: "Tecnologias e ferramentas", path: "/skills", keywords: "skills tecnologias" },
  { label: "Contato", description: "Vamos conversar", path: "/contact", keywords: "email mensagem" },
];

const Trigger = styled.button`
  position: fixed; right: 22px; bottom: 22px; z-index: 50;
  display: flex; align-items: center; gap: 12px; padding: 11px 14px;
  border: 1px solid #397e50; border-radius: 12px; cursor: pointer;
  background: rgba(8, 27, 14, .94); color: #bdf8ca;
  box-shadow: 0 8px 30px rgba(0,0,0,.35);
  font: 600 13px "Oxanium", sans-serif;
  transition: border-color .2s, box-shadow .2s;
  &:hover { border-color: #83f6a2; box-shadow: 0 0 20px rgba(80,230,115,.18); }
  kbd { border: 1px solid #346b44; padding: 3px 6px; border-radius: 5px; color: #8bdb9f; font: inherit; }
  @media(max-width: 520px) { right: 14px; bottom: 14px; }
`;
const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 1000; display: grid; place-items: start center;
  padding: min(17vh, 150px) 16px 20px; background: rgba(1, 8, 4, .82);
  backdrop-filter: blur(9px);
`;
const Dialog = styled.div`
  width: min(580px, 100%); overflow: hidden; border: 1px solid #4d9c62;
  border-radius: 16px; background: #09190e; color: #e6f9e9;
  box-shadow: 0 24px 90px rgba(0,0,0,.7), 0 0 45px rgba(52,195,90,.12);
  font-family: "Oxanium", sans-serif;
  .top { display: flex; align-items: center; gap: 12px; padding: 17px; border-bottom: 1px solid #285838; }
  .prompt { color: #7bf49a; font-weight: 800; }
  input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: #effff1; font: 500 16px "Oxanium", sans-serif; }
  input::placeholder { color: #7f9c86; }
  .esc { color: #8cba99; background: #122b1b; border: 1px solid #305c3b; border-radius: 6px; padding: 4px 7px; font-size: 11px; }
  .results { padding: 9px; max-height: 310px; overflow-y: auto; }
  .option { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 12px; text-align: left; border: 1px solid transparent; border-radius: 9px; padding: 12px; background: transparent; color: #e5f6e8; cursor: pointer; font: inherit; }
  .option.active, .option:hover { border-color: #397b4c; background: rgba(67,191,99,.13); }
  .option strong { display: block; font-size: 15px; }
  .option small { display: block; color: #91af98; font-size: 12px; margin-top: 5px; }
  .option .arrow { color: #7df29c; }
  .empty { padding: 22px; color: #a8c3ad; text-align: center; }
  .footer { border-top: 1px solid #254b31; padding: 12px 17px; color: #83a68b; font-size: 11px; letter-spacing: .04em; }
`;

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const results = commands.filter(command =>
    `${command.label} ${command.description} ${command.keywords}`.toLocaleLowerCase("pt-BR")
      .includes(query.trim().toLocaleLowerCase("pt-BR"))
  );

  useEffect(() => {
    const onShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(current => !current);
      }
    };
    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setSelected(0);
    inputRef.current?.focus();
    const onEscape = event => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  const go = command => { navigate(command.path); setOpen(false); };
  const onKeys = event => {
    if (event.key === "ArrowDown") { event.preventDefault(); setSelected(index => Math.min(index + 1, results.length - 1)); }
    if (event.key === "ArrowUp") { event.preventDefault(); setSelected(index => Math.max(index - 1, 0)); }
    if (event.key === "Enter" && results[selected]) { event.preventDefault(); go(results[selected]); }
  };

  return (
    <>
      <Trigger type="button" onClick={() => setOpen(true)} aria-label="Abrir menu de comandos">
        <span>⌘ Navegar</span><kbd>Ctrl K</kbd>
      </Trigger>
      {open && <Overlay onMouseDown={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <Dialog role="dialog" aria-modal="true" aria-label="Menu de comandos">
          <div className="top"><span className="prompt">›_</span>
            <input ref={inputRef} value={query} onChange={event => { setQuery(event.target.value); setSelected(0); }} onKeyDown={onKeys} placeholder="Para onde vamos?" aria-label="Pesquisar páginas" />
            <span className="esc">ESC</span>
          </div>
          <div className="results" role="listbox" aria-label="Páginas">
            {results.length ? results.map((command, index) => (
              <button key={command.path} type="button" className={`option ${index === selected ? "active" : ""}`} onMouseEnter={() => setSelected(index)} onClick={() => go(command)} role="option" aria-selected={index === selected}>
                <span><strong>{command.label}</strong><small>{command.description}</small></span><span className="arrow">↗</span>
              </button>
            )) : <div className="empty">Nenhum comando encontrado.</div>}
          </div>
          <div className="footer">↑ ↓ navegar &nbsp; · &nbsp; Enter selecionar &nbsp; · &nbsp; Esc fechar</div>
        </Dialog>
      </Overlay>}
    </>
  );
}
