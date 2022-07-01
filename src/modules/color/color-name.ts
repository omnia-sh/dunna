import { choice } from '../basic';
import colors from '../../database/color';

function colorName() {
  return choice(colors).name;
}

export default colorName;
