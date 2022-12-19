import { useContext } from "react";
import { userContext } from "./context/UserContext";

function Header() {
  let mode = useContext(userContext);
  return (
    <h1 className={`heading ${mode ? "heading-dark" : "heading-light"}`}>
      {mode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
