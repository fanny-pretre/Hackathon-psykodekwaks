import { Form, useLoaderData } from "react-router-dom";

export default function SignupPage() {
  const user = useLoaderData();

  return (
    <div>
      <Form
        method="put"
        className="w-full max-w-lg mx-auto my-12 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Je souhaite modifier mes informations
          </h1>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstname"
            >
              Prénom
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstname"
              type="text"
              defaultValue={user.firstname}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastname"
            >
              Nom
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              name="lastname"
              type="text"
              defaultValue={user.lastname}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full  bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              name="email"
              type="email"
              defaultValue={user.email}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              name="password"
              type="password"
              defaultValue={user.password}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Modifier mes informations
          </button>
        </div>
      </Form>
      <Form method="delete">
        <button type="submit" className="btn-secondary">
          Supprimer mon profil
        </button>
      </Form>
    </div>
  );
}
