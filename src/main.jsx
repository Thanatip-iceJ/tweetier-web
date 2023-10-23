import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./contexts/Context.jsx";
import "react-toastify/dist/ReactToastify.css";
import HomeContextProvider from "./contexts/HomeContext.jsx";
import PostContextProvider from "./contexts/PostContext.jsx";
import ProfileContextProvider from "./contexts/ProfileContext.jsx";
import CommentContextProvider from "./contexts/CommentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HomeContextProvider>
    <ContextProvider>
      <CommentContextProvider>
        <ProfileContextProvider>
          <PostContextProvider>
            <App />
          </PostContextProvider>
        </ProfileContextProvider>
      </CommentContextProvider>
    </ContextProvider>
  </HomeContextProvider>
  // </React.StrictMode>,
);
