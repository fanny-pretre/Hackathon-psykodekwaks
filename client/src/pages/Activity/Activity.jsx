import "./Activity.css";

import { useLoaderData } from "react-router-dom";

function Activity() {
  const activities = useLoaderData();

  return (
    <div className="global-div-activity">
      <h1>Les activités disponibles</h1>;
      <section className="all-activities-cards">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.id}>
            <img
              className="image-activity-card"
              src="https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
              alt="paysage"
            />
            <div className="activity-info">
              <h2>{activity.name}</h2>
              <span>
                {activity.date} {activity.time}
              </span>
              <p>{activity.place}</p>
              <p className="activity-description">{activity.description}</p>
            </div>
            <div className="global-button-activity">
              <button className="button-participate" type="submit">
                PARTICIPER
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Activity;
