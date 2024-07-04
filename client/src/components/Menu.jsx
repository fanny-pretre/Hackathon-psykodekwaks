import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul>
      <Link to="/">
        <li className="menu-li">Accueil</li>
      </Link>
      <Link to="/activities">
        <li className="menu-li"> Toutes les activités</li>
      </Link>
      <Link to="/activityadd">
        <li className="menu-li">Proposer une activité</li>
      </Link>
      <Link to="/login">
        <li className="menu-li">Connexion</li>
      </Link>
      <Link to="/admin/:id">
        <li className="menu-li">Admin</li>
      </Link>
    </ul>
  );
}

export default Menu;
