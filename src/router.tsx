import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Onboarding from "./pages/onboarding/Onboarding";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Success from "./pages/signup/Success";
import Community from "./pages/community/Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Onboarding /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup/success", element: <Success /> },
      { path: "community", element: <Community /> },
    ],
  },
]);
export default router;
