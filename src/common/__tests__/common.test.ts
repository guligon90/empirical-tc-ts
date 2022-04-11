import { isGeneratorFunction, isGeneratorObject } from 'util/types';
import { defaultCompare, findMinMaxValue, randomSequence } from '..';

describe("Unit testing for 'common' utility", () => {
  const testCases = [
    [2, 2, 0],
    [1, 2, -1],
    [5.32, 5.3, 1],
  ];

  test.each(testCases)('tests defaultCompare for (%d, %d). Expects %d', (x, y, expected) => {
    expect(defaultCompare(x, y)).toStrictEqual(expected);
  });

  it('tests randomSequence function', () => {
    const quantity = 80;
    const max = 15;

    const generator = randomSequence(quantity, max);

    expect(isGeneratorFunction(randomSequence)).toBeTruthy();
    expect(isGeneratorObject(generator)).toBeTruthy();

    const sequence = [...generator];
    const { maxValue } = findMinMaxValue(sequence);

    expect(sequence.length).toStrictEqual(quantity);
    expect(maxValue).toStrictEqual(max);
  });
});
