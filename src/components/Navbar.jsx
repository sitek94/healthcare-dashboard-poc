import { useAuth } from "../context/auth-context";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottom: "2px solid white",
      }}
    >
      <div>
        <a href="/dashboard">Dashboard</a>
      </div>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}
