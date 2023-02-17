import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/LayoutPage";
import NotFound from "../pages/NotFound/NotFoundPage";
import Characters from "../pages/Characters/CharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "characters",
        element: <Characters />,
      },
    ],
  },
]);

export default router;
