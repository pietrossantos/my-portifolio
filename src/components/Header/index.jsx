import { NavLink } from "react-router-dom";
import { NavHeader, NavPosition, NavTitles } from "./style";

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/projects", label: "Projetos" },
  { to: "/skills", label: "Habilidades" },
  { to: "/contact", label: "Contato" },
];

const Header = () => (
  <NavHeader>
    <NavLink className="brand" to="/" aria-label="Pietro Candido, voltar ao início">
      <span className="brand-mark">PC<span>.</span></span>
      <span className="brand-name">PIETRO CANDIDO</span>
    </NavLink>
    <NavPosition aria-label="Navegação principal">
      {links.map(({ to, label, end }) => (
        <li key={to}>
          <NavLink to={to} end={end} className={({ isActive }) => isActive ? "active" : ""}>
            <NavTitles>{label}</NavTitles>
          </NavLink>
        </li>
      ))}
    </NavPosition>
  </NavHeader>
);

export default Header;
