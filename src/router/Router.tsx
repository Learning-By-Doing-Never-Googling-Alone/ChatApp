import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Public/Landing";
import SignUp from "../pages/Public/SignUp";
import SignIn from "../pages/Public/SignIn";
import Dashboard from "../pages/Private/Dashboard";
import Error from "../pages/Misc/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

export default Router;
