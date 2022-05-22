import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.country() function', () => {
  it('return a valid country from the list', () => {
    expect(countries).toContainEqual(dunna.country());
  });

  it('return a valid country code', () => {
    const countriesCodes = countries.map(item => item.ISO2);

    expect(countriesCodes).toContain(dunna.countryCode());
  });

  it('return a valid country name', () => {
    const countriesNames = countries.map(item => item.name);

    expect(countriesNames).toContain(dunna.countryName());
  });
});
