import * as React from "react";
import faker from "faker";
import { useHistory } from "react-router";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);
  const history = useHistory();

  const value = {
    user,
    login(type) {
      setUser({
        type,

        // Generate some fake data
        firstName: faker.name.firstName(),
        ...faker.helpers.userCard(),
      });
      history.push("/dashboard");
    },
    logout() {
      setUser(null);
      history.push("/");
    },
  };

  return <AuthContext.Provider value={value} {...props} />;
}
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
