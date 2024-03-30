import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import SignUp from "./screens/Auth/signUp";
import SignIn from "./screens/Auth/signIn";
import ResetPassword from "./screens/Auth/resetPassword";
import RecoverPassword from "./screens/Auth/recoverPassword";
import Dashboard from "./screens/admin/dashboard";
import Users from "./screens/admin/users";
function App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/password-reset/:id/:token",
      element: <RecoverPassword />,
    },
    {
      path: "/admin/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/admin/users",
      element: <Users />,
    },


  ])
  return <RouterProvider router={router} />;
}

export default App;
