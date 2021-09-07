import * as React from "react";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = React.useState(null);

  const value = {
    user,
    login(type) {
      setUser({
        type,
      });
    },
  };

  return <AuthContext.Provider value={value} {...props} />;
}
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
