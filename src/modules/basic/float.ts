interface FloatConfig {
  min?: number;
  max?: number;
  fixed?: number;
}

function limitFractions(num: number, fixed: number): number {
  if (num % 1 === 0) {
    throw new Error("Receive a number without fractions");
  }

  const [whole, _faractions] = num.toString().split(".");

  const fractions = _faractions.substring(0, fixed);

  return Number.parseFloat(`${whole}.${fractions}`);
}

export default function float({ min = 0, max = 10, fixed = 3 }: FloatConfig = {}): number {
  const difference = max - min;

  const num = Math.random() * difference + min;

  return limitFractions(num, fixed);
}
