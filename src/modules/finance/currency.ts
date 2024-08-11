import { currencies } from "@/database";
import choice from "@/modules/basic/choice";

export default function currency() {
  return choice(currencies);
}
