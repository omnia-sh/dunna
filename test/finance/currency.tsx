import currency from '../../src/functions/finance/currency';
import { currencies } from '../../src/functions/finance/data';

describe('Test dunna.currency funnctions', () => {
  it('return a valid currency choice', () => {
    expect(currencies).toContainEqual(currency());
  });

  // TODO
  it('return a valid currency code');

  // TODO
  it('return a valid currency name');
});
