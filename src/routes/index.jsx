import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import LearningPaths from "../pages/LearningPaths";
import Achievements from "../pages/Achievements";
import Opportunities from "../pages/Opportunities";
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import Quiz from "../pages/Quiz";
import CareerInsights from "../pages/CareerInsights";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/learning-paths",
        element: (
          <ProtectedRoute>
            <LearningPaths />
          </ProtectedRoute>
        ),
      },
      {
        path: "/achievements",
        element: (
          <ProtectedRoute>
            <Achievements />
          </ProtectedRoute>
        ),
      },
      {
        path: "/opportunities",
        element: (
          <ProtectedRoute>
            <Opportunities />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/quiz",
        element: (
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        ),
      },
      {
        path: "/career-insights",
        element: (
          <ProtectedRoute>
            <CareerInsights />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
