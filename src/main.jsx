import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Events from "./Events/Events.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/itclub-web/",
    element: <App />,
  },
  {
    path: "/itclub-web/events",
    element: <Events />,
  },
  {
    path: "/itclub-web/submitted",
    element: <Events />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
