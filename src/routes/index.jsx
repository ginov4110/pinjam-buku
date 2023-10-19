import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Books from "@/pages/Books";
import RentBook from "@/pages/RentBook";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "/rent-books",
      element: <RentBook />,
    },
    {
      path: "*",
      element: <div>404 Page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
