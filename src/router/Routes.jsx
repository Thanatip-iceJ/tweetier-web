import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPageLayout";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RedirectIfAuthenticated from "../components/auth/RedirectIfAuthenticated";
import Unauthenticated from "../components/auth/Unauthenticated";
import HomePageLayout from "../layouts/HomePageLayout";
import ProfilePage from "../pages/ProfilePage";
import FollowerPage from "../pages/FollowerPage";
import PostPage from "../pages/PostPage";

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
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/home/",
    element: (
      <Unauthenticated>
        <HomePageLayout />
      </Unauthenticated>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "post", element: <PostPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
