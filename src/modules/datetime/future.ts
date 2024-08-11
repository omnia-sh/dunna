import integer from "@/modules/basic/integer";

interface FutureConfig {
  minFutureYears?: number;
  maxFutureYears?: number;
}

export default function future({ minFutureYears = 1, maxFutureYears = 10 }: FutureConfig = {}): Date {
  const daysInTheFuture = integer({
    min: minFutureYears * 365,
    max: maxFutureYears * 365,
  });

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + daysInTheFuture);

  return futureDate;
}
