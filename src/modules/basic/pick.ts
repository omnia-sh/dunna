import integer from './integer';
import assert from 'assert';

function pick<T>(count: number, array: T[]) {
  assert(count >= 0 && count <= array.length);

  if (array.length === count) {
    return array;
  }

  if (array.length === 0) {
    throw new Error('array should have at least one element');
  }

  if (!Number.isInteger(count)) {
    throw new Error('count should be integer');
  }

  let picks: T[] = [];
  let indicies = new Set<number>();

  while (indicies.size < count) {
    const index = integer({ max: array.length });

    if (!indicies.has(index)) {
      indicies.add(index);
      picks.push(array[index]);
    }
  }

  return picks;
}

export default pick;
