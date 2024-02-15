import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";
import Employer from "./pages/Employer";
import Virtuals from "./pages/Virtualt";
import VerifyCode from "./onboarding/register";
import Register from "./onboarding/register/Register";
import Dashboard from "./pages/Dashboard";
import Virt from "./pages/virt";
import Employ from "./pages/employ";

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
    path: "/register",
    element: <Register />,
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
