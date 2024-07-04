import { useLoaderData } from 'react-router-dom';


export default function ActivityManagement() {
    const activity = useLoaderData();


    return (
        <>
            <h1 className="text-red-400">Gestion des activités</h1>
            <ul>
                {activity.map(activityItem => (
                    <li key={activityItem.id}>
                        <p>{activityItem.name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}