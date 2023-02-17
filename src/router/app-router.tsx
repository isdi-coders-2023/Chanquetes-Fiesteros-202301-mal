import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/layout";
import NotFound from "../pages/not-found/not-found";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Favorites from "../pages/favorites/favorites";
import PlanetDetails from "../pages/planet-details/planet-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "planet-details",
        element: <PlanetDetails />,
      },
    ],
  },
]);

export default router;
