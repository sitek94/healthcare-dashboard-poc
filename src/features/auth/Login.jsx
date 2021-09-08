import { UserType } from "../../consts";
import { useAuth } from "../../context/auth-context";

export default function Login() {
  const { login } = useAuth();

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Login</h1>

      <section>
        <button onClick={() => login(UserType.Doctor)}>Login as Doctor</button>
        <button onClick={() => login(UserType.SingleUser)}>
          Login as Single User
        </button>
      </section>
    </main>
  );
}
