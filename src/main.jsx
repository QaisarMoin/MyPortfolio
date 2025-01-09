import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CardsPage from "./Pages/CardPage/CardsPage";
import Marquees from "./Pages/MarqueePage/Marquees";
import Information from "./Pages/InformationPage/Information_bigDevices";
import ProjectDetails from "./Pages/ProjectDetailsPage/ProjectDetails";
import Footer from "./Components/Footer/Footer";

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
          // <ProjectDetails />,
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
