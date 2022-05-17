import integer from './integer';
import { letters } from './data';

interface LetterConfig {
  casing?: 'upper' | 'lower' | 'any';
}

function letter({ casing = 'any' }: LetterConfig = {}) {
  if (casing === 'lower') {
    return letters.lower[integer({ max: 26 })];
  }

  if (casing === 'upper') {
    return letters.upper[integer({ max: 26 })];
  }

  return letters.all[integer({ max: 26 * 2 })];
}

export default letter;
