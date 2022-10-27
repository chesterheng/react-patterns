const USER_ACTIONS = {
  START_UPDATE: "start update",
  FINISH_UPDATE: "finish update",
  FAIL_UPDATE: "fail update",
  RESET: "reset",
};

const INITIAL_STATE = {
  status: null,
  error: null,
  storedUser: {},
  user: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.START_UPDATE: {
      return {
        ...state,
        user: { ...state.user, ...action.updates },
        status: "pending",
        storedUser: state.user,
      };
    }
    case USER_ACTIONS.FINISH_UPDATE: {
      return {
        ...state,
        user: action.updatedUser,
        status: "resolved",
        storedUser: null,
        error: null,
      };
    }
    case USER_ACTIONS.FAIL_UPDATE: {
      return {
        ...state,
        status: "rejected",
        error: action.error,
        user: state.storedUser,
        storedUser: null,
      };
    }
    case USER_ACTIONS.RESET: {
      return {
        ...state,
        status: null,
        error: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { USER_ACTIONS, INITIAL_STATE, userReducer };
