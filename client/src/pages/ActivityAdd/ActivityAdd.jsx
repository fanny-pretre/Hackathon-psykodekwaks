import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

function ActivityAdd() {
  const navigate = useNavigate();
  const { activityTypes, users } = useLoaderData();
  console.info(users);

  const [userId, setUserId] = useState("");
  const [activityName, setActivityName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [activityTypeId, setActivityTypeId] = useState("");
  const [activityDesc, setActivityDesc] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/activities`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: activityName,
            place,
            date,
            time,
            activity_type_id: activityTypeId,
            description: activityDesc,
            image,
            is_corporate: true,
            user_id: userId,
          }),
        }
      );

      if (response.status === 201) {
        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Proposez une activité !
      </h1>
      <form
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Qui propose cette activité
          </label>
          <select
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">Choisissez qui propose l'activité</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="activityname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Le nom de votre activité
          </label>
          <input
            type="text"
            id="activityname"
            placeholder="Le nom de votre activité"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="place"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Où aura lieu votre activité ?
          </label>
          <input
            type="text"
            id="place"
            placeholder="Lieu de votre activité"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Quand aura lieu votre activité ?
          </label>
          <input
            type="date"
            id="date"
            placeholder="Date de votre activité"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            À quelle heure aura lieu votre activité ?
          </label>
          <input
            type="time"
            id="time"
            placeholder="Heure de votre activité"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="activitytype"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choisissez le type d'activité
          </label>
          <select
            id="activitytype"
            name="activitytype"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setActivityTypeId(e.target.value)}
          >
            <option value="">Choisissez le type d'activité</option>
            {activityTypes.map((activityType) => (
              <option key={activityType.id} value={activityType.id}>
                {activityType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="activitydesc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Dites-nous en plus sur votre activité !
          </label>
          <input
            type="text"
            id="activitydesc"
            placeholder="Dites-nous en plus sur votre activité"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={activityDesc}
            onChange={(e) => setActivityDesc(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Lien de l'image
          </label>
          <input
            type="text"
            id="image"
            placeholder="Lien de votre image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Proposer cette activité
        </button>
      </form>
    </section>
  );
}

export default ActivityAdd;
