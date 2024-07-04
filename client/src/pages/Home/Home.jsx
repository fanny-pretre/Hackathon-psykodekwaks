import { Link } from "react-router-dom";
import "./Home.css";
import home from "../../assets/images/home.jpg";

function Home() {
  return (
    <body className="home-page">
      <img
        className="img-home"
        src={home}
        alt="groupe de personne se rassemblant"
      />
      <section>
        <div className="text-home">
          <h1 className="title-home"> Osez la pause</h1>
          <p className="p-home">
            Grâce à Connect, osez la pause avec vos collègues de travail. <br />
            Repas, afterwork ou activités, votre imagination est la seule
            limite.
          </p>
        </div>
        <div className="btn-home">
          <Link to="/activities">
            <button className="btn-see" type="button">
              Voir les activités
            </button>
          </Link>
          <Link to="/activityadd">
            <button className="btn-create" type="button">
              Proposer une activités
            </button>
          </Link>
        </div>
      </section>
    </body>
  );
}

export default Home;
