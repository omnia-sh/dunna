import dunna from '../../src';

describe('Test dunna.float() function', () => {
  it('generate a random float number', () => {
    const number = dunna.float();

    expect(parseFloat(number.toString())).toEqual(number);
  });

  it('generate a random float number without params', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.float();

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(1000);
    }
  });

  // TODO
  it('generate a random float number with `fixed` number of decimal points');

  it('generate a random float with specified min', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.float({ min: 5.5 });

      expect(number).toBeGreaterThanOrEqual(5.5);
      expect(number).toBeLessThan(1000);
    }
  });

  it('generate a random float with specified max', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.float({ max: 50.4 });

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(50.4);
    }
  });

  it('generate a random float with specified min and max', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.float({ min: 5, max: 50.7 });

      expect(number).toBeGreaterThanOrEqual(5);
      expect(number).toBeLessThan(50.7);
    }
  });
});
