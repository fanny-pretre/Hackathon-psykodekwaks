import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import "./Menu.css";

function Menu() {
  return (
    <nav className="navbar">
      <div className="container">
        <img className="img-nav" src={logo} alt="logo Connect" />
        <ul className="ul-nav">
          <li className="menu-li">
            <Link to="/">Accueil</Link>
          </li>
          <li className="menu-li">
            <Link to="/activities">Toutes les activités</Link>
          </li>
          <li className="menu-li">
            <Link to="/login">Connexion</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
