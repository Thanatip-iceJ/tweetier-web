import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectIfAuthenticated from "../components/auth/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <LandingPageLayout />
      </RedirectIfAuthenticated>
    ),
    children: [
      { path: "", element: <LandingPage /> },
      { path: "Register", element: <RegisterPage /> },
      { path: "Login", element: <Login /> },
    ],
  },
  { path: "/home", element: <HomePage /> },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
