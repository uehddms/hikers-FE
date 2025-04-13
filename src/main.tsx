import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
const JAVASCRIPT_KET = import.meta.env.VITE_APP_JAVASCRIPT_KEY;

window.Kakao.init("JAVASCRIPT_KEY");
window.Kakao.isInitialized();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
