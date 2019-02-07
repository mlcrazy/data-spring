import React from 'react';
import ReactDOM from 'react-dom';
import { XYChart, XAxis, YAxis, CrossHair } from '@data-ui/xy-chart';
import { config } from 'react-spring';
import { PointSeriesSpring, LineSeriesSpring } from '@data-spring/xy-chart';
import { exampleSeries } from './exampleData';
import DataSpringExample from './DataSpringExample';
import AnimationStartExample from './AnimationStartExample';
import RandomizeExample from './RandomizeExample';
import AreaExample from './AreaExample';

const seriesOne = exampleSeries(10, ['y']),
  seriesTwo =  exampleSeries(10, ['y']);

const chartBounds = {
  xMin: 0,
  yMin: 0,
  xMax: 9,
  yMax: 10,
};

const ExamplesApp = ({ seriesOne, seriesTwo }) => (
  <React.Fragment>
    <DataSpringExample chartBounds={chartBounds} seriesOne={seriesOne} seriesTwo={seriesTwo} />
    <AnimationStartExample chartBounds={chartBounds} seriesOne={seriesOne} seriesTwo={seriesTwo} />
    <RandomizeExample chartBounds={chartBounds} />
    <AreaExample chartBounds={chartBounds} seriesOne={seriesOne} />
  </React.Fragment>
)

ReactDOM.render(
  <ExamplesApp seriesOne={seriesOne} seriesTwo={seriesTwo} />,
  document.getElementById('app-root'),
);
