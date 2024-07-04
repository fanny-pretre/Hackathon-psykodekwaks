import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Activity() {
  const activities = useLoaderData();
  const [activityType, setActivityType] = useState("");

  return (
    <>
      <div className="flex justify-center my-8">
        <select
          className="block w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-400 focus:border-blue-400"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Les activités disponibles
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities
            .filter(
              (activity) =>
                activityType === "" || activity.name === activityType
            )
            .map((activity) => (
              <article
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                key={activity.id}
              >
                <img
                  className="w-full h-48 object-cover"
                  src="https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg"
                  alt="paysage"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {activity.title}
                  </h2>
                  <span className="text-gray-600">
                    {activity.date} {activity.time}
                  </span>
                  <p className="text-gray-600 mt-2">{activity.place}</p>
                  <p className="text-gray-600 mt-2">{activity.description}</p>
                  <p className="text-gray-600 mt-2">
                    Pour plus d'information contactez : <br />
                    {activity.firstname} {activity.lastname}
                  </p>
                </div>
                <div className="p-6 flex justify-center">
                  <button
                    className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    type="submit"
                  >
                    PARTICIPER
                  </button>
                </div>
              </article>
            ))}
        </section>
      </div>
    </>
  );
}

export default Activity;
