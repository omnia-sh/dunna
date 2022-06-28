import dunna from '../../src';

describe('Test dunna.omit() function', () => {
  it('check if count elements are deleted from the array', () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8];

      const result = dunna.omit(3, nums);

      expect(result.every((el) => nums.includes(el))).toBe(true);

      expect(result.length).toEqual(5);
    }
  });

  it('throw error when count is less than 0', () => {
    expect(() => dunna.omit(-1, [1, 2, 3])).toThrowError();
  });

  it('throw error when count is bigger than the array length', () => {
    expect(() => dunna.omit(10, [1, 2, 3])).toThrowError();
  });

  it('throw error when count type is float', () => {
    expect(() => dunna.omit(5.2, [1, 2, 3])).toThrowError();
  });
});
