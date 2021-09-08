import { Link } from "react-router-dom";
import { useUser } from "../../context/user-context";
import range from "lodash/range";
import faker from "faker";

const patients = range(10).map(() => ({
  id: faker.datatype.uuid(),
  ...faker.helpers.userCard(),
}));

export default function DoctorDashboard() {
  const user = useUser();

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
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>
                <Link to={"/dashboard/" + patient.id}>{patient.name}</Link>
              </td>
              <td>{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
