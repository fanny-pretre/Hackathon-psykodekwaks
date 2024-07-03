import { useLoaderData } from "react-router-dom";

function Activity() {
  const activities = useLoaderData();

  return (
    <div>
      <h1> Bonjour je suis Activity</h1>;
      {activities.map((activity) => (
        <p key={activity.id}>{activity.name}</p>
      ))}
    </div>
  );
}

export default Activity;
