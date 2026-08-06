import { country } from './country';

export function countryFlag() {
  const iso2 = country().ISO2.toUpperCase();
  return String.fromCodePoint(127397 + iso2.charCodeAt(0), 127397 + iso2.charCodeAt(1));
}
