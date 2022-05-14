import float from './float';

interface BooleanParams {
  likelihood?: number;
}

const defaultBooleanParams: BooleanParams = {
  likelihood: 50,
};

function boolean({
  likelihood = 50,
}: BooleanParams = defaultBooleanParams): boolean {
  if (likelihood < 0 || likelihood > 100) {
    throw new Error('likliehood should be >= 0 and <= 100');
  }

  return float({ max: 100 }) < likelihood;
}

export default boolean;
