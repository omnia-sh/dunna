import { countries } from './data';
import { basic } from '..';

function country() {
  return basic.choice(countries);
}

export default country;
