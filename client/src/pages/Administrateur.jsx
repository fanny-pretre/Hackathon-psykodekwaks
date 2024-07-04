
import { Link, useParams, useLoaderData } from 'react-router-dom';

function Administrateur() {

    const { id } = useParams();
    const user = useLoaderData(id);
    console.info(user)

    return (
        <>
            <h1> Page Administrateur </h1>
            <Link to={`/admin/utilisateur/${user.id}`}>
                <p> Mes informations </p>
            </Link>

            <Link to="/admin/utilisateurgestion">
                <p> Gestion des utilisateurs</p>
            </Link>
            <Link to="/admin/activitegestion">
                <p> Gérer des activités</p>
            </Link>

            <p> Se déconnecter</p>

        </>
    );
}

export default Administrateur;