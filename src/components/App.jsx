import { UserType } from "../consts";
import { useAuth } from "../context/auth-context";
import { useUser } from "../context/user-context";
import DoctorDashboard from "./DoctorDashboard";
import Footer from "./Footer";
import Layout from "./Layout";
import Navbar from "./Navbar";
import PatientDashboard from "./PatientDashboard";

export default function App() {
  const user = useUser();

  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

function UnAuthenticatedApp() {
  const { login } = useAuth();

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Login</h1>

      <section>
        <button onClick={() => login(UserType.Doctor)}>Login as Doctor</button>
        <button onClick={() => login(UserType.Patient)}>
          Login as Patient
        </button>
      </section>
    </main>
  );
}

function AuthenticatedApp() {
  const user = useUser();

  let dashboard;
  if (user.isDoctor()) {
    dashboard = <DoctorDashboard />;
  }

  if (user.isPatient()) {
    dashboard = <PatientDashboard />;
  }

  return (
    <Layout>
      <Navbar />
      <div style={{ flex: 1, padding: 20 }}>{dashboard}</div>
      <Footer />
    </Layout>
  );
}
