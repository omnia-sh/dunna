import data from './data';
import { basic } from '..';

function country() {
  return basic.choice(data.countries);
}

export default country;
