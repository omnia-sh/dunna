import type { Gender } from "../../types";
import firstNameFn from "./first-name";
import lastNameFn from "./last-name";

interface EmailParams {
  domain?: string;
  gender?: Gender | "any";
}

export default function email({ domain = "example.com", gender = "any" }: EmailParams = {}) {
  const firstName = firstNameFn({ gender });
  const lastName = lastNameFn();

  return `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${domain}`;
}
