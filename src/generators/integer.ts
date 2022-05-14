import float from './float';

interface IntegerParams {
  min?: number;
  max?: number;
}

const defaultIntegerParams: IntegerParams = {
  min: 0,
  max: 1000,
};

function integer({
  min = 0,
  max = 1000,
}: IntegerParams = defaultIntegerParams): number {
  return Math.floor(float({ min, max }));
}

export default integer;
