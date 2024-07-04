/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.info(data);
      await axios.post("http://localhost:3310/api/users", data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="w-full max-w-lg mx-auto my-12 bg-white p-8 rounded shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">S'inscrire</h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="firstname"
          >
            Prénom
          </label>
          <input
            className={`form-input mt-1 block w-full px-3 py-2 border ${errors.firstname ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
            id="firstname"
            type="text"
            placeholder="Jane"
            {...register("firstName", {
              required: "Ce champ est requis",
              minLength: {
                value: 2,
                message: "Le prénom doit avoir au moins 2 caractères",
              },
            })}
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="lastname"
          >
            Nom de famille
          </label>
          <input
            className={`form-input mt-1 block w-full px-3 py-2 border ${errors.lastname ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
            id="lastname"
            type="text"
            placeholder="Doe"
            {...register("lastName", {
              required: "Ce champ est requis",
              minLength: {
                value: 2,
                message: "Le nom de famille doit avoir au moins 2 caractères",
              },
            })}
          />
          {errors.lastname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`form-input mt-1 block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email", {
              required: "Ce champ est requis",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Adresse email invalide",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            className={`form-input mt-1 block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
            id="password"
            type="password"
            placeholder="******"
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
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="confirmpassword"
          >
            Confirmer le mot de passe
          </label>
          <input
            className={`form-input mt-1 block w-full px-3 py-2 border ${errors.confirmpassword ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
            id="confirmpassword"
            type="password"
            placeholder="******"
            {...register("confirmpassword", {
              required: "Ce champ est requis",
              validate: (value) =>
                value === watch("password") ||
                "Les mots de passe ne correspondent pas",
            })}
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="service"
          >
            Service
          </label>
          <select
            className={`form-select mt-1 block w-full px-3 py-2 border ${errors.service_id ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
            id="service"
            {...register("service_id", { required: "Ce champ est requis" })}
          >
            <option value="">Sélectionner le service</option>
            <option value="1">Commercial</option>
            <option value="2">IT</option>
            <option value="3">Marketing</option>
            <option value="4">Support</option>
            <option value="5">Formation</option>
            <option value="6">Finance</option>
            <option value="7">Juridique</option>
            <option value="8">RH</option>
            <option value="9">Direction</option>
          </select>
          {errors.service_id && (
            <p className="text-red-500 text-xs mt-1">
              {errors.service_id.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
      >
        S'inscrire
      </button>
    </form>
  );
}
