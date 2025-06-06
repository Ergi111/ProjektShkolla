import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { App } from "./app/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={App} />
  </StrictMode>
);
