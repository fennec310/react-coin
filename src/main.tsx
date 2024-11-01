//import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={lightTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
