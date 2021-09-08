import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";

export default function AppProviders({ children }) {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </Router>
  );
}
