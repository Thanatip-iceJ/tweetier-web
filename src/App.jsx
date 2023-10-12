import { useContext } from "react";
import Routes from "./router/Routes";
import { ToastContainer } from "react-toastify";
import { Context } from "./contexts/Context";
import Loading from "./assets/Loading";

function App() {
  const { loading } = useContext(Context);
  if (loading) return <Loading />;
  return (
    <>
      <Routes />
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}

export default App;
