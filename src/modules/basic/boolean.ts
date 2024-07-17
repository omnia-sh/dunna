import float from "./float";

interface BooleanConfig {
  likelihood?: number;
}

export default function boolean({ likelihood = 50 }: BooleanConfig = {}): boolean {
  if (likelihood < 0 || likelihood > 100) {
    throw new Error("likliehood should be >= 0 and <= 100");
  }

  return float({ max: 100 }) < likelihood;
}
