import { currencies } from "../../database";
import choice from "../basic/choice";

export default function currency() {
  return choice(currencies);
}
