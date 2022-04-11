import calculateTimeRatios from './time-complexity';

(async () => {
  console.clear();

  const problemSizes = [10, 50, 100, 200, 500, 1e3, 1e4, 1e5, 1e6, 1e7];
  const guessFn = (n: number) => n * Math.log2(n); // theoretical guess function g(n) = n*log(n)
  const timeRatios = await calculateTimeRatios(guessFn, problemSizes);

  console.log(timeRatios, null, '\t');
})();
