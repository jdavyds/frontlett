import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Employer from "./pages/Employer";
import Virtuals from "./pages/Virtualt";
import VerifyCode from "./onboarding/register";
import Register from "./onboarding/register/Register";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/employer",
    element: <Employer />,
  },
  {
    path: "/virtualt",
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
