import integer from "./integer";

export default function choice<T>(choices: T[]) {
  return choices[integer({ max: choices.length })];
}
