import dunna from '../../src';

describe('Test dunna.choice() function', () => {
  it('return a valid number choice', () => {
    for (let i = 0; i < 100; i++) {
      const nums = [1, 2, 3, 4, 5, 6];

      const num = dunna.choice(nums);

      expect(nums).toContain(num);
    }
  });

  it('return a valid string choice', () => {
    for (let i = 0; i < 100; i++) {
      const names = ['Alice', 'Bob', 'Charlie'];

      const name = dunna.choice(names);

      expect(names).toContain(name);
    }
  });
});
