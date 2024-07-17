import pick from "./pick";

export default function omit<T>(count: number, array: T[]): T[] {
  return pick(array.length - count, array);
}
