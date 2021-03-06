import { TMinMax } from '../types';

enum ECompare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
}

// Specs for an Intel Core i5-2500K
// https://en.wikipedia.org/wiki/Instructions_per_second
const ProcessorSpecs = {
  MIPS: 83e6,
  instructions: {
    perClockCycle: 25.152,
    perClockCyclePerCore: 6.288,
  },
};

const findMinMaxValue = (array: number[]): TMinMax => {
  let minValue = array[0];
  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {
    // {4}
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return { minValue, maxValue };
};

const defaultCompare = (x: number, y: number): number => {
  if (x === y) {
    return 0;
  }
  return x < y ? ECompare.LESS_THAN : ECompare.BIGGER_THAN;
};

function* randomSequence(quantity: number, max = 30): Generator<number> {
  let count = 0;

  while (count < quantity) {
    count++;
    yield Math.floor(Math.random() * max) + 1;
  }
}

export { defaultCompare, ECompare, findMinMaxValue, ProcessorSpecs, randomSequence };
