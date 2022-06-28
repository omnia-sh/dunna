import dunna from '../../src';

describe('Test dunna.pick() function', () => {
  it('check if all elements are contained from the array', () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6];

      const picks = dunna.pick(3, nums);

      expect(picks.every((pick) => nums.includes(pick))).toBe(true);

      expect(picks.length).toEqual(3);
    }
  });

  it('throw error when count is less than 0', () => {
    expect(() => dunna.pick(-1, [1, 2, 3])).toThrowError();
  });

  it('throw error when count is bigger than the array length', () => {
    expect(() => dunna.pick(10, [1, 2, 3])).toThrowError();
  });

  it('throw error when array is empty', () => {
    expect(() => dunna.pick(5, [])).toThrowError();
  });

  it('throw error when count type is float', () => {
    expect(() => dunna.pick(5.2, [1, 2, 3])).toThrowError();
  });
});
