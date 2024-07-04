import "./Activity.css";

import { useLoaderData } from "react-router-dom";

function Activity() {
  const activities = useLoaderData();

  return (
    <div>
      <h1> Bonjour je suis Activity</h1>;
      {activities.map((activity) => (
        <article key={activity.id}>
          <h2>{activity.name}</h2>
          <span>
            {activity.date} {activity.time}
          </span>
          <p>{activity.description}</p>
        </article>
      ))}
    </div>
  );
}

export default Activity;
