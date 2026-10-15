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
  .grid { display: grid; gap: 22px; }
  .panel-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 20px; }
  .panel-code { color: #74f19a; font: 600 12px "Oxanium", monospace; letter-spacing: .14em; opacity: .85; white-space: nowrap; }
  .panel-status { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 12px; color: #85c99a; font: 600 11px "Oxanium", monospace; letter-spacing: .12em; text-transform: uppercase; }
  .panel-status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #7df39d; box-shadow: 0 0 9px #7df39d; }
  .panel-line { height: 1px; margin-bottom: 24px; background: linear-gradient(90deg, #62ec90, rgba(98,236,144,.1) 70%, transparent); }
  .panel-count { margin-top: 22px; color: #80aa8b; font: 500 11px "Oxanium", monospace; letter-spacing: .1em; text-transform: uppercase; }
  section { position: relative; overflow: hidden; }
  section::before { content: ""; position: absolute; top: 0; left: 24px; right: 24px; height: 1px; background: linear-gradient(90deg, transparent, rgba(113,240,142,.6), transparent); opacity: .65; }
  section { transition: border-color .25s, box-shadow .25s; border: 1px solid #2c613c; border-radius: 20px; background: linear-gradient(125deg, #102719, #07150c); padding: clamp(22px, 4vw, 34px); }
  section:hover { border-color:#65d98a; box-shadow:0 12px 35px rgba(37,132,67,.1); }
  h2 { font-size: clamp(1.35rem, 2.6vw, 1.8rem); margin: 0 0 8px; color: #eafaff; }
  section p { color: #8da9ba; margin: 0 0 24px; }
  ul { display: flex; gap: 12px; flex-wrap: wrap; padding: 0; margin: 0; list-style: none; }
  li { padding: 12px 17px; border: 1px solid #356c44; border-radius: 10px; color: #a0f6b3; background: rgba(27, 94, 42, .12); font-family: "Oxanium", sans-serif; font-weight: 600; transition: background .25s ease, border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
  @media (hover: hover) and (pointer: fine) { li:hover { transform: translateY(-3px); background: rgba(54,145,78,.22); border-color: #7bf49e; box-shadow: 0 7px 24px rgba(47,186,87,.14); } }
  @media (max-width: 520px) { .panel-top { flex-direction: column; gap: 4px; } li { padding: 10px 12px; font-size: .9rem; } }
  @media (prefers-reduced-motion: reduce) { li { transition: none; } }
`;
const Skills = () => (
  <>
    <Header />
    <Layout>
      <span className="eyebrow reveal">Tecnologias / Aprendizado contínuo</span>
      <h1 className="reveal">Habilidades & ferramentas.</h1>
      <p className="intro reveal">Tecnologias que aplico em projetos e conhecimentos que venho desenvolvendo para criar experiências web cada vez melhores.</p>
      <div className="grid">{groups.map((group, index) => (
        <section className="reveal" key={group.title}>
          <div className="panel-top"><div><div className="panel-status">{index === 2 ? "Aprendizado contínuo" : "Stack ativa"}</div><h2>{group.title}</h2><p>{group.subtitle}</p></div><span className="panel-code">MOD_{String(index + 1).padStart(2, "0")}</span></div>
          <div className="panel-line" aria-hidden="true" />
          <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="panel-count">{String(group.items.length).padStart(2, "0")} tópicos listados</div>
        </section>
      ))}</div>
    </Layout>
  </>
);
export default Skills;
