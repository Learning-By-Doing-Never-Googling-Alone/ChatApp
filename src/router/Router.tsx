import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Public/Landing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export default Router;
