import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import App from "./app";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);

defineCustomElements(window);
