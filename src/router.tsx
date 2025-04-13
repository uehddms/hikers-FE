import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Onboarding from "./pages/onboarding/Onboarding";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
