import * as React from 'react';
import { User, UserType } from 'types';

// Context model

interface UserContextValue {
  user: User;
}

const UserContext = React.createContext<UserContextValue | undefined>(
  undefined,
);

interface UserProviderProps {
  user: User;
  children: React.ReactNode;
}

// Provider

function UserProvider({ user, children }: UserProviderProps) {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

// Helper hook

function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error(`"useUser" must be used inside a "UserProvider"`);
  }

  const { user } = context;

  return {
    ...user,
    isDoctor() {
      return user.type === UserType.Doctor;
    },
    isSingleUser() {
      return user.type === UserType.SingleUser;
    },
  };
}

export { UserProvider, useUser };
