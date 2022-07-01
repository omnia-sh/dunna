import dunna from '../../src';
import { hexToRgb } from '../../src/utils';

describe('Test dunna color module', () => {
  it('return a valid hex color', () => {
    const hex = dunna.hex();
    expect(hex).toMatch(/^#([A-Fa-f0-9]{6})$/);
  });

  it('return a valid rgb color', () => {
    const rgb = dunna.rgb();
    const colorNumber = [rgb.blue, rgb.green, rgb.red];
    for (const iterator of colorNumber) {
      expect(iterator).toBeGreaterThanOrEqual(0);
      expect(iterator).toBeLessThanOrEqual(255);
    }
  });

  it('hexToRgb convet hex to a right rgb color', () => {
    const rgb = hexToRgb('#7fff00');
    expect({ red: 127, green: 255, blue: 0 }).toEqual(rgb);
  });
});
