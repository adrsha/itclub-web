import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Events from "./Events/Events.jsx";
import Submitted from "./Submitted/Submitted.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/submitted",
    element: <Submitted />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
