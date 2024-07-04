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
      className="w-full max-w-lg mx-auto my-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="email"
            type="email"
            placeholder="Jane@doe.fr"
            {...register("email", {
              pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              required: "required",
            })}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="password"
            type="password"
            placeholder="Jane"
            {...register("password", {
              pattern:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
              required: "required",
            })}
          />
        </div>
        <button type="submit">Se connecter</button>
      </div>
    </form>
  );
}
