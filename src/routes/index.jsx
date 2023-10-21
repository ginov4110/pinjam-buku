import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Books from "@/pages/Books";
import RentBook from "@/pages/RentBook";
import { useToken } from "@/utils/states/contexts/token-context";

function Router() {
  const { token } = useToken();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/books",
      element: token === "" ? <Navigate to="/login" /> : <Books />,
    },
    {
      path: "/rent-books",
      element: token === "" ? <Navigate to="/login" /> : <RentBook />,
    },
    {
      path: "*",
      element: <div>404 Page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
