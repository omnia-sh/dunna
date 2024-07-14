import colors from "../../database/color";
import type { Color } from "../../types";
import { hexToRgb } from "../../utils";
import { choice } from "../basic";

function color(): Color {
  const color = choice(colors);

  return { ...color, rgb: hexToRgb(color.hex) };
}

export default color;
