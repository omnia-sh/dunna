import choice from '../basic/choice';
import country from './country';

function city() {
  return choice(country().cities).name;
}

export default city;
