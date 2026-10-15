import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

const Main = styled.main`
  min-height: calc(100vh - 90px); display: grid; place-items: center;
  width: min(1100px, calc(100% - 40px)); margin: 0 auto; padding: 55px 0 100px;
  .terminal { width: min(700px, 100%); position: relative; overflow: hidden; border: 1px solid #377e4c; border-radius: 22px; background: linear-gradient(145deg, #102b19, #06140b 75%); box-shadow: 0 24px 90px rgba(0,0,0,.35), 0 0 50px rgba(68,220,104,.07); }
  .terminal::before { content: ""; position: absolute; inset: 0 0 auto; height: 2px; background: linear-gradient(90deg, transparent, #8af9a5, transparent); }
  .top { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 24px; border-bottom: 1px solid #285c39; color: #9ac8a5; font: 600 12px "Oxanium", monospace; letter-spacing: .1em; }
  .dots { display: flex; gap: 7px; }
  .dots span { width: 9px; height: 9px; border-radius: 50%; background: #3d8654; }
  .dots span:first-child { background: #8cf4a4; box-shadow: 0 0 11px rgba(140,244,164,.55); }
  .body { padding: clamp(28px, 6vw, 62px); }
  .status { color: #84eea0; font: 700 12px "Oxanium", monospace; letter-spacing: .18em; text-transform: uppercase; }
  h1 { margin: 18px 0 12px; font: 800 clamp(5.5rem, 19vw, 10rem)/1 "Oxanium", monospace; letter-spacing: -.08em; color: #83f5a0; text-shadow: 0 0 36px rgba(77,222,113,.28); }
  h2 { margin: 0 0 14px; font: 700 clamp(1.35rem, 4vw, 2rem) "Oxanium", sans-serif; color: #effff2; }
  p { color: #aecbb6; line-height: 1.8; max-width: 470px; }
  .path { margin-top: 24px; color: #83c994; font: 500 13px "Oxanium", monospace; overflow-wrap: anywhere; }
  .path::before { content: "> "; color: #9affb4; }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .actions a { display: inline-flex; align-items: center; justify-content: center; padding: 13px 19px; border-radius: 10px; text-decoration: none; font-weight: 700; transition: transform .2s, box-shadow .2s; }
  .actions a:hover { transform: translateY(-3px); box-shadow: 0 0 25px rgba(83,235,124,.16); }
  .primary { background: linear-gradient(115deg,#44d36d,#a3f6b4); color: #06150b; }
  .secondary { border: 1px solid #417d53; color: #d4f8db; }
  @media(prefers-reduced-motion: reduce) { .actions a { transition: none; } .actions a:hover { transform: none; } }
`;

export default function NotFound() {
  return (
    <>
      <Header />
      <Main>
        <section className="terminal" aria-labelledby="not-found-title">
          <div className="top"><span>TERMINAL / ROUTE_NOT_FOUND</span><div className="dots" aria-hidden="true"><span/><span/><span/></div></div>
          <div className="body">
            <span className="status">[ ERRO DE NAVEGAÇÃO ]</span>
            <h1 aria-label="Erro 404">404</h1>
            <h2 id="not-found-title">Página não encontrada.</h2>
            <p>Essa rota não existe neste sistema. Você pode retornar à página inicial ou continuar explorando meus projetos.</p>
            <div className="path">ERROR: ROUTE_NOT_FOUND</div>
            <div className="actions">
              <Link className="primary" to="/">← Voltar ao início</Link>
              <Link className="secondary" to="/projects">Explorar projetos ↗</Link>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
}
