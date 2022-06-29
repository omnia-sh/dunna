export function chunk<T>(nums: T[], count: number): T[][] {
  const res: T[][] = [];

  for (let i = 0; i < nums.length; i += count) {
    res.push(nums.slice(i, i + count));
  }

  return res;
}
