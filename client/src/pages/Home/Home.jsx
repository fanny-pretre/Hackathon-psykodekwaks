import { Link } from "react-router-dom";
import home2 from "../../assets/images/home2.jpg";

function Home() {
  return (
    <div className="h-screen flex overscroll-hidden">
      <div className="w-1/2 h-screen">
        <img
          className="w-full h-screen object-cover"
          src={home2}
          alt="groupe de personnes se rassemblant"
        />
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center p-8 text-black">
        <section className="text-center">
          <div className="mb-6">
            <h1 className="text-5xl font-bold">Osez la pause</h1>
            <p className="mt-4 text-xl">
              Grâce à Connect, osez la pause avec vos collègues de travail.
              <br />
              Repas, afterwork ou activités, votre imagination est la seule
              limite.
            </p>
          </div>
          <div className="flex space-x-4 justify-center mt-8">
            <Link to="/activities">
              <button
                type="button"
                className="px-6 py-3 bg-red-400 rounded-lg hover:bg-red-600 transition duration-300 text-white"
              >
                Voir les activités
              </button>
            </Link>
            <Link to="/activityadd">
              <button
                type="button"
                className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-400 transition duration-300 text-white"
              >
                Proposer une activité
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
