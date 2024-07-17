import { countries } from "../../database";
import choice from "../basic/choice";

export default function country() {
  return choice(countries);
}
