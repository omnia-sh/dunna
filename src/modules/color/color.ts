import colors from '../../database/color';
import { Color } from '../../types';
import { choice } from '../basic';
import { hexToRgb } from './rgb';

function color(): Color {
  const color = choice(colors);
  return { ...color, rgb: hexToRgb(color.hex) };
}

export default color;
