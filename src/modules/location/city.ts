import choice from "@/modules/basic/choice";
import country from "./country";

export default function city() {
  return choice(country().cities);
}
