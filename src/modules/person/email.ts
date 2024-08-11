import choice from "@/modules/basic/choice";
import integer from "@/modules/basic/integer";
import type { Gender } from "@/types";
import firstNameFn from "./first-name";
import lastNameFn from "./last-name";

interface EmailParams {
  domain?: string;
  gender?: Gender | "any";
}

export default function email({ domain, gender = "any" }: EmailParams = {}) {
  const firstName = firstNameFn({ gender });
  const lastName = lastNameFn();

  const domains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "example.com"];
  const chosenDomain = domain || choice(domains);

  const firstPart = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
  const secondPart = integer({ min: 1000, max: 9999 });

  return `${firstPart}${secondPart}@${chosenDomain}`;
}
