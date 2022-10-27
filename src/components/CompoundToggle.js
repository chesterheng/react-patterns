import React, { Children, cloneElement, useState } from "react";
import { Switch } from "./Switch";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return Children.map(children, (child) => {
    return typeof child.type === "string"
      ? child
      : cloneElement(child, { on, toggle });
  });
};

const ToggleOn = ({ children, on }) => (on ? children : null);
const ToggleOff = ({ children, on }) => (on ? null : children);
const ToggleButton = ({ on, toggle, ...rest }) => (
  <Switch on={on} onClick={toggle} {...rest}></Switch>
);

export { Toggle, ToggleOn, ToggleOff, ToggleButton };
