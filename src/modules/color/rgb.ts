import hex from './hex';
import { hexToRgb } from '../../utils';
import type { RGB } from '../../types';

function rgb(): RGB {
  return hexToRgb(hex());
}

export { rgb };
