/* eslint-disable no-undef */

import { Fighter } from "./fighter";

describe("given a character class", () => {
  describe("when we instanciate it", () => {
    test("should have a character with the name", () => {
      const fighter = new Fighter("Jofrey", "Soria", "31", "alive");

      expect(fighter).toHaveProperty("name", "Jofrey");
      expect(fighter).toHaveProperty("family", "Soria");
      expect(fighter).toHaveProperty("age", "31");
      expect(fighter).toHaveProperty("status", "alive");
    });
  });
});
