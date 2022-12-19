import { useContext } from "react";
import { userContext } from "./context/UserContext";

function Title({ text }) {
  let mode = useContext(userContext);
  return (
    <h2
      className={`heading ${mode ? "sub-heading-dark" : "sub-heading-light"}`}
    >
      {text}
    </h2>
  );
}

export default Title;
