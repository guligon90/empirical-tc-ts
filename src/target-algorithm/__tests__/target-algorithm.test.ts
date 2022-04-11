import mergeSort from '..';

describe("Unit testing for the 'target' utility", () => {
  const testCases = [
    [
      [4, 5, 3, 7, 2, 6, 8, 1], // input
      [1, 2, 3, 4, 5, 6, 7, 8], // expected
    ],
    [
      [2, 5, 3, 8, 2, 1, 8, 1],
      [1, 1, 2, 2, 3, 5, 8, 8],
    ],
  ];

  test.each(testCases)('Tests mergeSort for %p. Must return %p', (input: number[], expected: number[]) => {
    const result = mergeSort(input);
    expect(result).toEqual(expected);
  });
});
