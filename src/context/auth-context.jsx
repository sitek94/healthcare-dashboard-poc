import * as React from "react";
import { UserType } from "../consts";
import { doctor, patient } from "../fake-data";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);

  const value = {
    user,
    login(type) {
      const fakeData = type === UserType.Doctor ? doctor : patient;

      setUser({
        type,
        ...fakeData,
      });
    },
    logout() {
      setUser(null);
    },
  };

  return <AuthContext.Provider value={value} {...props} />;
}
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
