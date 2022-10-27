import { useState } from "react";
import { useToggle } from "../hooks/useStateReducerToggle";
import { Switch } from "./Switch";
import { TOGGLE_ACTIONS, toggleReducer } from "../reducers/toggleReducer";

const StateReducerToggle = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const clickedTooMuch = timesClicked >= 4;
  const newToggleReducer = (state, action) => {
    if (action.type === TOGGLE_ACTIONS.TOGGLE && clickedTooMuch) {
      return { on: state.on };
    }
    return toggleReducer(state, action);
  };

  const { on, getTogglerProps, getResetterProps } = useToggle({
    reducer: newToggleReducer,
  });

  return (
    <div>
      <Switch
        {...getTogglerProps({
          disabled: clickedTooMuch,
          on: on,
          onClick: () => setTimesClicked((count) => count + 1),
        })}
      />
      {clickedTooMuch ? (
        <div data-testid="notice">
          Whoa, you clicked too much!
          <br />
        </div>
      ) : timesClicked > 0 ? (
        <div data-testid="click-count">Click count: {timesClicked}</div>
      ) : null}
      <button
        {...getResetterProps({
          onClick: () => setTimesClicked(0),
        })}>
        Reset
      </button>
    </div>
  );
};

export { StateReducerToggle };
