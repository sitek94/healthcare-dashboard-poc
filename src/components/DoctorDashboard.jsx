import { useUser } from "../context/user-context";

export default function DoctorDashboard() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1>Overview of {user.address.city} practice</h1>

      <h2>Patients list:</h2>
      <table>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Full Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.patients.map((patient) => (
            <tr key={patient.name}>
              <td>
                <a>{patient.name}</a>
              </td>
              <td>{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
