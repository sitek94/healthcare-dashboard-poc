import faker from "faker";

export const patient = {
  firstName: faker.name.firstName(),
  ...faker.helpers.userCard(),
};

export const doctor = {
  ...faker.helpers.userCard(),
  patients: Array(10)
    .fill(null)
    .map(() => faker.helpers.userCard()),
};
