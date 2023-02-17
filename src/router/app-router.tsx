import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import NotFound from "../pages/not-found/not-found";
import PlanetDetails from "../pages/planet-details/planet-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "planet-details",
        element: <PlanetDetails />,
      },
    ],
  },
]);

export default router;
