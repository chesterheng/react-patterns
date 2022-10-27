import { useState } from "react";
import { callAll } from "../utils/propGetterUtils";

const useToggle = () => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  const getToggleProps = ({ onClick, ...rest }) => {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle),
      ...rest,
    };
  };

  return {
    on,
    toggle,
    getToggleProps,
  };
};

export { useToggle };
