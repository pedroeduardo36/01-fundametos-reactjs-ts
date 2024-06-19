import React from "react";
import ReactDOM from "react-dom/client"; // Representação do HTML através do JS
import { App } from "./App.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //createRoot recebe qual o elemento raiz da nossa página HTML (id root está no Index.html)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
