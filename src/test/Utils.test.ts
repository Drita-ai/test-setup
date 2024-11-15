import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    // Utilizing JEST hook to initialize class
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
    });
  });

  it("should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert:
    expect(actual).toBe(expected);
  });
});

// Multiple test structures
describe("getStringInfo for arg My-String should", () => {
  test("return right length", () => {
    const actual = getStringInfo("My-String");
    expect(actual.characters).toHaveLength(9);
  });

  test("return right lower case", () => {
    const actual = getStringInfo("My-String");
    expect(actual.lowerCase).toBe("my-string");
  });

  test("return right upper case", () => {
    const actual = getStringInfo("My-String");
    expect(actual.upperCase).toBe("MY-STRING");
  });

  test("return defined extra info", () => {
    const actual = getStringInfo("My-String");
    expect(actual.extraInfo).toBeDefined();
  });

  test("return right extra info", () => {
    const actual = getStringInfo("My-String");
    expect(actual.extraInfo).toEqual({});
  });
});

// Parameterized Tests
describe("ToUpperCase examples", () => {
  it.each([
    { input: "abc", expected: "ABC" },
    { input: "My-String", expected: "MY-STRING" },
    { input: "def", expected: "DEF" },
  ])("$input toUpperCase should be $expected", ({ input, expected }) => {
    const actual = toUpperCase(input);
    expect(actual).toBe(expected);
  });
});
