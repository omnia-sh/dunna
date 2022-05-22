import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.city(), dunna.cityName() functions', () => {
  it('returns a valid city', () => {
    // Get all cities names
    const cities = countries.flatMap(country => country.cities);

    expect(cities).toContain(dunna.city());
  });

  it('returns a valid city name', () => {
    // Get all cities names
    const cities = countries.flatMap(country =>
      country.cities.map(city => city.name)
    );

    expect(cities).toContain(dunna.cityName());
  });
});
