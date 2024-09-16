import float from "../basic/float";

interface BetweenConfig {
  min: Date;
  max: Date;
}

export default function future({ min, max }: BetweenConfig): Date {
  const minTime = min.getTime();
  const maxTime = max.getTime();

  const randomTime = float({ min: 0, max: 1, fixed: 2 }) * (maxTime - minTime) + minTime;

  return new Date(randomTime);
}
