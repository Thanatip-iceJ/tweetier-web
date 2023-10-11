import Routes from "./router/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}

export default App;
