import Header from "../../components/Header";

const Contact = () => (
  <>
    <Header />
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px 64px", color: "#f5f5f5" }}>
      <h1>Entre em contato</h1>
      <p>Estou aberto a oportunidades em desenvolvimento Front-end e a conversas sobre projetos web.</p>
      <ul style={{ lineHeight: 2, paddingLeft: "24px" }}>
        <li>
          E-mail: <a style={{ color: "#93c5fd" }} href="mailto:pietro.candido.work@gmail.com">pietro.candido.work@gmail.com</a>
        </li>
        <li>
          LinkedIn: <a style={{ color: "#93c5fd" }} href="https://www.linkedin.com/in/pietrocandidocs/" target="_blank" rel="noopener noreferrer">Meu perfil profissional</a>
        </li>
        <li>
          GitHub: <a style={{ color: "#93c5fd" }} href="https://github.com/pietrossantos" target="_blank" rel="noopener noreferrer">@pietrossantos</a>
        </li>
      </ul>
    </main>
  </>
);

export default Contact;
