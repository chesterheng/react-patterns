const ACTION_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const INITIAL_STATE = {
  step: 1,
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return { ...state, count: state.count + state.step };
    }
    case ACTION_TYPES.DECREMENT: {
      return { ...state, count: state.count - state.step };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { ACTION_TYPES, INITIAL_STATE, counterReducer };
