/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";

import Activity from "./pages/Activity/Activity";
import ActivityAdd from "./pages/ActivityAdd/ActivityAdd";
import Administrateur from "./pages/Administrateur";
import UserManagement from "./pages/UserManagement";
import UserInformation from "./pages/UserInformation";

const activityAddLoader = async () => {
  try {
    const [activityTypesResponse, usersResponse] = await Promise.all([
      axios.get(`${import.meta.env.VITE_API_URL}/api/activitytypes`),
      axios.get(`${import.meta.env.VITE_API_URL}/api/users`),
    ]);

    return {
      activityTypes: activityTypesResponse.data,
      users: usersResponse.data,
    };
  } catch (error) {
    console.error("Error loading activity types or users:", error);
    return { activityTypes: [], users: [] };
  }
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activities",
        element: <Activity />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/activities`
          );
          return response.data;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/activityadd",
        element: <ActivityAdd />,
        loader: activityAddLoader,
      },
      {
        path: "/admin",
        element: <Administrateur />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/users/`
          );
          return response.data;
        },
      },
      {
        path: "/admin/utilisateur/:id",
        element: <UserInformation />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/users/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "/admin/utilisateurgestion",
        element: <UserManagement />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/users/`
          );
          return response.data;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
