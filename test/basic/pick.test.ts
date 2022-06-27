import dunna from '../../src';

describe('Test dunna.pick() function', () => {
  it('Check elements if contained from the array', () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6];

      const picks = dunna.pick(nums, 2);

      console.log(picks);

      expect(picks.some((pick) => nums.includes(pick))).toBe(true);
    }
  });

  it('Throw error when count is less or equal 0', () => {
    expect(() => dunna.pick([1, 2, 3], 0)).toThrowError();
  });

  it('Throw error when count is bigger than the array length', () => {
    expect(() => dunna.pick([1, 2, 3], 10)).toThrowError();
  });

  it('Throw error when array is empty', () => {
    expect(() => dunna.pick([], 5)).toThrowError();
  });

  it('Throw error when count type is float', () => {
    expect(() => dunna.pick([1, 2, 3], 5.2)).toThrowError();
  });
});
