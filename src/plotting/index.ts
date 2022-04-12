import { Layout, plot, Plot } from 'nodeplotlib';
import { ITimeRatio } from '../types';

const defaultSeries: (keyof ITimeRatio)[] = ['timeRatio'];

const plotLayouts = (algorithmName: string): Record<string, Partial<Layout>> => {
  return {
    TIME_RATIO: {
      title: `Time ratios for algorithm ${algorithmName}`,
      xaxis: { title: 'Problem size [-]' },
      yaxis: { title: 'Time ratio [-]' },
    },
    EXECUTION_TIME: {
      title: `Execution times for algorithm ${algorithmName}`,
      xaxis: { title: 'Problem size [-]' },
      yaxis: { title: 'Execution time [ms]' },
    },
  };
};

const mapTimeRatiosToPlotData = (
  timeRatioData: ITimeRatio[],
  seriesToPlot: (keyof ITimeRatio)[] = defaultSeries,
): Plot[] => {
  const getSeries = (label: string): (number | undefined)[] => {
    return timeRatioData.map((item: ITimeRatio) => item[label as keyof ITimeRatio]);
  };

  const plotData: Plot[] = seriesToPlot.map((series: keyof ITimeRatio) => {
    return {
      x: getSeries('problemSize') as number[],
      y: getSeries(series) as number[],
      name: series,
    };
  });

  return plotData;
};

const Plotter = (algorithmName: string) => {
  const generatePlot = (plotData: Plot[], plotLayout: Layout): void => {
    plot(plotData, plotLayout);
  };

  const api = {
    timeRatios: (data: ITimeRatio[]): void => {
      const plotData = mapTimeRatiosToPlotData(data);
      const layout = plotLayouts(algorithmName).TIME_RATIO;

      generatePlot(plotData, layout);
    },
    executionTimes: (data: ITimeRatio[]): void => {
      const plotData = mapTimeRatiosToPlotData(data, ['measuredTime', 'theoreticalTime']);
      const layout = plotLayouts(algorithmName).EXECUTION_TIME;

      generatePlot(plotData, layout);
    },
  };

  return api;
};

export default Plotter;
export { mapTimeRatiosToPlotData };
