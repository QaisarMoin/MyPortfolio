import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CardsPage from "./Pages/CardPage/CardsPage";
import Marquees from "./Pages/MarqueePage/Marquees";
import Information from "./Pages/InformationPage/Information_bigDevices";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ProjectDetails_bloging from "./Pages/ProjectDetailsPage/ProjectDetails_bloging";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import ScrollToTop from "./Components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />,
            <SkillsPage />,
            <CardsPage />
          </>
        ),
      },
      {
        path: "info",
        element: <Information />,
      },
      {
        path: "project-details",
        element: <ProjectDetails_bloging />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
