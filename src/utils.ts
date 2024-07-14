import type { RGB } from "./types";

export function hexToRgb(hex: string): RGB {
  const bigint = Number.parseInt(hex.replace("#", ""), 16);

  return {
    red: (bigint >> 16) & 255,
    green: (bigint >> 8) & 255,
    blue: bigint & 255,
  };
}

export function hexToRgbString(hex: string): string {
  const rgb = hexToRgb(hex);

  return `rgb(${rgb.red}, ${rgb.green}, ${rgb.green})`;
}
