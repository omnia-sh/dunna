interface FloatParams {
  min?: number;
  max?: number;
}

const defaultFloatParams = {
  min: 0,
  max: 1000,
};

function float({
  min = 0,
  max = 1000,
}: FloatParams = defaultFloatParams): number {
  const difference = max - min;

  return Math.random() * difference + min;
}

export default float;
