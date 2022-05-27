import dunna from '../../src';
import currency from '../../src/modules/finance/currency';
import { currencies } from '../../src/modules/finance/data';

describe('Test dunna.currency funnctions', () => {
  it('return a valid currency choice', () => {
    expect(currencies).toContainEqual(currency());
  });

  it('return a valid currency code', () => {
    const currenciesCodes = currencies.map(item => item.code);

    expect(currenciesCodes).toContain(dunna.currencyCode());
  });

  it('return a valid currency name', () => {
    const currenciesNames = currencies.map(item => item.name);

    expect(currenciesNames).toContain(dunna.currencyName());
  });
});
