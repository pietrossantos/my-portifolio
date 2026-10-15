import Header from "../../components/Header";

const groups = [
  { title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Styled-components", "Sass", "Design responsivo"] },
  { title: "Ferramentas e conhecimentos", skills: ["Git", "GitHub", "Vite", "React Router", "APIs REST", "Next.js (estudos)"] },
];

const Skills = () => (
  <>
    <Header />
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "32px 24px 64px", color: "#f5f5f5" }}>
      <h1>Habilidades e tecnologias</h1>
      <p>Ferramentas que utilizo em projetos Front-end e tecnologias que venho estudando.</p>
      {groups.map((group) => (
        <section key={group.title} style={{ marginTop: "32px" }}>
          <h2>{group.title}</h2>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "12px", listStyle: "none", padding: 0 }}>
            {group.skills.map((skill) => (
              <li key={skill} style={{ padding: "10px 16px", border: "1px solid #64748b", borderRadius: "8px" }}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  </>
);

export default Skills;
