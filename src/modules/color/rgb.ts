import type { RGB } from "@/types";
import { hexToRgb } from "@/utils";
import hex from "./hex";

export default function rgb(): RGB {
  return hexToRgb(hex());
}
