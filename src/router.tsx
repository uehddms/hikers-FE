import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Onboarding from "./pages/onboarding/Onboarding";
import Login from "./pages/login/Login";
import CourseList from "./pages/course/CourseList";
import CourseInfo from "./pages/course/CourseInfo";

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
      { path: "/courseList", element: <CourseList /> },
      {
        path: "/courseInfo",
        element: <CourseInfo />,
      },
    ],
  },
]);
export default router;
