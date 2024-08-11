import { letters } from "@/database";
import integer from "./integer";

interface LetterConfig {
  casing?: "upper" | "lower" | "any";
}

export default function letter({ casing = "any" }: LetterConfig = {}) {
  if (casing === "lower") {
    return letters.lower[integer({ max: 26 })];
  }

  if (casing === "upper") {
    return letters.upper[integer({ max: 26 })];
  }

  return letters.all[integer({ max: 26 * 2 })];
}
