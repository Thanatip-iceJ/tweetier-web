import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./contexts/Context.jsx";
import "react-toastify/dist/ReactToastify.css";
import HomeContextProvider from "./contexts/HomeContext.jsx";
import PostContextProvider from "./contexts/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <PostContextProvider>
    <ContextProvider>
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </ContextProvider>
  </PostContextProvider>
  // </React.StrictMode>,
);
