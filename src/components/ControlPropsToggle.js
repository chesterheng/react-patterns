import React, { useState } from "react";
import { useToggle } from "../hooks/useControlPropsToggle";
import { Switch } from "./Switch";
import { TOGGLE_ACTIONS } from "../reducers/toggleReducer";

const ControlPropsToggle = ({ on: controlledOn, onChange, readOnly }) => {
  const { on, getTogglerProps } = useToggle({
    on: controlledOn,
    onChange,
    readOnly,
  });
  const props = getTogglerProps({ on });
  return <Switch {...props} />;
};

const ControlPropsToggleDemo = () => {
  const [bothOn, setBothOn] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  const handleToggleChange = (state, action) => {
    if (action.type === TOGGLE_ACTIONS.TOGGLE && timesClicked > 4) {
      return;
    }
    setBothOn(state.on);
    setTimesClicked((c) => c + 1);
  };

  const handleResetClick = () => {
    setBothOn(false);
    setTimesClicked(0);
  };

  return (
    <div>
      <div>
        <ControlPropsToggle on={bothOn} onChange={handleToggleChange} />
        <ControlPropsToggle on={bothOn} onChange={handleToggleChange} />
      </div>
      {timesClicked > 4 ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : (
        <div data-testid="click-count">Click count: {timesClicked}</div>
      )}
      <button onClick={handleResetClick}>Reset</button>
      <hr />
      <div>
        <div>Uncontrolled Toggle:</div>
        <ControlPropsToggle />
      </div>
    </div>
  );
};

export { ControlPropsToggleDemo };
