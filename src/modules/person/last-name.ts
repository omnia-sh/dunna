import { lastNames } from "../../database";
import choice from "../basic/choice";

export default function lastName(): string {
  return choice(lastNames);
}
