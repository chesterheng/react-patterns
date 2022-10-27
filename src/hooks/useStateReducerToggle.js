import { useRef, useReducer } from "react";
import { callAll } from "../utils/propGetterUtils";
import { TOGGLE_ACTIONS, toggleReducer } from "../reducers/toggleReducer";

const useToggle = ({ initialOn = false, reducer = toggleReducer } = {}) => {
  const { current: initialState } = useRef({ on: initialOn });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { on } = state;

  const toggle = () => dispatch({ type: TOGGLE_ACTIONS.TOGGLE });
  const reset = () => dispatch({ type: TOGGLE_ACTIONS.RESET, initialState });

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
