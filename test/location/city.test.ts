import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.city() function', () => {
  it('return a valid city name', () => {
    // Get all cities names
    const cities = countries.flatMap(country => country.cities);

    expect(cities).toContain(dunna.city());
  });
});
