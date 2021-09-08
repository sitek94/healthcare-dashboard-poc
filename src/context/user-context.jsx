import * as React from "react";
import { useAuth } from "./auth-context";
import { UserType } from "../consts";

const UserContext = React.createContext();

function UserProvider(props) {
  const { user } = useAuth();

  return <UserContext.Provider value={user} {...props} />;
}

function useUser() {
  const user = React.useContext(UserContext);

  if (!user) {
    return null;
  }

  const extendedContext = {
    ...user,
    isDoctor() {
      return user.type === UserType.Doctor;
    },
    isSingleUser() {
      return user.type === UserType.SingleUser;
    },
  };

  return extendedContext;
}

export { UserProvider, useUser };
