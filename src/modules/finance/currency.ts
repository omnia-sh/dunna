import { currencies } from './data';
import { choice } from '../basic';

function currency() {
  return choice(currencies);
}

export default currency;
