import { countries } from '../../database';
import { basic } from '..';

function country() {
  return basic.choice(countries);
}

export default country;
