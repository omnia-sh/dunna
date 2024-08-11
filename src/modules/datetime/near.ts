import integer from "../basic/integer";

interface NearConfig {
  minFutureDays?: number;
  maxFutureDays?: number;
}

export default function near({ minFutureDays = 0, maxFutureDays = 10 }: NearConfig = {}): Date {
  const daysInTheNear = integer({
    min: minFutureDays,
    max: maxFutureDays,
  });

  const nearDate = new Date();
  nearDate.setDate(nearDate.getDate() + daysInTheNear);

  return nearDate;
}
