import dunna from '../../src';
import {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
} from '../../src/database';

describe('Test dunna person module', () => {
  it('return a valid firstName', () => {
    const firstName = dunna.firstName();

    expect([...maleFirstNames, ...femaleFirstNames]).toContain(firstName);
  });

  it('return a valid male firstName', () => {
    const firstName = dunna.firstName({ gender: 'male' });

    expect(maleFirstNames).toContain(firstName);
  });

  it('return a valid female firstName', () => {
    const firstName = dunna.firstName({ gender: 'female' });

    expect(femaleFirstNames).toContain(firstName);
  });

  it('return a valid lastName', () => {
    const lastName = dunna.lastName();

    expect(lastNames).toContain(lastName);
  });

  // TODO
  it('return a valid fullName', () => {});

  it('return a valid gender', () => {
    expect(['male', 'female']).toContainEqual(dunna.gender());
  });

  // TODO
  it('return a valid email', () => {});
});
