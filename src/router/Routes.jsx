import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "Register", element: <RegisterPage /> },
      { path: "Login", element: <Login /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
