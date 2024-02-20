import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";
import Employer from "./pages/Employer";
import Virtuals from "./pages/Virtualt";
import VerifyCode from "./onboarding/register";
// import Register from "./onboarding/registerr/Register";
import RegisterVirtualt from "./onboarding/register/virtualt";
import Activate from "./onboarding/register/virtualt/Activate";
import Dashboard from "./pages/Dashboard";
import Virt from "./pages/virt";
import Employ from "./pages/employ";
import Contacts from "./pages/contact";
import Pinfo from "./onboarding/register/virtualt/PI";
import Education from "./onboarding/register/virtualt/Education";
import Work from "./onboarding/register/virtualt/Work";
import Skill from "./onboarding/register/virtualt/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pitch",
    element: <Pitch />,
  },
  {
    path: "/contact-us",
    element: <Contacts />,
  },
  {
    path: "/employer-calculator",
    element: <Employer />,
  },
  {
    path: "/virtualt-calculator",
    element: <Virtuals />,
  },
  {
    path: "/verify",
    element: <VerifyCode />,
  },
  {
    path: "/onboard/virtualt",
    element: <RegisterVirtualt />,
  },
  {
    path: "/onboarding/virtualt/activate",
    element: <Activate />,
    children: [
      {
        path: "",
        element: <Pinfo />,
      },
      {
        path: "educational-information",
        element: <Education />,
      },
      {
        path: "work-history",
        element: <Work />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/virtualt-pricing",
    element: <Virt />,
  },
  {
    path: "/employer-pricing",
    element: <Employ />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Outlet />
    </div>
  );
}

export default App;
