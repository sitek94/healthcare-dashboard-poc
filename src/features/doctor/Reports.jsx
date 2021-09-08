import { Link } from "react-router-dom";
import range from "lodash/range";
import faker from "faker";

const patients = range(10).map(() => ({
  id: faker.datatype.uuid(),
  ...faker.helpers.userCard(),
}));

export default function DoctorReports() {
  return (
    <div>
      <h1>Reports</h1>

      <h2>Patients reports:</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={"/dashboard/" + patient.id}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
