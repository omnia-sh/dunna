import dunna from '../../src';
import { letters } from '../../src/database';

describe('Test dunna.letter() function', () => {
  it('Return a letter', () => {
    const letter = dunna.letter();

    expect(letters.all).toContain(letter);
  });

  it('Return an upper case letter', () => {
    const letter = dunna.letter({ casing: 'upper' });

    expect(letters.upper).toContain(letter);
  });

  it('Return a lower case letter', () => {
    const letter = dunna.letter({ casing: 'lower' });

    expect(letters.lower).toContain(letter);
  });
});
