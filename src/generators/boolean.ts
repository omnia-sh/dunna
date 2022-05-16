import float from './float';

interface BooleanParams {
  likelihood?: number;
}

function boolean({ likelihood = 50 }: BooleanParams = {}): boolean {
  if (likelihood < 0 || likelihood > 100) {
    throw new Error('likliehood should be >= 0 and <= 100');
  }

  return float({ max: 100 }) < likelihood;
}

export default boolean;
