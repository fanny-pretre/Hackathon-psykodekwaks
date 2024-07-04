// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function UserManagement() {
    const users = useLoaderData();
    const [editUserId, setEditUserId] = useState(null);
    const [editUserData, setEditUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editUserData),
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            setEditUserData();
            setEditUserId(null);

            // Reload the page after successful update
            window.location.reload();
        } catch (error) {
            console.error('Error updating user:', error);
            setEditUserId(null);
        }
    };


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete user');
            }

        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="flex justify-center min-h-screen w-screen">
            <div className="m-10 font-sans">
                <h2 className="text-2xl font-bold mb-4 text-center">Gestion des utilisateurs</h2>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80 transition-transform transform hover:-translate-y-2"
                        >
                            {editUserId === user.id ? (
                                <div>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={editUserData.firstname}
                                        onChange={handleInputChange}
                                        className="border p-2 w-full mb-2"
                                        placeholder="First Name"
                                    />
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={editUserData.lastname}
                                        onChange={handleInputChange}
                                        className="border p-2 w-full mb-2"
                                        placeholder="Last Name"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={editUserData.email}
                                        onChange={handleInputChange}
                                        className="border p-2 w-full mb-2"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        value={editUserData.password}
                                        onChange={handleInputChange}
                                        className="border p-2 w-full mb-2"
                                        placeholder="Password"
                                    />
                                    <button type="button"
                                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700 mr-2"
                                        onClick={() => handleEditSubmit(user)}
                                    >
                                        Enregistrer
                                    </button>
                                    <button type="button"
                                        className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-700"
                                        onClick={() => setEditUserId(null)}
                                    >
                                        Annuler
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="text-lg font-semibold">{user.firstname} {user.lastname}</h3>
                                    <p className="text-gray-600">Email: {user.email}</p>
                                    <p className="text-gray-600">Role: {user.r_name}</p>
                                    <p className="text-gray-600">Service: {user.s_name}</p>
                                    <div className="flex justify-between mt-4">
                                        <button type="button"
                                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                                            onClick={() => handleEditClick(user)}
                                        >
                                            Editer
                                        </button>
                                        <button type="button"
                                            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
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
