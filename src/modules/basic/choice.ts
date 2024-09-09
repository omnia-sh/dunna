import integer from "./integer";

export default function choice<T>(choices: T[]): T {
  return choices[integer({ max: choices.length })];
}
