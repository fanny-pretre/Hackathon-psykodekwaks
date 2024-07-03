import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import "../styles/activity-add.css";

function ActivityAdd() {
  const navigate = useNavigate();

  const { activityTypes, users } = useLoaderData();

  // State variables to hold form data
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
      // API call to create a new activity
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/activities`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: activityName,
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
    <section className="activity-add">
      <h1>Proposez une activité !</h1>

      <form className="form-activity-add" onSubmit={onSubmit}>
        <div className="input-label-activity-add">
          <label htmlFor="username">Qui propose cette activité</label>
          <select
            id="username"
            name="username"
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">Choisissez le type d'activité</option>

            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstname}
              </option>
            ))}
          </select>
        </div>
        <div className="input-label-activity-add">
          <label htmlFor="activityname">Le nom de votre activité</label>
          <input
            type="text"
            id="activityname"
            placeholder="Le nom de votre activité"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
        </div>
        <div className="input-label-activity-add">
          <label htmlFor="place">Où aura lieu votre activité ?</label>
          <input
            type="text"
            id="place"
            placeholder="Lieu de votre activité"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="input-label-activity-add">
          <label htmlFor="date">Quand aura lieu votre activité ?</label>
          <input
            type="date"
            id="date"
            placeholder="Date de votre activité"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-label-activity-add">
          <label htmlFor="time">
            À quelle heure aura lieu votre activité ?
          </label>
          <input
            type="time"
            id="time"
            placeholder="Heure de votre activité"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="input-label-activity-add">
          <label htmlFor="activitytype">Choisissez le type d'activité</label>
          <select
            id="activitytype"
            name="activitytype"
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
        <div className="input-label-activity-add">
          <label htmlFor="activitydesc">
            Dites-nous en plus sur votre activité !
          </label>
          <input
            type="text"
            id="activitydesc"
            placeholder="Dites-nous en plus sur votre activité"
            value={activityDesc}
            onChange={(e) => setActivityDesc(e.target.value)}
          />
        </div>
        <div className="input-label-activity-add">
          <label htmlFor="image">Lien de l'image</label>
          <input
            type="text"
            id="image"
            placeholder="Lien de votre lien d'image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button className="button-activity-add" type="submit">
          Proposer cette activité
        </button>
      </form>
    </section>
  );
}

export default ActivityAdd;
