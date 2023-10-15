import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./contexts/Context.jsx";
import "react-toastify/dist/ReactToastify.css";
import HomeContextProvider from "./contexts/HomeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HomeContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </HomeContextProvider>
  // </React.StrictMode>,
);
