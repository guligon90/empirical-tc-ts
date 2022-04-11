import { performance } from "perf_hooks";

import mergeSort from "../target-algorithm";
import { randomSequence } from "../common";

const timeRatioPromise = ({ targetAlgorithm, guessFn, problemSize }: TTimeRatioPromiseArgs) => {
	const promise = new Promise((resolve, reject) => {
		let start = 0;

		const convertOpsToTime = (problemSize: number): number => {
			// e.g. for a i7 4770K has 127,273 million instructions per second, at 3.9 GHz
			const convFactor = (1/127.373e3);
			return convFactor * guessFn(problemSize);
		}

		try	{
			console.log(`Calculating time ratio with problem size ${problemSize}...`);
			start = performance.now();
			targetAlgorithm([...randomSequence(problemSize, problemSize)]);
		} catch(error) {
			reject('Something went wrong');
		} finally {
			const duration = performance.now() - start;
			const theoreticalTime = convertOpsToTime(problemSize)
			const timeRatio =  theoreticalTime / duration;

			resolve({ duration, problemSize, theoreticalTime, timeRatio });
		}
	});

	return promise;
}

const calculateTimeRatios = async (guessFn: TCallable<number, number>, problemSizes: number[]): Promise<TTimeRatios | void> => {
	try {
			const promises = problemSizes.map(
					problemSize => timeRatioPromise({ targetAlgorithm: mergeSort, guessFn, problemSize })
			);

			const timeRatios = await Promise.all(promises) // g(n)/T(n) 

			return timeRatios as TTimeRatios;

	} catch(error) {
			console.error('Something went wrong');
	}
}

export default calculateTimeRatios;
export { timeRatioPromise };
