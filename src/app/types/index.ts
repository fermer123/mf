export const isStringArray = (arr: unknown): arr is string[] => {
  if (Array.isArray(arr) && arr.every((e) => typeof e === 'string')) {
    return true;
  }
  return false;
};
export const isNumberArray = (arr: unknown): arr is number[] => {
  if (Array.isArray(arr) && arr.every((e) => typeof e === 'number')) {
    return true;
  }
  return false;
};
