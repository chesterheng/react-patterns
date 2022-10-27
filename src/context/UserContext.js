import React, { createContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import { USER_ACTIONS, userReducer } from "../reducers/userReducer";
import * as userClient from "../api/userApi";

const UserContext = createContext();
UserContext.displayName = "UserContext";
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const {
    authState: { user },
  } = useAuth();
  const [userState, dispatch] = useReducer(userReducer, {
    status: null,
    error: null,
    storedUser: user,
    user,
  });
  const value = [userState, dispatch];
  return <Provider value={value}>{children}</Provider>;
};

const useUser = () => {
  const userContext = React.useContext(UserContext);
  if (userContext === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return userContext;
};

// extract helper function
const updateUser = async (dispatch, user, updates) => {
  dispatch({ type: USER_ACTIONS.START_UPDATE, updates });
  try {
    const updatedUser = await userClient.updateUser(user, updates);
    dispatch({ type: USER_ACTIONS.FINISH_UPDATE, updatedUser });
    return updatedUser;
  } catch (error) {
    dispatch({ type: USER_ACTIONS.FAIL_UPDATE, error });
    return Promise.reject(error);
  }
};

export { UserProvider, useUser, updateUser };
