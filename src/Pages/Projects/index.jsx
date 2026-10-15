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
  { title: "Cadastro de Empresas", category: "Projeto acadêmico · JavaScript", description: "Cadastro com classes, manipulação do DOM e recursos para editar e excluir empresas.", tags: ["JavaScript", "POO", "CRUD", "DOM"], preview: "jobs", image: "https://raw.githubusercontent.com/pietrossantos/portifolio_M2_PdA/main/img/logoJob.png", github: "https://github.com/pietrossantos/portifolio_M2_PdA" },
  { title: "Monitoramento de Asteroides", category: "Projeto de estudo · Back-end", description: "API com Express, organização em camadas e integração com MySQL e Sequelize.", tags: ["Node.js", "Express", "MySQL", "Sequelize"], preview: "asteroid", github: "https://github.com/pietrossantos/asteroid_monitoring_system" },
  { title: "GetCoffee", category: "Projeto de interface", description: "Página de temática café com HTML e CSS, voltada ao desenvolvimento de interfaces.", tags: ["HTML", "CSS", "Layout"], preview: "coffee", image: "https://raw.githubusercontent.com/pietrossantos/GetCoffee/main/assets/copo.png", github: "https://github.com/pietrossantos/GetCoffee" },
];

const Wrap = styled.main`
  width: min(1160px, calc(100% - 40px)); margin: 0 auto; padding: 64px 0 100px;
  .eyebrow { color: #6ff28c; text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 700; }
  h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); color: #f4fcff; margin: 14px 0; letter-spacing: -.045em; }
  .intro { color: #b8cdbb; max-width: 720px; line-height: 1.8; margin-bottom: 42px; }
  .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  .card { position: relative; isolation: isolate; --mouse-x: 50%; --mouse-y: 50%; }
  .card::before { content: ""; position: absolute; inset: 0; z-index: 2; pointer-events: none; border-radius: inherit; opacity: 0; background: radial-gradient(380px circle at var(--mouse-x) var(--mouse-y), rgba(100,255,149,.14), transparent 70%); transition: opacity .35s ease; }
  .card::after { content: ""; position: absolute; inset: 0; z-index: 3; pointer-events: none; border-radius: inherit; opacity: 0; box-shadow: inset 0 0 0 1px rgba(120,255,163,.45), 0 0 25px rgba(58,210,102,.09); transition: opacity .35s ease; }
  @media (hover: hover) and (pointer: fine) {
    .card:hover::before, .card:hover::after { opacity: 1; }
    .card.reveal.is-visible:hover { transform: translateY(-6px); }
  }
  .card { border: 1px solid #2a5b39; border-radius: 22px; overflow: hidden; background: linear-gradient(145deg, #102719, #07150c); box-shadow: 0 12px 40px rgba(0,0,0,.17); transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
  .card:hover { transform: translateY(-5px); border-color: #67eb8c; box-shadow: 0 18px 50px rgba(28,129,48,.15); }
  .image { display: block; width: 100%; height: 300px; object-fit: contain; object-position: center; padding: 18px; background: radial-gradient(circle at center, #15391e, #08170e 72%); border-bottom: 1px solid #285c37; transition: transform .35s ease; }
  .card:hover .image { transform: scale(1.025); }
  .art { position:relative; height:300px; display:grid; place-items:center; overflow:hidden; border-bottom:1px solid #285c37; background:radial-gradient(circle at center,#18432a,#07160e 72%); }
  .art img { width:min(65%,250px); height:220px; object-fit:contain; filter:drop-shadow(0 15px 24px rgba(0,0,0,.4)); transition:transform .3s ease; }
  .card:hover .art img { transform:scale(1.06); }
  .art.coffee { background:radial-gradient(circle,#61402c,#1a100d 72%); }
  .art.jobs img { width:min(48%,190px); }
  .art.asteroid { background:radial-gradient(circle,#18353b,#061013 74%); }
  .art svg { width:100%; height:100%; }
  .placeholder { height: 300px; display: grid; place-items: center; text-align: center; padding: 25px; background: radial-gradient(circle at 50% 35%, #194d29, #08170e 70%); border-bottom: 1px solid #285c37; }
  .placeholder span { font-family: "Oxanium", "Space Grotesk", sans-serif; font-size: clamp(23px, 3vw, 36px); letter-spacing: -.035em; font-weight: 700; color: #8df7a5; }
  .content { padding: clamp(20px, 3vw, 30px); }
  .category { color: #7bf39b; font-size: 12px; letter-spacing: .07em; font-weight: 700; }
  h2 { color: #f2fbff; font-size: clamp(1.4rem, 2.4vw, 1.9rem); margin: 12px 0; }
  .description { color: #b8cdbb; line-height: 1.75; min-height: 90px; }
  .tags { display: flex; gap: 8px; flex-wrap: wrap; margin: 20px 0 25px; }
  .tags span { border: 1px solid #2c6240; color: #b0e8bb; border-radius: 99px; padding: 7px 11px; font-size: 12px; }
  .links { display: flex; flex-wrap: wrap; gap: 10px; }
  .links a { text-decoration: none; font-weight: 700; border-radius: 9px; padding: 12px 16px; transition: filter .2s; }
  .links a:hover { filter: brightness(1.2); box-shadow: 0 0 18px rgba(92,232,122,.13); }
  .primary { background: linear-gradient(110deg, #41cc69, #91f5a7); color: #06150b; }
  .secondary { border: 1px solid #3b7650; color: #d4f9dd; }
  .footnote { margin-top: 34px; color: #8da994; font-size: 13px; line-height: 1.7; }
  @media (max-width: 740px) { .grid { grid-template-columns: 1fr; } .image { height: 260px; padding: 12px; } .description { min-height: 0; } }
  @media (prefers-reduced-motion: reduce) { .card, .card::before, .card::after { transition: none; } .card:hover, .card.reveal.is-visible:hover { transform: none; } }

`;

const moveSpotlight = (event) => {
  if (event.pointerType === "touch") return;
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
};

const Projects = () => (
  <>
    <Header />
    <Wrap>
      <span className="eyebrow reveal">Portfólio / Trabalhos selecionados</span>
      <h1 className="reveal">Projetos que contam minha história.</h1>
      <p className="intro reveal">Uma seleção de interfaces, desafios pessoais e experiências de desenvolvimento em equipe. Cada projeto representa uma etapa da minha evolução como desenvolvedor Front-end.</p>
      <div className="grid">
        {projects.map((project) => (
          <article className="card reveal" key={project.title} onPointerMove={moveSpotlight}>
            {project.preview === "asteroid" ? <div className="art asteroid" role="img" aria-label="Ilustração de um asteroide monitorado em órbita"><svg viewBox="0 0 500 300" aria-hidden="true"><defs><radialGradient id="rock"><stop stopColor="#b5b9a6"/><stop offset="1" stopColor="#45544f"/></radialGradient></defs>{Array.from({length:36},(_,i)=><circle key={i} cx={(i*97+29)%500} cy={(i*53+17)%300} r={i%5===0?1.6:.7} fill="#b1ffe0" opacity=".55"/>)}<ellipse cx="250" cy="150" rx="177" ry="68" fill="none" stroke="#5ce6b1" strokeWidth="1.5" opacity=".65" transform="rotate(-21 250 150)"/><ellipse cx="250" cy="150" rx="130" ry="114" fill="none" stroke="#5ce6b1" strokeDasharray="4 8" opacity=".25"/><path d="M212 97L253 77 301 96 326 131 310 172 270 201 222 192 183 157 189 121Z" fill="url(#rock)" stroke="#c1c8bb" strokeWidth="2"/><path d="M213 101L239 121 230 152 197 148M254 79L262 119 297 127 324 131M232 154L265 180 270 199" fill="none" stroke="#394841" strokeWidth="3"/><ellipse cx="242" cy="135" rx="15" ry="10" fill="#384942"/><ellipse cx="281" cy="164" rx="11" ry="7" fill="#394841"/><text x="44" y="44" fill="#a1f7ce" fontSize="12" letterSpacing="3">ASTEROID TRACKER</text><text x="303" y="263" fill="#a1f7ce" fontSize="10" letterSpacing="2">ORBITAL SCAN / 001</text></svg></div> : project.preview ? <div className={`art ${project.preview}`}><img src={project.image} alt={`Imagem original do projeto ${project.title}`} loading="lazy" /></div> : project.image ? <img className="image" src={project.image} alt={`Prévia do projeto ${project.title}`} loading="lazy" /> : <div className="placeholder" aria-hidden="true"><span>{project.title}</span></div>}
            <div className="content">
              <span className="category">{project.category}</span>
              <h2>{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="links">
                {project.live && <a className="primary" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title}`}>Ver projeto ↗</a>}
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
