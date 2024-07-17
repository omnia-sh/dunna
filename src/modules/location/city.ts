import choice from "../basic/choice";
import country from "./country";

export default function city() {
  return choice(country().cities);
}
