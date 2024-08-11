import { describe, expect, test } from "bun:test";
import { hexToRgb } from "@/utils";
import { dunna } from "dunna";

describe("Test dunna color module", () => {
  test("return a valid hex color", () => {
    const hex = dunna.color.hex();
    expect(hex).toMatch(/^#([A-Fa-f0-9]{6})$/);
  });

  test("return a valid rgb color", () => {
    const rgb = dunna.color.rgb();
    const colorNumber = [rgb.blue, rgb.green, rgb.red];
    for (const iterator of colorNumber) {
      expect(iterator).toBeGreaterThanOrEqual(0);
      expect(iterator).toBeLessThanOrEqual(255);
    }
  });

  test("hexToRgb convet hex to a right rgb color", () => {
    const rgb = hexToRgb("#7fff00");
    expect({ red: 127, green: 255, blue: 0 }).toEqual(rgb);
  });
});
