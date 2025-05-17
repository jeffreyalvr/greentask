import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Home from "@pages/Home";
import Zen from "@pages/Zen";
import History from "@pages/History";
import Tags from "@pages/Tags";
import EditTag from "@pages/Tags/Edit";
import NotFound from "@pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/zen", element: <Zen /> },
  { path: "/history", element: <History /> },
  { path: "/tags", element: <Tags /> },
  { path: "/tags/edit/:id", element: <EditTag /> },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
