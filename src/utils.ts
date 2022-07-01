import type { RGB } from './types';

export function hexToRgb(hex: string): RGB {
  if (hex.startsWith('#')) {
    hex = hex.substring(1);
  }
  var bigint = parseInt(hex, 16);
  var red = (bigint >> 16) & 255;
  var green = (bigint >> 8) & 255;
  var blue = bigint & 255;

  return {
    red,
    green,
    blue,
  };
}
