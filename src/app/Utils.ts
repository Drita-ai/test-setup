// For testing jest Hooks
export class StringUtils {
  public toUpperCase(arg: string) {
    // Check for the argument
    if (!arg) {
      throw new Error("Invalid argument!");
    }
    return toUpperCase(arg);
  }
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

// Defined function for Matchers
export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
