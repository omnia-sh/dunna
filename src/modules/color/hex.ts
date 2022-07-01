import { choice } from '../basic';
import colors from '../../database/color';

function hex() {
  return choice(colors).hex;
}

export default hex;
