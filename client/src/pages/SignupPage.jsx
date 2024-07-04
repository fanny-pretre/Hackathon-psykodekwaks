/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const { register, handleSubmit, watch } = useForm();

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
      className="w-full max-w-lg mx-auto my-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="firstname"
            type="text"
            placeholder="Jane"
            {...register("firstname", {
              minLength: 2,
              required: "required",
            })}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="lastname"
            type="text"
            placeholder="Doe"
            {...register("lastname", {
              minLength: 2,
              required: "required",
            })}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="email"
            type="email"
            placeholder="Doe"
            {...register("email", {
              pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              required: "required",
            })}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="password"
            type="password"
            placeholder="*****"
            {...register("password", {
              pattern:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
              required: "required",
            })}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </label>
          <input
            className="appearance-none block w-full bg-red-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="confirmpassword"
            type="password"
            placeholder="******"
            {...register("confirmpassword", {
              pattern:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
              required: "required",
              validate: (value) =>
                value === watch("password") ||
                "Les mots de passe ne correspondent pas",
            })}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            htmlFor="service"
          >
            Service
          </label>
          <select
            className="appearance-none block w-full bg-red-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="service"
            {...register("service_id", { required: "required" })}
          >
            <option value="">Select Service</option>
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
        </div>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
}
