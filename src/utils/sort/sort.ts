import {isNumberArray, isStringArray} from '@app/types';

type TSortDirection = 'asc' | 'desc';

export const sort = <T>(arr: T[], direction: TSortDirection = 'asc'): T[] => {
  const sortedArr = [...arr];
  if (isNumberArray(arr)) {
    if (direction === 'asc') {
      sortedArr.sort((a, b) => (a as number) - (b as number));
    } else {
      sortedArr.sort((a, b) => (b as number) - (a as number));
    }
  }
  if (isStringArray(arr)) {
    if (direction === 'asc') {
      sortedArr.sort((a, b) => (a as string).localeCompare(b as string));
    } else {
      sortedArr.sort((a, b) => (b as string).localeCompare(a as string));
    }
  }
  return sortedArr;
};
