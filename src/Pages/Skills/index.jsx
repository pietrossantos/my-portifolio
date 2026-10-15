import styled from "styled-components";
import Header from "../../components/Header";

const groups = [
  { title: "Desenvolvimento Front-end", subtitle: "Tecnologias que utilizo para construir interfaces", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Styled-components", "Sass", "Design responsivo"] },
  { title: "Ferramentas e práticas", subtitle: "Meu fluxo de desenvolvimento", items: ["Git", "GitHub", "Vite", "React Router", "Consumo de APIs REST", "Componentização"] },
  { title: "Em evolução", subtitle: "Assuntos que continuo aprofundando", items: ["Next.js", "Acessibilidade web", "Experiência do usuário", "Python"] },
];
const Layout = styled.main`
  width: min(1100px, calc(100% - 40px)); margin: 0 auto; padding: 64px 0 100px;
  .eyebrow { color: #71f08e; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; font-weight: 700; }
  h1 { color: #f3fcff; font-size: clamp(2.5rem, 5vw, 4.5rem); margin: 14px 0; letter-spacing: -.04em; }
  .intro { color: #b8cdbb; line-height: 1.8; max-width: 650px; margin-bottom: 42px; }
  .grid { display: grid; gap: 20px; }
  section { transition: border-color .25s, box-shadow .25s; border: 1px solid #2c613c; border-radius: 20px; background: linear-gradient(125deg, #102719, #07150c); padding: clamp(22px, 4vw, 34px); }
  section:hover { border-color:#65d98a; box-shadow:0 12px 35px rgba(37,132,67,.1); }
  h2 { font-size: clamp(1.35rem, 2.6vw, 1.8rem); margin: 0 0 8px; color: #eafaff; }
  section p { color: #8da9ba; margin: 0 0 24px; }
  ul { display: flex; gap: 12px; flex-wrap: wrap; padding: 0; margin: 0; list-style: none; }
  li { padding: 12px 17px; border: 1px solid #356c44; border-radius: 10px; color: #a0f6b3; background: rgba(27, 94, 42, .12); }
`;
const Skills = () => (
  <>
    <Header />
    <Layout>
      <span className="eyebrow reveal">Tecnologias / Aprendizado contínuo</span>
      <h1 className="reveal">Habilidades & ferramentas.</h1>
      <p className="intro reveal">Tecnologias que aplico em projetos e conhecimentos que venho desenvolvendo para criar experiências web cada vez melhores.</p>
      <div className="grid">{groups.map(group => (
        <section className="reveal" key={group.title}>
          <h2>{group.title}</h2><p>{group.subtitle}</p>
          <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
      ))}</div>
    </Layout>
  </>
);
export default Skills;
