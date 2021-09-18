import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { useAuth } from "../context/auth-context";

interface Props {
  children: React.ReactNode;
}

export default function Navbar({ children }: Props) {
  const { user, logout } = useAuth();

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

      <button onClick={logout}>Logout {user?.type}</button>
    </nav>
  );
}

export function NavLink(props: NavLinkProps) {
  return <RouterNavLink {...props} activeStyle={{ color: "cornflowerblue" }} />;
}
