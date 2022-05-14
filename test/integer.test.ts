import dunna from '../src';

describe('Test dunna.integer() function', () => {
  it('generate a random integer without floating point', () => {
    const number = dunna.integer();

    expect(parseInt(number.toString())).toEqual(number);
  });

  it('generate a random integer without params', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.integer();

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(1000);
    }
  });

  it('generate a random integer with specified min', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.integer({ min: 5 });

      expect(number).toBeGreaterThanOrEqual(5);
      expect(number).toBeLessThan(1000);
    }
  });

  it('generate a random integer with specified max', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.integer({ max: 50 });

      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(50);
    }
  });

  it('generate a random integer with specified min and max', () => {
    for (let i = 0; i < 1000; i++) {
      const number = dunna.integer({ min: 5, max: 50 });

      expect(number).toBeGreaterThanOrEqual(5);
      expect(number).toBeLessThan(50);
    }
  });
});
