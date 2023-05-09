/* eslint-disable no-undef */
import { Character } from "./character.js";

describe("given a character class", () => {
  describe("when we instanciate it", () => {
    test("should have a character with the name", () => {
      const character = new Character("Jofrey", "Baratheon", "14", "dead");

      expect(character).toHaveProperty("name", "Jofrey");
      expect(character).toHaveProperty("family", "Baratheon");
      expect(character).toHaveProperty("age", "14");
      expect(character).toHaveProperty("status", "dead");
    });
  });
});
