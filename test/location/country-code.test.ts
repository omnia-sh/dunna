import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.countryName() function', () => {
  it('return a valid country name', () => {
    const countriesCodes = countries.map(item => item.code);

    expect(countriesCodes).toContain(dunna.countryCode());
  });
});
