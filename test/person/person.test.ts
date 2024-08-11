import { describe, expect, test } from "bun:test";
import { femaleFirstNames, lastNames, maleFirstNames } from "@/database";
import { dunna } from "dunna";

describe("Test dunna person module", () => {
  test("return a valid firstName", () => {
    const firstName = dunna.person.firstName();

    expect([...maleFirstNames, ...femaleFirstNames]).toContain(firstName);
  });

  test("return a valid male firstName", () => {
    const firstName = dunna.person.firstName({ gender: "male" });

    expect(maleFirstNames).toContain(firstName);
  });

  test("return a valid female firstName", () => {
    const firstName = dunna.person.firstName({ gender: "female" });

    expect(femaleFirstNames).toContain(firstName);
  });

  test("return a valid lastName", () => {
    const lastName = dunna.person.lastName();

    expect(lastNames).toContain(lastName);
  });

  test("return a valid gender", () => {
    expect(["male", "female"]).toContainEqual(dunna.person.gender());
  });

  // TODO
  test("return a valid fullName", () => {});

  // TODO
  test("return a valid email", () => {});

  // TODO
  test("return a valid person", () => {});
});
