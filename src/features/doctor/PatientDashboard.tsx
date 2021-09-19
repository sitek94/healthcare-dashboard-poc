import faker from 'faker';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const patient = faker.helpers.userCard();

export default function PatientDashboard() {
  const { patientId } = useParams<{ patientId: string }>();

  return (
    <div className="markdown-body">
      <Link to="/dashboard">&larr; Back to Dashboard</Link>

      <h1>Patient: {patient.name}</h1>
      <p>Patient ID: {patientId}</p>

      <img src={faker.image.avatar()} alt={'user avatar'} />
      <p>{faker.lorem.paragraph(5)}</p>
      <p>{faker.lorem.paragraph(5)}</p>
    </div>
  );
}
