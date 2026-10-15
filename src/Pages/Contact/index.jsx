import styled from "styled-components";
import Header from "../../components/Header";
import Form from "../../components/Form";

const Layout = styled.main`
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 100px;
  h1 { font-size: clamp(2.4rem, 5vw, 4.5rem); color: #f3fcff; margin: 14px 0; }
  .eyebrow { color: #65e8b5; letter-spacing: .18em; font-size: 12px; text-transform: uppercase; }
  .intro { color: #b7c9d7; line-height: 1.8; max-width: 720px; margin-bottom: 35px; }
  .grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 28px; align-items: start; }
  .panel { background: #0b2839; border: 1px solid #285569; border-radius: 20px; padding: 28px; }
  h2 { margin: 0 0 20px; color: #f3fcff; }
  .links { display: grid; gap: 20px; }
  .links a { color: #8deac8; overflow-wrap: anywhere; }
  .links span { color: #94adbe; display: block; margin-bottom: 5px; }
  .form { min-width: 0; }
  @media (max-width: 850px) { .grid { grid-template-columns: 1fr; } }
`;

const Contact = () => (
  <>
    <Header />
    <Layout>
      <span className="eyebrow">Conexões / Oportunidades</span>
      <h1>Vamos conversar?</h1>
      <p className="intro">Estou aberto a oportunidades de desenvolvimento Front-end e novos desafios. Escolha o canal que preferir.</p>
      <div className="grid">
        <section className="panel">
          <h2>Onde me encontrar</h2>
          <div className="links">
            <div><span>E-mail</span><a href="mailto:pietro.candido.work@gmail.com">pietro.candido.work@gmail.com</a></div>
            <div><span>LinkedIn</span><a href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank" rel="noopener noreferrer">Perfil profissional</a></div>
            <div><span>GitHub</span><a href="https://github.com/pietrossantos" target="_blank" rel="noopener noreferrer">github.com/pietrossantos</a></div>
          </div>
        </section>
        <section className="form" aria-label="Formulário de contato"><Form /></section>
      </div>
    </Layout>
  </>
);
export default Contact;
