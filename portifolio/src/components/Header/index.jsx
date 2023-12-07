import { Link } from "react-router-dom";
import { NavHeader, NavPosition, NavTitles } from "./style";
import Logo from "../../../src/assets/video/Logo.mp4";

const Header = () => {
  return (
    <NavHeader>
      <Link to="/" style={{ textDecoration: "none" }}>
        <video
          width="180px"
          height="180px"
          src={Logo}
          alt="Logo"
          autoPlay
          loop
          muted
        />
      </Link>

      <NavPosition>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavTitles>Início </NavTitles>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <NavTitles>Projetos </NavTitles>
        </Link>
        <Link to="/skills" style={{ textDecoration: "none" }}>
          <NavTitles>Skills </NavTitles>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <NavTitles>Contato </NavTitles>
        </Link>
      </NavPosition>
    </NavHeader>
  );
};

export default Header;
