import React from 'react';
import { calcFlattenedStart, constructArray } from '../motionUtil';
import { config } from 'react-spring';
import renderer from 'react-test-renderer';


it('constructArray matches expected output for xySeries', () => {
  const testConstructArray = constructArray(
    flattenedValues.xySeries,
    testSeries.xySeries,
  );
  expect(testConstructArray).toMatchSnapshot();
});

it('constructArray matches expected output for boundArea series', () => {
  const testFlattenedStart = constructArray(
    flattenedValues.boundArea,
    testSeries.boundArea,
  );
  expect(testFlattenedStart).toMatchSnapshot();
});

it('calcFlattenedStart matches expected output for xySeries', () => {
  const testFlattenedStart = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'bottom',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  expect(testFlattenedStart).toMatchSnapshot();
});

it('calcFlattenedStart matches expected output for boundArea series', () => {
  const testFlattenedStart = calcFlattenedStart({
    data: testSeries.boundArea,
    animationStart: 'bottom',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  expect(testFlattenedStart).toMatchSnapshot();
});

it('calcFlattenedStart calculates all animationStart options', () => {
  const testBottomLeft = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'bottomLeft',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testBottomRight = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'bottomRight',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testTopRight = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'topRight',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testTopLeft = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'topLeft',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testTop = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'top',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testBottom = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'bottom',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testLeft = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'left',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testRight = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'right',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  const testEdge = calcFlattenedStart({
    data: testSeries.xySeries,
    animationStart: 'edge',
    sizeCalculator: () => 1,
    bounds: chartBounds,
    xScale: mockChartScale.xScale,
    yScale: mockChartScale.yScale,
  });
  expect(testBottomLeft).toMatchSnapshot();
  expect(testBottomRight).toMatchSnapshot();
  expect(testTopLeft).toMatchSnapshot();
  expect(testTopRight).toMatchSnapshot();
  expect(testBottom).toMatchSnapshot();
  expect(testTop).toMatchSnapshot();
  expect(testLeft).toMatchSnapshot();
  expect(testRight).toMatchSnapshot();
  expect(testEdge).toMatchSnapshot();
});

const testSeries = {
  boundArea: [
    {
      x: 2,
      y0: 0,
      y1: 6,
    },
    {
      x: 4,
      y0: 0,
      y1: 9,
    },
    {
      x: 5,
      y0: 0,
      y1: 6,
    },
    {
      x: 8,
      y0: 0,
      y1: 3,
    },
  ],
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

const flattenedValues = {
  xySeries: {
    y0: 2,
    x0: 1,
    y1: 4,
    x1: 5,
    y2: 6,
    x2: 8,
    y3: 9,
    x3: 15,
  },
  boundArea: {
    y00: 0,
    y10: 2,
    x0: 1,
    y01: 0,
    y11: 3,
    x1: 5,
    y02: 0,
    y12: 7,
    x2: 8,
    y03: 0,
    y13: 9,
    x3: 15,
  }
}

const chartBounds = {
  xMin: 0,
  yMin: 0,
  xMax: 9,
  yMax: 10,
};

const mockChartScale = {
  xScale: { range: () => [10, 0] },
  yScale: { range: () => [1, 10] }
}
