import React from "react";
import { useUser } from "../context/UserContext";

const UserDataDisplay = () => {
  const [{ user }] = useUser();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export { UserDataDisplay };
