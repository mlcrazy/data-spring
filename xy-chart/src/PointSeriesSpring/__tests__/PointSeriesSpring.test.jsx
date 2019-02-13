import React from 'react';
import PointSeriesSpring from '../';
import { config } from 'react-spring';
import { XYChart } from '@data-ui/xy-chart';
import renderer from 'react-test-renderer';


it('renders successfully', () => {
  const tree = renderer
    .create(
      <XYChart
        width={700}
        height={350}
        xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
        yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
      >
        <PointSeriesSpring
          strokeWidth={0.3}
          fillOpacity=".75"
          fill="#000"
          stroke="#000"
          animationStart="bottom"
          data={testSeries.xySeries}
          bounds={chartBounds}
          springConfig={config.gentle}
        />
      </XYChart>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with default animationStart props', () => {
  const tree = renderer
    .create(
      <XYChart
        width={700}
        height={350}
        xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
        yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
      >
        <PointSeriesSpring
          strokeWidth={0.3}
          fillOpacity=".75"
          fill="#000"
          stroke="#000"
          data={testSeries.xySeries}
          bounds={chartBounds}
          springConfig={config.gentle}
        />
      </XYChart>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with default springConfig props', () => {
  const tree = renderer
    .create(
      <XYChart
        width={700}
        height={350}
        xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
        yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
      >
        <PointSeriesSpring
          strokeWidth={0.3}
          fillOpacity=".75"
          fill="#000"
          stroke="#000"
          animationStart="bottom"
          data={testSeries.xySeries}
          bounds={chartBounds}
        />
      </XYChart>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const testSeries = {
  xySeries: [
    {
      x: 5,
      y: 6,
    },
    {
      x: 8,
      y: 3,
    },
    {
      x: 2,
      y: 7,
    },
    {
      x: 10,
      y: 1,
    },
  ],
}

const chartBounds = {
  xMin: 0,
  yMin: 0,
  xMax: 9,
  yMax: 10,
};
