import colors from "@/database/color";
import choice from "@/modules/basic/choice";

export default function colorName() {
  return choice(colors).name;
}
