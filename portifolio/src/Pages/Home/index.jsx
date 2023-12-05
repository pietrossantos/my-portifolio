import { NavHeader, NavPosition, NavTitles } from "./style";

const Home = () => {
  return (
    <>
      <NavHeader>
        <video
          width="180px"
          height="180px"
          src="../../../public/Logo.mp4"
          autoPlay
          loop
          muted
        />
        <NavPosition>
          <NavTitles>Início</NavTitles>
          <NavTitles>Projetos</NavTitles>
          <NavTitles>Skills</NavTitles>
          <NavTitles>Contato</NavTitles>
        </NavPosition>
      </NavHeader>
    </>
  );
};

export default Home;
