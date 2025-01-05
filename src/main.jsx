import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Events from "./Events/Events.jsx";
import Notices from "./Notices/Notices.jsx";
import Projects from "./Projects/Projects.jsx";
import Dristi from "./Dristi/Dristi.jsx";
import GitWatch from "./GitWatch/GitWatch.jsx";
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
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/notices",
    element: <Notices />,
  },
  {
    path: "/dristi",
    element: <Dristi />,
  },
  {
    path: "/gitwatch",
    element: <GitWatch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
