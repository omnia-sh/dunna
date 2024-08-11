import { lastNames } from "@/database";
import choice from "@/modules/basic/choice";

export default function lastName(): string {
  return choice(lastNames);
}
