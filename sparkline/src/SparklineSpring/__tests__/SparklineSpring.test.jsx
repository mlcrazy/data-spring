import React from 'react';
import SparklineSpring from '../';
import { config } from 'react-spring';
import { LineSeries, PointSeries } from '@data-ui/sparkline';
import renderer from 'react-test-renderer';


it('renders successfully', () => {
  const tree = renderer
    .create(
      <SparklineSpring
        width={700}
        height={350}
        ariaLabel="Test animated line"
        animationStart="bottom"
        data={testSeries.xySeries}
        bounds={chartBounds}
        springConfig={config.gentle}
      >
        <LineSeries
          strokeWidth={0.3}
          curve="monotoneX"
          fill="#000"
          stroke="#000"
        />
      </SparklineSpring>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a point series', () => {
  const tree = renderer
    .create(
      <SparklineSpring
        width={700}
        height={350}
        ariaLabel="Test animated line"
        animationStart="bottom"
        data={testSeries.xySeries}
        bounds={chartBounds}
        springConfig={config.gentle}
      >
        <PointSeries
          size={5}
          fill="#000"
          stroke="#000"
        />
      </SparklineSpring>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with default animationStart props', () => {
  const tree = renderer
    .create(
      <SparklineSpring
        width={700}
        height={350}
        ariaLabel="Test animated line"
        data={testSeries.xySeries}
        bounds={chartBounds}
        springConfig={config.gentle}
      >
        <LineSeries
          strokeWidth={0.3}
          curve="monotoneX"
          fill="#000"
          stroke="#000"
        />
      </SparklineSpring>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with default springConfig props', () => {
  const tree = renderer
    .create(
      <SparklineSpring
        width={700}
        height={350}
        ariaLabel="Test animated line"
        animationStart="bottom"
        data={testSeries.xySeries}
        bounds={chartBounds}
      >
        <LineSeries
          strokeWidth={0.3}
          curve="monotoneX"
          fill="#000"
          stroke="#000"
        />
      </SparklineSpring>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const testSeries = {
  xySeries: [
    {
      x: 1,
      y: 9,
    },
    {
      x: 5,
      y: 4,
    },
    {
      x: 8,
      y: 3,
    },
    {
      x: 10,
      y: 2,
    },
  ],
}

const chartBounds = {
  xMin: 0,
  yMin: 0,
  xMax: 9,
  yMax: 10,
};
