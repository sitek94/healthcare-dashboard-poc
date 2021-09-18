import { UserType } from 'types';
import { useAuth } from '../../context/auth-context';

export default function Login() {
  const { login, isLoading } = useAuth();

  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Login</h1>

      <section>
        <button onClick={() => login(UserType.Doctor)} disabled={isLoading}>
          Login as Doctor
        </button>
        <button onClick={() => login(UserType.SingleUser)} disabled={isLoading}>
          Login as Single User
        </button>
      </section>

      {isLoading && <p>Loading...</p>}
    </main>
  );
}
