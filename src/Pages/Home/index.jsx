import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import MatrixGlobe from "../../components/MatrixGlobe";
import MyImage from "../../assets/img/MyImage.png";

const Page = styled.main`
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;
  padding: 44px 0 80px;
`;
const Hero = styled.section`
  min-height: min(680px, 78vh);
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 36px;
  .eyebrow { display: inline-block; color: #75ef92; letter-spacing: .16em; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 22px; }
  h1 { font-family: "Oxanium", "Space Grotesk", sans-serif; font-weight: 700; text-transform: none; color: #f3fbff; font-size: clamp(2.5rem, 5.6vw, 5.2rem); line-height: 1.07; letter-spacing: -.045em; margin-bottom: 24px; }
  h1 span { color: #7ff49c; font-weight: 800; letter-spacing: -.035em; }
  p { max-width: 570px; color: #b8cdbb; font-size: clamp(1rem, 1.4vw, 1.13rem); line-height: 1.8; }
  .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .actions a { text-decoration: none; padding: 14px 22px; border-radius: 10px; font-weight: 700; transition: transform .2s, border-color .2s; }
  .actions a:hover { transform: translateY(-3px); }
  .primary { background: linear-gradient(115deg, #42ce6b, #a1f7b0); color: #061323; }
  .secondary { border: 1px solid #326742; color: #d9f9df; }
  @media (max-width: 800px) { grid-template-columns: 1fr; min-height: auto; gap: 0; padding-top: 30px; .visual { max-width: 420px; margin: 10px auto 0; width: 100%; } }
`;
const Section = styled.section`
  margin-top: 80px;
  h2 { font-family: "Oxanium", "Space Grotesk", sans-serif; color: #f3fbff; font-size: clamp(1.5rem, 3vw, 2.2rem); margin-bottom: 18px; }
  p { color: #b8cdbb; line-height: 1.85; }
  .panel { border: 1px solid #285d37; background: linear-gradient(145deg, rgba(12, 40, 20, .9), rgba(6, 22, 12, .92)); border-radius: 20px; padding: clamp(22px, 4vw, 40px); }
  .about { display: grid; grid-template-columns: 1fr 160px; align-items: center; gap: 28px; }
  .about img { width: 160px; height: 160px; object-fit: cover; border-radius: 18px; border: 1px solid #3eaa61; }
  .chips { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 22px; }
  .chips span { padding: 9px 13px; border: 1px solid #2b6240; border-radius: 100px; color: #a5f4b5; font-size: .85rem; }
  @media (max-width: 600px) { .about { grid-template-columns: 1fr; } .about img { width: 120px; height: 120px; } }
`;
const Footer = styled.footer`
  padding: 45px 0 10px; color: #7995a8; font-size: .85rem; text-align: center;
  a { color: #83f39f; }
`;

const Home = () => (
  <>
    <Header />
    <Page>
      <Hero>
        <div>
          <span className="eyebrow">Front-end Developer · Rio de Janeiro</span>
          <h1>Olá, eu sou <span>Pietro Candido.</span></h1>
          <p>Transformo ideias em experiências digitais. Desenvolvo interfaces modernas e responsivas com React, JavaScript e atenção aos detalhes.</p>
          <div className="actions">
            <Link className="primary" to="/projects">Explorar projetos ↗</Link>
            <Link className="secondary" to="/contact">Entrar em contato</Link>
          </div>
        </div>
        <div className="visual"><MatrixGlobe /></div>
      </Hero>
      <Section>
        <div className="panel about">
          <div>
            <h2>Sobre mim</h2>
            <p>Sou desenvolvedor Front-end do Rio de Janeiro, com experiência na criação de páginas web e componentes reutilizáveis. Atuei na Web Social e concluí a formação Front-end da Vai na Web (191 horas). Gosto de unir código, criatividade e interfaces que funcionam bem em diferentes telas.</p>
            <div className="chips"><span>React.js</span><span>JavaScript</span><span>HTML & CSS</span><span>Styled-components</span><span>Git & GitHub</span></div>
          </div>
          <img src={MyImage} alt="Foto de Pietro Candido" loading="lazy" />
        </div>
      </Section>
      <Section>
        <div className="panel">
          <h2>Vamos construir algo juntos?</h2>
          <p>Estou aberto a oportunidades de desenvolvimento Front-end e a novos desafios.</p>
          <div className="chips">
            <span><a href="mailto:pietro.candido.work@gmail.com" style={{ color: "inherit" }}>E-mail profissional ↗</a></span>
            <span><a href="https://github.com/pietrossantos" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>GitHub ↗</a></span>
            <span><Link to="/skills" style={{ color: "inherit" }}>Minhas habilidades ↗</Link></span>
          </div>
        </div>
      </Section>
      <Footer>© {new Date().getFullYear()} Pietro Candido · Desenvolvido com React.</Footer>
    </Page>
  </>
);

export default Home;
