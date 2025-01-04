import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import CardsPage from "./Pages/CardsPage";
import Marquees from "./Pages/Marquees";
import Information from "./Pages/Information";
import ProjectDetails from "./Pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: [
          <Home />,
          //  <Marquees />,
          <CardsPage />,
          <ProjectDetails />,
        ],
      },
      {
        path: "info",
        element: <Information />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
