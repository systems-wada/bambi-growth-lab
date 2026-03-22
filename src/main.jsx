import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MaintenancePage } from "./pages/maintenance.tsx";

import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MaintenancePage />
  </StrictMode>
);
