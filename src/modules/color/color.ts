import colors from "@/database/color";
import choice from "@/modules/basic/choice";
import type { Color } from "@/types";
import { hexToRgb } from "@/utils";

export default function color(): Color {
  const color = choice(colors);

  return { ...color, rgb: hexToRgb(color.hex) };
}
