// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

function UserManagement() {
  const users = useLoaderData();
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditUserData({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = async ({ id }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editUserData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      setEditUserData();
      setEditUserId(null);

      // Reload the page after successful update
      window.location.reload();
    } catch (error) {
      console.error("Error updating user:", error);
      setEditUserId(null);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen w-screen bg-gray-200">
      <div className="m-10 font-sans w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Gestion des utilisateurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border-2 border-[#96333e] rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-2"
            >
              {editUserId === user.id ? (
                <div>
                  <input
                    type="text"
                    name="firstname"
                    value={editUserData.firstname}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2 rounded-md"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={editUserData.lastname}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2 rounded-md"
                    placeholder="Last Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editUserData.email}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2 rounded-md"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    value={editUserData.password}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2 rounded-md text-gray-300"
                    placeholder="Password"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="bg-red-400 text-white py-1 px-3 rounded-md hover:bg-red-600 hover:text-white mr-2"
                      onClick={() => handleEditSubmit(user)}
                    >
                      Enregistrer
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white py-1 px-3 rounded-md hover:bg-gray-700"
                      onClick={() => setEditUserId(null)}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {user.firstname} {user.lastname}
                  </h3>
                  <p className="text-black mb-1">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-black] mb-1">
                    <strong>Role:</strong> {user.r_name}
                  </p>
                  <p className="text-black mb-1">
                    <strong>Service:</strong> {user.s_name}
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="bg-red-400 text-white py-1 px-3 rounded-md hover:bg-red-600 hover:text-white mr-2"
                      onClick={() => handleEditClick(user)}
                    >
                      Editer
                    </button>
                    <button
                      type="button"
                      className="bg-gray-700 text-white py-1 px-3 rounded-md hover:bg-gray-200 hover:text-black"
                      onClick={() => handleDelete(user.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
