/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Activity from "./pages/Activity";
import ActivityAdd from "./pages/ActivityAdd";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
