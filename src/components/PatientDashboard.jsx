import { useUser } from "../context/user-context";

export default function PatientDashboard() {
  const user = useUser();

  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
    </div>
  );
}
