import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import NotFound from "../pages/NotFound/NotFoundPage";
import Characters from "../pages/Characters/CharactersPage";
import Home from "../pages/Home/HomePage";

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
        path: "characters",
        element: <Characters />,
      },
    ],
  },
]);

export default router;
