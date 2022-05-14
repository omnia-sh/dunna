interface IntegerPrams {
  min?: number;
  max?: number;
}

const defaultIntegerParams: IntegerPrams = {
  min: 0,
  max: 1000000,
};

export default function integer({
  min = 0,
  max = 1000000,
}: IntegerPrams = defaultIntegerParams) {
  return Math.floor(Math.random() * (max - min)) + min;
}
