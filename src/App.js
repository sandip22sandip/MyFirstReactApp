import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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

const HeaderLayout = () => (
  <div className="fixed-left">
    <div id="wrapper">
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
      <Modals />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
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
        path: "/course",
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

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
