import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage/index.jsx";
import { EditTask } from "./pages/EditTask/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-details",
    element: <TaskPage />,
  },
  {
    path: "/edit-task",
    element: <EditTask />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
