import styled from "styled-components";
import Header from "../../components/Header";
import calculatorImage from "../../assets/img/mobile (3).png";
import khrisImage from "../../assets/img/mobile (4).png";
import robertaImage from "../../assets/img/mobile (5).png";
import portfolioImage from "../../assets/img/mobile (1).png";

const projects = [
  { title: "Khris Herreiro", category: "Projeto em equipe · Web Social", description: "Contribuí para o formulário e uma seção de apresentação da página durante minha atuação na Web Social.", tags: ["Front-end", "Formulários", "Trabalho em equipe"], image: khrisImage, live: "https://khrisdecora.com.br/", github: "https://github.com/pietrossantos/khris-herreiro", featured: true },
  { title: "Roberta Rocha", category: "Projeto em equipe · Web Social", description: "Participei do desenvolvimento de seções da interface, trabalhando com organização de componentes e implementação visual.", tags: ["Front-end", "Componentes", "UI"], image: robertaImage, live: "https://robertarocha.netlify.app/", github: "https://github.com/pietrossantos/roberta-rocha", featured: true },
  { title: "Calculadora", category: "Projeto pessoal", description: "Calculadora inspirada na experiência mobile, com operações matemáticas básicas e interface própria.", tags: ["JavaScript", "Interface", "Lógica"], image: calculatorImage, live: "https://calculator-p.vercel.app/", github: "https://github.com/pietrossantos/Calculator-P" },
  { title: "Meu portfólio", category: "Projeto pessoal · Em evolução", description: "Meu espaço profissional, construído com React e Styled-components. Em constante evolução, com foco em experiência, acessibilidade e responsividade.", tags: ["React", "Styled-components", "Vite"], image: portfolioImage, live: "https://my-portifolio-drab.vercel.app/", github: "https://github.com/pietrossantos/my-portifolio" },
];

const Wrap = styled.main`
  width: min(1160px, calc(100% - 40px)); margin: 0 auto; padding: 64px 0 100px;
  .eyebrow { color: #64e8b5; text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 700; }
  h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); color: #f4fcff; margin: 14px 0; letter-spacing: -.045em; }
  .intro { color: #aec5d4; max-width: 720px; line-height: 1.8; margin-bottom: 42px; }
  .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  .card { border: 1px solid #255266; border-radius: 22px; overflow: hidden; background: linear-gradient(145deg, #0c2636, #071523); transition: transform .25s ease, border-color .25s ease; }
  .card:hover { transform: translateY(-5px); border-color: #53caa8; }
  .image { display: block; width: 100%; height: 270px; object-fit: cover; object-position: top; background: #102436; border-bottom: 1px solid #255266; }
  .content { padding: clamp(20px, 3vw, 30px); }
  .category { color: #69e5b4; font-size: 12px; letter-spacing: .07em; font-weight: 700; }
  h2 { color: #f2fbff; font-size: clamp(1.4rem, 2.4vw, 1.9rem); margin: 12px 0; }
  .description { color: #b7c9d7; line-height: 1.75; min-height: 90px; }
  .tags { display: flex; gap: 8px; flex-wrap: wrap; margin: 20px 0 25px; }
  .tags span { border: 1px solid #2c5c68; color: #b0e8df; border-radius: 99px; padding: 7px 11px; font-size: 12px; }
  .links { display: flex; flex-wrap: wrap; gap: 10px; }
  .links a { text-decoration: none; font-weight: 700; border-radius: 9px; padding: 12px 16px; transition: filter .2s; }
  .links a:hover { filter: brightness(1.2); }
  .primary { background: linear-gradient(110deg, #55dfae, #4eacf1); color: #061523; }
  .secondary { border: 1px solid #3b7080; color: #d4f9ef; }
  .footnote { margin-top: 34px; color: #829eb0; font-size: 13px; line-height: 1.7; }
  @media (max-width: 740px) { .grid { grid-template-columns: 1fr; } .image { height: 230px; } .description { min-height: 0; } }
  @media (prefers-reduced-motion: reduce) { .card { transition: none; } }
`;

const Projects = () => (
  <>
    <Header />
    <Wrap>
      <span className="eyebrow">Portfólio / Trabalhos selecionados</span>
      <h1>Projetos que contam minha história.</h1>
      <p className="intro">Uma seleção de interfaces, desafios pessoais e experiências de desenvolvimento em equipe. Cada projeto representa uma etapa da minha evolução como desenvolvedor Front-end.</p>
      <div className="grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <img className="image" src={project.image} alt={`Prévia do projeto ${project.title}`} loading="lazy" />
            <div className="content">
              <span className="category">{project.category}</span>
              <h2>{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="links">
                <a className="primary" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title}`}>Ver projeto ↗</a>
                <a className="secondary" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} no GitHub`}>Código no GitHub ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="footnote">Os trabalhos realizados em equipe são apresentados com indicação da minha participação. Alguns links externos podem mudar conforme a disponibilidade dos sites.</p>
    </Wrap>
  </>
);

export default Projects;
