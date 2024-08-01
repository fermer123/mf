import {sort} from './sort';

describe('sort', () => {
  test('sort number arr', () => {
    const arr = [3, 1, 2];
    const resultAsc = sort(arr, 'asc');
    expect(resultAsc).toEqual([1, 2, 3]);

    const resultDesc = sort(arr, 'desc');
    expect(resultDesc).toEqual([3, 2, 1]);
  });
  test('sort string arr', () => {
    const arr = ['c', 'a', 'b'];
    const result = sort(arr, 'asc');
    expect(result).toEqual(['a', 'b', 'c']);
  });
  it('sort any values', () => {
    const arr = [null, undefined, 3, 1, 2];
    const result = sort(arr, 'asc');
    expect(result).toEqual([null, undefined, 3, 1, 2]);
  });
});
