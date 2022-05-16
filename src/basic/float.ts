interface FloatConfig {
  min?: number;
  max?: number;
}

function float({ min = 0, max = 1000 }: FloatConfig = {}): number {
  const difference = max - min;

  return Math.random() * difference + min;
}

export default float;
