import * as React from 'react';
import faker from 'faker';
import { useHistory } from 'react-router';
import { User, UserType } from 'types';
import { sleep } from 'utils/sleep';

const authTokenKey = 'auth-token';

interface AuthContextValue {
  // User data coming from auth provider
  user: User | null;

  login: (type: UserType) => void;
  logout: () => void;
  isLoading: boolean;
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

  async function login(type: UserType) {
    setIsLoading(true);

    // Simulate loading
    await sleep(2000);

    setUser({
      type,

      // Generate some fake data
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: {
        street: faker.address.streetName(),
        city: faker.address.cityName(),
      },
    });
    localStorage.setItem(authTokenKey, faker.datatype.uuid());
    setIsLoading(false);
    history.push('/dashboard');
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(authTokenKey);
    history.push('/');
  }

  const value: AuthContextValue = {
    user,
    login,
    logout,
    isLoading,
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
