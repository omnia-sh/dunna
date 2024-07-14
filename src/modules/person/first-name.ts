import { femaleFirstNames, maleFirstNames } from "../../database";
import type { Gender } from "../../types";
import { choice } from "../basic";

interface FirstNameParams {
  gender?: Gender | "any";
}

function firstName({ gender = "any" }: FirstNameParams = {}): string {
  if (gender === "male") {
    return choice(maleFirstNames);
  }

  if (gender === "female") {
    return choice(femaleFirstNames);
  }

  return choice(choice([maleFirstNames, femaleFirstNames]));
}

export default firstName;
