import dunna from '../../src';
import firstNames from '../../src/modules/person/data/first-names';
import lastNames from '../../src/modules/person/data/last-names';

describe('Test dunna person module', () => {
  it('return a valid firstName', () => {
    const firstName = dunna.firstName();

    expect([...firstNames.male, ...firstNames.female]).toContain(firstName);
  });

  it('return a valid male firstName', () => {
    const firstName = dunna.firstName({ gender: 'male' });

    expect(firstNames.male).toContain(firstName);
  });

  it('return a valid female firstName', () => {
    const firstName = dunna.firstName({ gender: 'female' });

    expect(firstNames.female).toContain(firstName);
  });

  it('return a valid lastName', () => {
    const lastName = dunna.lastName();

    expect(lastNames).toContain(lastName);
  });

  it('return a valid fullName', () => {});
});
