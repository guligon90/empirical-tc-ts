export type TCallable<A = unknown[], B = unknown> = (...args: A extends unknown[] ? A : [A]) => B;

export type TCompareFunction = TCallable<[number, number], number>;

export type TMinMax = {
  minValue: number;
  maxValue: number;
};

export interface ITimeRatioPromiseArgs {
  targetAlgorithm: TCallable<[number[], TCompareFunction?], number[]>;
  guessFunction: TCallable<number, number>;
  problemSize: number;
}

export interface ITimeRatio {
  measuredTime?: number;
  problemSize: number;
  timeRatio: number;
  theoreticalTime?: number;
}
