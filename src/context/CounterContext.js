import React, { createContext, useContext, useReducer } from "react";
import { ACTION_TYPES, counterReducer, INITIAL_STATE } from "../reducers/counterReducer";

const CounterContext = createContext();
CounterContext.displayName = "CounterContext";
const { Provider } = CounterContext;

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const value = [state, dispatch];
  return <Provider value={value}>{children}</Provider>;
};

const useCounter = () => {
  const counterContext = useContext(CounterContext);
  if (counterContext === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return counterContext;
};

// extract helper functions
const increment = (dispatch) => dispatch({ type: ACTION_TYPES.INCREMENT });
const decrement = (dispatch) => dispatch({ type: ACTION_TYPES.DECREMENT });

export { CounterProvider, useCounter, increment, decrement };
