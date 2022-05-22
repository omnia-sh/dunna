import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.city(), dunna.cityName() functions', () => {
  it('returns a valid city', () => {
    // Get all cities
    const cities = countries.flatMap(country => country.cities);

    expect(cities).toContain(dunna.city());
  });

  it('returns a valid city name', () => {
    // Get all cities names
    const citiesNames = countries.flatMap(country =>
      country.cities.map(city => city.name)
    );

    expect(citiesNames).toContain(dunna.cityName());
  });

  it('returns a valid city lng', () => {
    // Get all cities lngs
    const citiesLngs = countries.flatMap(country =>
      country.cities.map(city => city.lng)
    );

    expect(citiesLngs).toContain(dunna.lng());
  });

  it('returns a valid city lat', () => {
    // Get all cities lats
    const citiesLats = countries.flatMap(country =>
      country.cities.map(city => city.lat)
    );

    expect(citiesLats).toContain(dunna.lat());
  });
});
