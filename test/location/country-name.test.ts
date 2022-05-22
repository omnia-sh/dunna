import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.countryName() function', () => {
  it('return a valid country name', () => {
    const countriesNames = countries.map((item) => item.name);

    expect(countriesNames).toContain(dunna.countryName());
  });
});
