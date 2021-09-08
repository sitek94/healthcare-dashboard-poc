import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export default function Navbar({ children }) {
  const { logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "2px solid white",
      }}
    >
      <div>{children}</div>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export function NavLink(props) {
  return <RouterNavLink {...props} activeStyle={{ color: "cornflowerblue" }} />;
}
