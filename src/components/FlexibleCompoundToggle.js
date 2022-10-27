import React, { createContext, useState, useContext } from "react";
import { Switch } from "./Switch";

const ToggleContext = createContext();
ToggleContext.displayName = "ToggleContext";
const { Provider } = ToggleContext;

const ToggleProvider = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return <Provider value={{ on, toggle }}>{children}</Provider>;
};

const useToggle = () => {
  const toggleContext = useContext(ToggleContext);
  if (toggleContext === undefined) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return toggleContext;
};

const ToggleOn = ({ children }) => {
  const { on } = useToggle();
  return on ? children : null;
};
const ToggleOff = ({ children }) => {
  const { on } = useToggle();
  return on ? null : children;
};
const ToggleButton = ({ ...rest }) => {
  const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} {...rest}></Switch>;
};

export { ToggleProvider, ToggleOn, ToggleOff, ToggleButton };
