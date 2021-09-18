import faker from "faker";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const patient = faker.helpers.userCard();

export default function PatientDashboard() {
  const { patientId } = useParams<{ patientId: string }>();

  return (
    <div>
      <Link to="/dashboard">&larr; Back to Dashboard</Link>

      <h5>Patient ID: {patientId}</h5>

      <h1>Patient: {patient.name}</h1>

      <img src={faker.image.avatar()} alt={"user avatar"} />
      <p>{faker.lorem.paragraph(5)}</p>
      <p>{faker.lorem.paragraph(5)}</p>
    </div>
  );
}
