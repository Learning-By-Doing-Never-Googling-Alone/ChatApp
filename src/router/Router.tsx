import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Public/Landing";
import SignUp from "../pages/Public/SignUp";
import SignIn from "../pages/Public/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);

export default Router;
