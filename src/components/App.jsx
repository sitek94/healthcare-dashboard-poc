import { useUser } from "../context/user-context";

export default function App() {
  const user = useUser();
  console.log(user);
  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

function AuthenticatedApp() {
  return (
    <div>
      <h1>Authenticated</h1>
    </div>
  );
}

function UnAuthenticatedApp() {
  return (
    <div>
      <h1>UnAuthenticated</h1>
    </div>
  );
}
