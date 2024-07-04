
import { useLoaderData } from 'react-router-dom';


function UserManagement() {

    const user = useLoaderData()
    return (

        <div>
            <h2>Gestion des utilisateurs</h2>
            <ul>
                {user.map((userItem) => (
                    <li key={userItem.id}>{userItem.firstname}</li>
                ))}
            </ul>

        </div>
    )

}

export default UserManagement;