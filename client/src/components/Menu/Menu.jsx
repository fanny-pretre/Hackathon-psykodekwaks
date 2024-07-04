import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import "./Menu.css";

function Menu() {
  return (
    <nav className="navbar">
      <img className="img-nav" src={logo} alt="logo Connect" />
      <ul className="ul-nav">
        <li className="menu-li">
          <Link to="/" />
          Accueil
        </li>

        <li className="menu-li">
          {" "}
          <Link to="/activities" />
          Toutes les activités
        </li>

        <li className="menu-li">
          {" "}
          <Link to="/login" />
          Connexion
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
