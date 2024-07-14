import type { RGB } from "../../types";
import { hexToRgb } from "../../utils";
import hex from "./hex";

function rgb(): RGB {
  return hexToRgb(hex());
}

export { rgb };
