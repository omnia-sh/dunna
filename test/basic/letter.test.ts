import dunna from '../../src';
import { letters } from '../../src/database';

describe('Test dunna.letter() function', () => {
  it('return a letter', () => {
    const letter = dunna.letter();

    expect(letters.all).toContain(letter);
  });

  it('return an upper case letter', () => {
    const letter = dunna.letter({ casing: 'upper' });

    expect(letters.upper).toContain(letter);
  });

  it('return a lower case letter', () => {
    const letter = dunna.letter({ casing: 'lower' });

    expect(letters.lower).toContain(letter);
  });
});
