const TOGGLE_ACTIONS = {
  TOGGLE: "toggle",
  RESET: "reset",
};

const toggleReducer = (state, { type, initialState }) => {
  switch (type) {
    case TOGGLE_ACTIONS.TOGGLE: {
      return { on: !state.on };
    }
    case TOGGLE_ACTIONS.RESET: {
      return initialState;
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
};

export { TOGGLE_ACTIONS, toggleReducer };
