/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import React, { Suspense, useContext } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

import Login from "./pages/Login";

function App() {
  const Main = React.lazy(() => import("./pages/Main"));
  const Feed = React.lazy(() => import("./pages/Feed"));
  const Calendar = React.lazy(() => import("./pages/Calendar"));
  const FindACourse = React.lazy(() => import("./pages/FindACourse"));
  const Leaderboard = React.lazy(() => import("./pages/Leaderboard"));
  const ServicesProducts = React.lazy(() => import("./pages/ServicesProducts"));
  const Kb = React.lazy(() => import("./pages/Kb"));
  const Vacancies = React.lazy(() => import("./pages/Vacancies"));
  const Rewards = React.lazy(() => import("./pages/Rewards"));
  const Courses = React.lazy(() => import("./pages/Courses"));
  const Course = React.lazy(() => import("./pages/Course"));
  const MyTeam = React.lazy(() => import("./pages/MyTeam"));
  const Profile = React.lazy(() => import("./pages/Profile"));


  const queryClient = new QueryClient();

  const HeaderLayout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="fixed-left">
          <div id="wrapper">
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            <Modals />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (sessionStorage.getItem("AuthToken") === null) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      element: (
        <ProtectedRoute>
          <HeaderLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Main />
            </Suspense>
          ),
        },
        {
          path: "/main",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Main />
            </Suspense>
          ),
        },
        {
          path: "/profile",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/feed",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Feed />
            </Suspense>
          ),
        },
        {
          path: "/calendar",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Calendar />
            </Suspense>
          ),
        },
        {
          path: "/findacourse",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <FindACourse />
            </Suspense>
          ),
        },
        {
          path: "/courses",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Courses />
            </Suspense>
          ),
        },
        {
          path: "/course/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Course />
            </Suspense>
          ),
        },
        {
          path: "/myteam",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <MyTeam />
            </Suspense>
          ),
        },
        {
          path: "/leaderboard",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Leaderboard />
            </Suspense>
          ),
        },
        {
          path: "/servicesproducts",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ServicesProducts />
            </Suspense>
          ),
        },
        {
          path: "/kb",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Kb />
            </Suspense>
          ),
        },
        {
          path: "/vacancies",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Vacancies />
            </Suspense>
          ),
        },
        {
          path: "/rewards",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Rewards />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
