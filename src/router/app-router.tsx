import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import NotFound from "../pages/not-found/not-found";
import Characters from "../pages/characters/characters";

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
