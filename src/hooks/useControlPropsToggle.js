import { useRef, useReducer } from "react";
import { TOGGLE_ACTIONS, toggleReducer } from "../reducers/toggleReducer";
import { callAll } from "../utils/propGetterUtils";
import { useOnChangeReadOnlyWarning } from "../hooks/useOnChangeReadOnlyWarning";
import { useControlledSwitchWarning } from "../hooks/useControlledSwitchWarning";

const useToggle = ({
  initialOn = false,
  reducer = toggleReducer,
  onChange,
  on: controlledOn,
  readOnly = false,
} = {}) => {
  const { current: initialState } = useRef({ on: initialOn });
  const [state, dispatch] = useReducer(reducer, initialState);

  const onIsControlled = controlledOn !== undefined;
  const on = onIsControlled ? controlledOn : state.on;

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useOnChangeReadOnlyWarning(
      controlledOn,
      "on",
      "useToggle",
      Boolean(onChange),
      readOnly,
      "readOnly",
      "initialOn",
      "onChange"
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useControlledSwitchWarning(controlledOn, "on", "useToggle");
  }

  const dispatchWithOnChange = (action) => {
    if (!onIsControlled) {
      dispatch(action);
    }
    onChange?.(reducer({ ...state, on }, action), action);
  };

  const toggle = () => dispatchWithOnChange({ type: TOGGLE_ACTIONS.TOGGLE });
  const reset = () =>
    dispatchWithOnChange({ type: TOGGLE_ACTIONS.RESET, initialState });

  const getTogglerProps = ({ onClick, ...rest } = {}) => {
    return {
      "aria-pressed": on,
      onClick: callAll(onClick, toggle),
      ...rest,
    };
  };

  const getResetterProps = ({ onClick, ...rest } = {}) => {
    return {
      onClick: callAll(onClick, reset),
      ...rest,
    };
  };

  return {
    on,
    reset,
    toggle,
    getTogglerProps,
    getResetterProps,
  };
};

export { useToggle };
