import * as React from 'react';
import faker from 'faker';
import { useHistory } from 'react-router';

import { User, UserRole } from 'types';
import { sleep } from 'utils/sleep';

interface AuthContextValue {
  // User data coming from auth provider - some basic info, like userId,
  // name, etc.
  user: User | null;
  isLoading: boolean;
  error: Error | null;

  login: (name: string, type: UserRole) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: React.ReactNode;
}
function AuthProvider({ children }: AuthProviderProps) {
  const history = useHistory();

  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const value: AuthContextValue = {
    // State
    user,
    isLoading,
    error,

    // Actions
    async login(name, role) {
      setIsLoading(true);

      // Simulate loading
      await sleep(2000);

      // Simple validation
      if (!name) {
        setError(new Error(`Name is required!`));
        setIsLoading(false);
        return;
      }
      const fakeUser: User = {
        role,

        // Generate some fake data
        id: faker.datatype.uuid(),
        firstName: name,
        lastName: faker.name.lastName(),
      };
      setUser(fakeUser);
      setIsLoading(false);

      // Poor man's persistence
      localStorage.setItem('user', JSON.stringify(fakeUser));
      history.push('/dashboard');
    },
    logout() {
      setUser(null);
      localStorage.removeItem('user');
      history.push('/');
    },
    clearError() {
      setError(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`"useUser" must be used inside a "UserProvider"`);
  }

  return context;
}

export { AuthProvider, useAuth };
