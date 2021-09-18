import range from 'lodash/range';
import faker from 'faker';

export default function SingleUserIntegrations() {
  return (
    <div>
      <h1>Your Integrations</h1>

      <ul>
        {range(10)
          .map(() => faker.helpers.contextualCard())
          .map(({ company, website }) => (
            <li key={company.name}>
              {company.name} &mdash; {website}
            </li>
          ))}
      </ul>
    </div>
  );
}
