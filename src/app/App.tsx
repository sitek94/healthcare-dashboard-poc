import { Redirect, Route, Switch } from 'react-router';

import { useAuth } from 'context/auth-context';
import { UserProvider, useUser } from 'context/user-context';

import Layout, { Main } from 'components/Layout';
import Footer from 'components/Footer';
import Navbar, { NavLink } from 'components/Navbar';

import Login from 'features/auth/Login';
import MyAccount from 'features/shared/MyAccount';
import SingleUserDashboard from 'features/single-user/Dashboard';
import SingleUserIntegrations from 'features/single-user/Integrations';
import DoctorDashboard from 'features/doctor/Dashboard';
import DoctorReports from 'features/doctor/Reports';
import DoctorSettings from 'features/doctor/Settings';
import PatientDashboard from 'features/doctor/PatientDashboard';

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
          <Redirect to="/dashboard" />
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
          {/*<Redirect to="/dashboard" />*/}
        </Switch>
      </Main>
      <Footer />
    </Layout>
  );
}
