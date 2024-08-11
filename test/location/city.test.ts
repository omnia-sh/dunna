import { describe, expect, test } from "bun:test";
import { countries } from "@/database";
import city from "@/modules/location/city";
import { dunna } from "dunna";

describe("Test city functions", () => {
  test("returns a valid city", () => {
    // Get all cities
    const cities = countries.flatMap((country) => country.cities);
    expect(cities).toContain(city());
  });

  test("returns a valid city name", () => {
    // Get all cities names
    const citiesNames = countries.flatMap((country) => country.cities.map((city) => city.name));

    expect(citiesNames).toContain(dunna.location.cityName());
  });

  test("returns a valid city lng", () => {
    // Get all cities lngs
    const citiesLngs = countries.flatMap((country) => country.cities.map((city) => city.lng));

    expect(citiesLngs).toContain(dunna.location.lng());
  });

  test("returns a valid city lat", () => {
    // Get all cities lats
    const citiesLats = countries.flatMap((country) => country.cities.map((city) => city.lat));

    expect(citiesLats).toContain(dunna.location.lat());
  });
});
