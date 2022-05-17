import dunna from '../../src';
import { countries } from '../../src/functions/location/data';

describe('Test dunna.country() function', () => {
  it('return a valid country from the list', () => {
    expect(countries).toContainEqual(dunna.country());
  });
});
