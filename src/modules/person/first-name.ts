import { femaleFirstNames, maleFirstNames } from "../../database";
import type { Gender } from "../../types";
import choice from "../basic/choice";

interface FirstNameParams {
  gender?: Gender | "any";
}

export default function firstName({ gender = "any" }: FirstNameParams = {}): string {
  if (gender === "male") {
    return choice(maleFirstNames);
  }

  if (gender === "female") {
    return choice(femaleFirstNames);
  }

  return choice(choice([maleFirstNames, femaleFirstNames]));
}
