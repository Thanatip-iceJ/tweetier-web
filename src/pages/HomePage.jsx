import React, { useContext } from "react";
import { Context } from "../contexts/Context";

function HomePage() {
  const { authUser } = useContext(Context);
  return (
    <h1
      className="text-white flex-grow-1 bg-gray-600 w-[34vw]
  "
    >
      HomePage
    </h1>
  );
}

export default HomePage;
