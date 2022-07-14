const { translate } = require("../src/translate");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("words with capitcal letters", () => {
    let result = translate("OoOps");
    expect(result).toBe("ooopsway");
  });

  test("words that start with one consonant", () => {
    let result = translate("moon");
    expect(result).toBe("oonmay");
  });
  test("words that start with two consonants", () => {
    let result = translate("Sheesh");
    expect(result).toBe("eeshshway");
  });
});
