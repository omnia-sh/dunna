import { countries } from "@/database";
import choice from "@/modules/basic/choice";

export default function country() {
  return choice(countries);
}
