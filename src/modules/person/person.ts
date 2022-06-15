import genderFn from './gender';
import firstNameFn from './first-name';
import lastNameFn from './last-name';
import type { Person } from '../../types';

interface PersonParams {
  domain?: string;
}

function person({ domain = 'example.com' }: PersonParams = {}): Person {
  const gender = genderFn();
  const firstName = firstNameFn({ gender });
  const lastName = lastNameFn();
  const email = `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${domain}`;

  return {
    gender,
    firstName,
    lastName,
    email,
  };
}

export default person;
