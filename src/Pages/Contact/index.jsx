import styled from "styled-components";
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";

const Layout = styled.main`
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 100px;
  h1 { font-size: clamp(2.4rem, 5vw, 4.5rem); color: #f3fcff; margin: 14px 0; }
  .eyebrow { color: #72ef8f; letter-spacing: .18em; font-size: 12px; text-transform: uppercase; }
  .intro { color: #b8cdbb; line-height: 1.8; max-width: 720px; margin-bottom: 35px; }
  .grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 28px; align-items: start; }
  .panel { background: #102719; border: 1px solid #2b613c; border-radius: 20px; padding: 28px; }
  h2 { margin: 0 0 20px; color: #f3fcff; }
  .links { display: grid; gap: 20px; }
  .links a { color: #91f4a9; overflow-wrap: anywhere; }
  .links span { color: #94b49c; display: block; margin-bottom: 5px; }
  .contact-terminal { position: relative; overflow: hidden; background: linear-gradient(145deg,#112c1b,#07170d); }
  .contact-terminal::before { content: ""; position: absolute; inset: 0 0 auto; height: 2px; background: linear-gradient(90deg,transparent,#7bf49e,transparent); }
  .terminal-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 26px; padding-bottom: 17px; border-bottom: 1px solid #2d6440; color: #8cbf9c; font: 600 12px "Oxanium",monospace; letter-spacing: .07em; }
  .dots { display: flex; gap: 6px; }
  .dots i { width: 8px; height: 8px; border-radius: 50%; background: #366e48; }
  .dots i:first-child { background: #6fe791; box-shadow: 0 0 10px rgba(111,231,145,.55); }
  .contact-terminal h2 { font-size: 1.45rem; }
  .terminal-lead { color: #b1d4ba; line-height: 1.7; margin: -5px 0 28px; }
  .links > div { padding: 14px 0; border-top: 1px solid rgba(94,175,112,.16); }
  .links > div:first-child { border-top: 0; }
  .links a { font-weight: 600; text-decoration-color: rgba(145,244,169,.35); text-underline-offset: 4px; }
  .links a:hover { color: #d5ffe0; }
  .copy-button { margin-top: 12px; padding: 10px 13px; border: 1px solid #4b9460; border-radius: 9px; background: rgba(52,140,75,.13); color: #b8f9c9; cursor: pointer; font: 600 12px "Oxanium",sans-serif; transition: background .2s,border-color .2s; }
  .copy-button:hover { background: rgba(66,174,95,.24); border-color: #8df5a9; }
  .copy-status { display: block; min-height: 1.5em; margin-top: 8px; color: #a7f5bc; font-size: 12px; }
  .form { min-width: 0; }
  @media (max-width: 850px) { .grid { grid-template-columns: 1fr; } }
`;

const EMAIL = "pietro.candido.work@gmail.com";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyStatus("E-mail copiado!");
    } catch {
      setCopyStatus("Não foi possível copiar. Use o link de e-mail acima.");
    }
  };
  return (
  <>
    <Header />
    <Layout>
      <span className="eyebrow reveal">Conexões / Oportunidades</span>
      <h1 className="reveal">Vamos conversar?</h1>
      <p className="intro reveal">Estou aberto a oportunidades de desenvolvimento Front-end e novos desafios. Escolha o canal que preferir.</p>
      <div className="grid">
        <section className="panel contact-terminal reveal">
          <div className="terminal-bar"><span>CONTACT_CHANNELS / ONLINE</span><span className="dots" aria-hidden="true"><i/><i/><i/></span></div>
          <h2>Onde me encontrar</h2>
          <p className="terminal-lead">Tem uma oportunidade, projeto ou ideia? Escolha um canal e vamos conversar.</p>
          <div className="links">
            <div><span>E-mail</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a><div><button type="button" className="copy-button" onClick={copyEmail}>Copiar e-mail ↗</button><span className="copy-status" role="status" aria-live="polite">{copyStatus}</span></div></div>
            <div><span>LinkedIn</span><a href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank" rel="noopener noreferrer">Perfil profissional</a></div>
            <div><span>GitHub</span><a href="https://github.com/pietrossantos" target="_blank" rel="noopener noreferrer">github.com/pietrossantos</a></div>
          </div>
        </section>
        <section className="form reveal" aria-label="Formulário de contato"><Form /></section>
      </div>
    </Layout>
  </>
  );
};
export default Contact;
