import { performance } from 'perf_hooks';

import mergeSort from '../target-algorithm';
import { randomSequence } from '../common';
import { TTimeRatioPromiseArgs, TCallable, TTimeRatio } from '../types';

const timeRatioPromise = ({ targetAlgorithm, guessFunction, problemSize }: TTimeRatioPromiseArgs) => {
  const promise = new Promise((resolve, reject) => {
    let start = 0;

    try {
      console.log(`Calculating time ratio with problem size ${problemSize}...`);
      start = performance.now();
      targetAlgorithm([...randomSequence(problemSize, problemSize)]);
    } catch (error) {
      reject('Something went wrong');
    } finally {
      const measuredTime = performance.now() - start;
      const theoreticalTime = guessFunction(problemSize);
      const timeRatio = theoreticalTime / measuredTime;

      resolve({ measuredTime, problemSize, theoreticalTime, timeRatio });
    }
  });

  return promise;
};

const calculateTimeRatios = async (
  guessFunction: TCallable<number, number>,
  problemSizes: number[],
): Promise<TTimeRatio[] | void> => {
  try {
    const promises = problemSizes.map((problemSize) =>
      timeRatioPromise({ targetAlgorithm: mergeSort, guessFunction, problemSize }),
    );

    const timeRatios = await Promise.all(promises); // g(n)/T(n)

    return timeRatios as TTimeRatio[];
  } catch (error) {
    console.error('Something went wrong');
  }
};

export default calculateTimeRatios;
export { timeRatioPromise };
