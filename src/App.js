/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Feed from "./pages/Feed";
import Calendar from "./pages/Calendar";
import FindACourse from "./pages/FindACourse";
import Leaderboard from "./pages/Leaderboard";
import ServicesProducts from "./pages/ServicesProducts";
import Kb from "./pages/Kb";
import Vacancies from "./pages/Vacancies";
import Rewards from "./pages/Rewards";
import Courses from "./pages/Courses";
import MyTeam from "./pages/MyTeam";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  
  const { currentUser } = useContext(AuthContext);

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
          element: <Main />,
        },
        {
          path: "/main",
          element: <Main />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/feed",
          element: <Feed />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/findacourse",
          element: <FindACourse />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/course/:id",
          element: <Course />,
        },
        {
          path: "/myteam",
          element: <MyTeam />,
        },
        {
          path: "/leaderboard",
          element: <Leaderboard />,
        },
        {
          path: "/servicesproducts",
          element: <ServicesProducts />,
        },
        {
          path: "/kb",
          element: <Kb />,
        },
        {
          path: "/vacancies",
          element: <Vacancies />,
        },
        {
          path: "/rewards",
          element: <Rewards />,
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
