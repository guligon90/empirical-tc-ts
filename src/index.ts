import calculateTimeRatios from './time-complexity';
import Plotter from './plotting';
import { ProcessorSpecs } from './common';

const guessFunction = (n: number, MIPS: number = ProcessorSpecs.MIPS, useConvFactor = true): number => {
  // Theoretical guess function g(n)
  // kPrime? Because g is arbitrary :)
  const bigOhGuess = (n: number, kPrime = 5) => kPrime * n * Math.log2(n);

  // TODO: Study a better way of incorporating MIPS into big Oh guess
  return useConvFactor ? (1e3 / MIPS) * bigOhGuess(n) : bigOhGuess(n);
};

(async () => {
  console.clear();

  const problemSizes = [1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6];

  const timeRatios = await calculateTimeRatios(guessFunction, problemSizes);

  if (timeRatios !== undefined) {
    const plotter = Plotter('merge sort');

    plotter.timeRatios(timeRatios);
    plotter.executionTimes(timeRatios);
  }
})();
