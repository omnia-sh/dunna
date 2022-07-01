import { choice } from '../basic';
import colors from '../../database/color';
import { hexToRgb } from '../../utils';
import type { Color } from '../../types';

function color(): Color {
  const color = choice(colors);

  return { ...color, rgb: hexToRgb(color.hex) };
}

export default color;
