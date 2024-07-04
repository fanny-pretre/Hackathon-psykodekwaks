/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

export default function LoginPage() {
  const { setCurrentUser } = useOutletContext();

  const {
    register,
    handleSubmit, // You can use the errors to display on each field
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3310/api/auth/login",
        data
      );

      const info = await response.data;
      console.info(info.user);

      setCurrentUser(info.user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto my-12 bg-white p-8 rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Se connecter</h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            id="email"
            name="email"
            type="email"
            placeholder="jane@doe.fr"
            {...register("email", {
              required: "Ce champ est requis",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Adresse email invalide",
              },
            })}
          />
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            id="password"
            name="password"
            type="password"
            placeholder="*****"
            {...register("password", {
              required: "Ce champ est requis",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                message:
                  "Le mot de passe doit contenir entre 8 et 16 caractères, inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
              },
            })}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-red-400 text-white py-3 px-4 rounded-md hover:bg-red-600 transition duration-300"
      >
        Se connecter
      </button>
    </form>
  );
}
