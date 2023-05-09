/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { King } from "./king.js";

describe("given a character class", () => {
  describe("when we instanciate it", () => {
    test("should have a character with the name", () => {
      const king = new King("Jofrey", "Baratheon", "14", "dead", "3");

      expect(king).toHaveProperty("name", "Jofrey");
      expect(king).toHaveProperty("family", "Baratheon");
      expect(king).toHaveProperty("age", "14");
      expect(king).toHaveProperty("status", "dead");
      expect(king).toHaveProperty("regnalyears");
    });
  });
});
