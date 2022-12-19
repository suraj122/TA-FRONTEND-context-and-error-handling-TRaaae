import React, { useContext } from "react";
import { userContext } from "./context/UserContext";

export default function SwitchButton({ isDarkMode, changeMode }) {
  let mode = useContext(userContext);
  return (
    <button
      className={`btn ${mode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
