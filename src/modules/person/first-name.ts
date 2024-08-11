import { femaleFirstNames, maleFirstNames } from "@/database";
import choice from "@/modules/basic/choice";
import type { Gender } from "@/types";

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
