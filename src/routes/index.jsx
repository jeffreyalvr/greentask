import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Zen from "../pages/Zen";
import History from "../pages/History";
import Tags from "../pages/Tags";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/zen", element: <Zen /> },
  { path: "/history", element: <History /> },
  { path: "/tags", element: <Tags /> },
  { path: "*", element: <NotFound /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
