import "./Activity.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Activity() {
  const activities = useLoaderData();
  const [activityType, setActivityType] = useState("");

  return (
    <body>
      <div className="input-label-activity-add">
        <label htmlFor="activitytype">Choisissez le type d'activité</label>
        <select
          id="activitytype"
          name="activitytype"
          onChange={(e) => setActivityType(e.target.value)}
        >
          <option value="">Choisissez le type d'activité</option>

          {activities.map((activity) => (
            <option key={activity.activity_type_id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
      <div className="global-div-activity">
        <h1>Les activités disponibles</h1>;
        <section className="all-activities-cards">
          {activities
            .filter((activity) => activity.name === activityType)
            .map((activity) => (
              <article className="activity-card" key={activity.id}>
                <img
                  className="image-activity-card"
                  src="https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
                  alt="paysage"
                />
                <div className="activity-info">
                  <h2>{activity.title}</h2>
                  <span>
                    {activity.date} {activity.time}
                  </span>
                  <p>{activity.place}</p>
                  <p className="activity-description">{activity.description}</p>
                  <p>
                    Pour plus d'info contactez : <br /> {activity.firstname}{" "}
                    {activity.lastname}
                  </p>
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
    </body>
  );
}

export default Activity;
