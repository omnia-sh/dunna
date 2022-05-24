interface FloatConfig {
  min?: number;
  max?: number;
  fixed?: number;
}

function float({ min = 0, max = 1000, fixed = 3 }: FloatConfig = {}): number {
  const difference = max - min;

  const num = Math.random() * difference + min;

  return parseFloat(num.toFixed(fixed));
}

export default float;
