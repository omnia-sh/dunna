function pick<T>(array: T[], count: number) {
  if (array.length === count) return array;

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
  let indices: number[] = [];

  for (let i = 0; i < count; i++) {
    let randomIndex;

    while (randomIndex === undefined || indices.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * array.length);
    }

    indices.push(randomIndex);

    picks.push(array[randomIndex]);
  }

  return picks;
}

export default pick;
