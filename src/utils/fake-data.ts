import { Patient, Tag } from '../types';
import range from 'lodash/range';
import faker from 'faker';

export function createTag(): Tag {
  return {
    text: faker.lorem.word(),
    color: faker.internet.color(),
  };
}

export function createTags(): Tag[] {
  return range(faker.datatype.number({ min: 1, max: 3 })).map(createTag);
}

export function createPatient(): Patient {
  return {
    id: faker.datatype.uuid(),
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    age: faker.datatype.number({ min: 18, max: 70 }),
    tags: createTags(),
  };
}

export function createPatients(n: number): Patient[] {
  return range(n).map(createPatient);
}
