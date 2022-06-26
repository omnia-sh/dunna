import genderFn from './gender';
import firstNameFn from './first-name';
import lastNameFn from './last-name';
import type { Gender, Person } from '../../types';

interface PersonParams {
  domain?: string;
  gender?: Gender | 'any';
}

function person({
  gender = 'any',
  domain = 'example.com',
}: PersonParams = {}): Person {
  const _firstName = firstNameFn({ gender });
  const _lastName = lastNameFn();
  const email = `${_firstName.toLowerCase()}_${_lastName.toLowerCase()}@${domain}`;
  const _gender = gender === 'any' ? genderFn() : gender;

  return {
    gender: _gender,
    firstName: _firstName,
    lastName: _lastName,
    email,
  };
}

export default person;
