import { describe, expect, test } from "bun:test";
import { dunna } from "../../src";
import { letters } from "../../src/database";

describe("Test dunna.basic.letter() function", () => {
  test("return a letter", () => {
    const letter = dunna.basic.letter();

    expect(letters.all).toContain(letter);
  });

  test("return an upper case letter", () => {
    const letter = dunna.basic.letter({ casing: "upper" });

    expect(letters.upper).toContain(letter);
  });

  test("return a lower case letter", () => {
    const letter = dunna.basic.letter({ casing: "lower" });

    expect(letters.lower).toContain(letter);
  });
});
