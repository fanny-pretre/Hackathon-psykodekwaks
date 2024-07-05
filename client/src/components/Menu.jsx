/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Menu({ currentUser }) {
  return (
    <nav className="bg-gradient-to-r from-red-400 to-red-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Connect</div>
        <ul className="flex space-x-6">
          <Link to="/">
            <li className="text-white hover:text-white transition-colors duration-300">
              Accueil
            </li>
          </Link>
          <Link to="/activities">
            <li className="text-white hover:text-white transition-colors duration-300">
              Toutes les activités
            </li>
          </Link>
          <Link to="/activityadd">
            <li className="text-white hover:text-white transition-colors duration-300">
              Proposer une activité
            </li>
          </Link>
          <Link to="/login">
            <li className="text-white hover:text-white transition-colors duration-300">
              Connexion
            </li>
          </Link>
          <Link to="/signup">
            <li className="text-white hover:text-white transition-colors duration-300">
              Inscription
            </li>
          </Link>
          {currentUser && (
            <>
              <Link to={`/admin/${currentUser?.id}`}>
                <li className="text-white hover:text-white transition-colors duration-300">
                  Profil
                </li>
              </Link>
              <Link to="/logout">
                <li className="text-white hover:text-white transition-colors duration-300">
                  Déconnexion
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
