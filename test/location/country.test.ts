import dunna from '../../src';
import country from '../../src/modules/location/country';
import { countries } from '../../src/database';

describe('Test country functions', () => {
  it('return a valid country from the list', () => {
    expect(countries).toContainEqual(country());
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
