type TCallable<A = unknown[], B = unknown> = (...args: A extends unknown[] ? A : [A]) => B;

type TCompareFunction = TCallable<[number, number], number>;

type TMinMax = {
  minValue: number;
  maxValue: number;
};

type TTimeRatioPromiseArgs = {
  targetAlgorithm: TCallable<[number[], TCompareFunction?], number[]>;
  guessFn: TCallable<number, number>;
  problemSize: number;
};

type TTimeRatios = Array<{
  duration?: number;
  problemSize: number;
  timeRatio: number;
  theoreticalTime?: number;
}>;
