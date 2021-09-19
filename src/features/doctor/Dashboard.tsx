import faker from 'faker';
import { Link as RouterLink } from 'react-router-dom';

import { createPatients } from 'utils/fake-data';
import Table from 'components/Table';
import { Truncate } from '@primer/components';

export default function DoctorDashboard() {
  return (
    <div className="markdown-body">
      <h1>Overview of {faker.address.cityName()} Practice</h1>

      <h2>Patients list:</h2>
      <Table
        columns={['name', 'age', 'email', 'phone', 'tags']}
        rows={createPatients(10)}
        renderCell={(column, patient) => {
          const cell = patient[column];

          // Name - link
          if (column === 'name') {
            return (
              <td>
                <RouterLink to={'/dashboard/' + patient.id}>{cell}</RouterLink>
              </td>
            );
          }

          // Tags
          if (Array.isArray(cell)) {
            const text = cell.map(t => t.text).join(', ');
            return (
              <td>
                <Truncate title={text}>{text}</Truncate>
              </td>
            );
          }

          // Default
          return <td>{cell}</td>;
        }}
      />
    </div>
  );
}
