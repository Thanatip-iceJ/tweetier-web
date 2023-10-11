import React from "react";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

export default function Unauthenticated() {
  // Context
  const { authUser } = useContext(Context);
}
