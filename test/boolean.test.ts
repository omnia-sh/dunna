import dunna from '../src';

describe('Test dunna.boolean() function', () => {
  it('return a boolean', () => {
    const boolean = dunna.boolean();

    expect([true, false]).toContain(boolean);
  });

  it('return true when likelihood = 100', () => {
    for (let i = 0; i < 100; i++) {
      const boolean = dunna.boolean({ likelihood: 100 });

      expect(boolean).toEqual(true);
    }
  });

  it('return false when likelihood = 0', () => {
    for (let i = 0; i < 100; i++) {
      const boolean = dunna.boolean({ likelihood: 0 });

      expect(boolean).toEqual(false);
    }
  });

  it('throw error when likliehood < 0 or > 100', () => {
    expect(() => dunna.boolean({ likelihood: -1 })).toThrowError();

    expect(() => dunna.boolean({ likelihood: 101 })).toThrowError();
  });
});
