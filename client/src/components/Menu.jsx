/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Menu({ currentUser }) {
  console.info(currentUser);
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
      <Link to={`/admin/${currentUser?.id}`}>
        <li className="menu-li">Profil</li>
      </Link>
      <Link to="/signup">
        <li className="menu-li">Inscription</li>
      </Link>
      <Link to="/login">
        <li className="menu-li">Connexion</li>
      </Link>
      <Link to="/logout">
        <li className="menu-li">Déconnexion</li>
      </Link>
    </ul>
  );
}

export default Menu;
