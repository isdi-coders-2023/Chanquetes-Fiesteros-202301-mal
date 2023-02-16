import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Favorites from "../pages/Favorites/Favorites";

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
    ],
  },
]);

export default router;
