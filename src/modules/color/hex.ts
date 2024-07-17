import colors from "../../database/color";
import choice from "../basic/choice";

export default function hex() {
  return choice(colors).hex;
}
