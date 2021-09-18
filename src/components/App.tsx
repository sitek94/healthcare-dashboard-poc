import { Redirect, Route, Switch } from "react-router";

import { UserProvider, useUser } from "../context/user-context";
import DoctorDashboard from "../features/doctor/Dashboard";
import Footer from "./Footer";
import Layout, { Main } from "./Layout";
import Navbar, { NavLink } from "./Navbar";
import SingleUserDashboard from "../features/single-user/Dashboard";
import MyAccount from "../features/shared/MyAccount";
import DoctorSettings from "../features/doctor/Settings";
import PatientDashboard from "../features/doctor/PatientDashboard";
import Login from "../features/auth/Login";
import DoctorReports from "../features/doctor/Reports";
import SingleUserIntegrations from "../features/single-user/Integrations";
import { useAuth } from "context/auth-context";

/**
 * User is either authenticated or not
 */
export default function App() {
  const { user } = useAuth();

  return user ? (
    <UserProvider user={user}>
      <AuthenticatedApp />
    </UserProvider>
  ) : (
    <UnAuthenticatedApp />
  );
}

/**
 * Show Login screen when not authenticated
 */
function UnAuthenticatedApp() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  );
}

/**
 * When authenticated start Doctor or SingleUser app
 */
function AuthenticatedApp() {
  const user = useUser();

  if (user.isDoctor()) {
    return <DoctorApp />;
  }

  if (user.isSingleUser()) {
    return <SingleUserApp />;
  }

  return null;
}

/**
 * Single User specific app
 */
function SingleUserApp() {
  return (
    <Layout>
      <Navbar>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/integrations">Integrations</NavLink>
        <NavLink to="/my-account">My Account</NavLink>
      </Navbar>
      <Main>
        <Switch>
          <Route path="/dashboard" component={SingleUserDashboard} />
          <Route path="/integrations" component={SingleUserIntegrations} />
          <Route path="/my-account" component={MyAccount} />
        </Switch>
      </Main>
      <Footer />
    </Layout>
  );
}

/**
 * Doctor specific app
 */
function DoctorApp() {
  return (
    <Layout>
      <Navbar>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/my-account">My Account</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </Navbar>
      <Main>
        <Switch>
          <Route exact path="/dashboard" component={DoctorDashboard} />
          <Route path="/dashboard/:patientId" component={PatientDashboard} />
          <Route path="/reports" component={DoctorReports} />
          <Route path="/settings" component={DoctorSettings} />
          <Route path="/my-account" component={MyAccount} />
        </Switch>
      </Main>
      <Footer />
    </Layout>
  );
}
