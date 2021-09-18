import { useUser } from '../../context/user-context';
import faker from 'faker';

export default function SingleUserDashboard() {
  const user = useUser();

  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
      <img src={faker.image.avatar()} alt={user.firstName + ' avatar'} />
      <p>{faker.lorem.paragraph(5)}</p>
      <p>{faker.lorem.paragraph(5)}</p>
    </div>
  );
}
