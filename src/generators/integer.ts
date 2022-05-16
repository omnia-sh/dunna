import float from './float';

interface IntegerParams {
  min?: number;
  max?: number;
}

function integer({ min = 0, max = 1000 }: IntegerParams = {}): number {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('The min and max can not be float numbers.');
  }

  return Math.floor(float({ min, max }));
}

export default integer;
