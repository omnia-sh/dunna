import colors from "../../database/color";
import type { Color } from "../../types";
import { hexToRgb } from "../../utils";
import choice from "../basic/choice";

export default function color(): Color {
  const color = choice(colors);

  return { ...color, rgb: hexToRgb(color.hex) };
}
