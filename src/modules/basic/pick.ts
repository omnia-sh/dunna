import integer from './integer';

function pick<T>(count: number, array: T[]) {
  if (array.length === count) {
    return array;
  }

  if (count <= 0 || count > array.length) {
    throw new Error('count should be > 0 and < array length');
  }

  if (array.length === 0) {
    throw new Error('array should have at least one element');
  }

  if (!Number.isInteger(count)) {
    throw new Error('count should be integer');
  }

  let picks: T[] = [];
  let indices = new Set<number>();

  let randomIndex;

  while (randomIndex === undefined || indices.size !== count) {
    randomIndex = integer({ max: array.length });

    indices.add(randomIndex);

    if (indices.has(randomIndex)) {
      picks.push(array[randomIndex]);
    }
  }

  return picks;
}

export default pick;
