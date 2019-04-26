import React from 'react';
import ReactDOM from 'react-dom';
import { exampleSeries } from './exampleData';
import DataSpringExample from './DataSpringExample';
import dataSpringExampleCode from './DataSpringExample.code';
import AnimationStartExample from './AnimationStartExample';
import animationStartExampleCode from './AnimationStartExample.code';
import RandomizeExample from './RandomizeExample';
import randomizeExampleCode from './RandomizeExample.code';
import AreaExample from './AreaExample';
import areaExampleCode from './AreaExample.code';
import SparklineSpringExample from './SparklineSpringExample';
import sparklineSpringExampleCode from './SparklineSpringExample.code';
import GithubCornerRight from './GithubCornerRight';
import CodeView from './CodeView';

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
    <GithubCornerRight link="https://github.com/mlcrazy/data-spring" />
    <DataSpringExample chartBounds={chartBounds} seriesOne={seriesOne} seriesTwo={seriesTwo} />
    <CodeView code={dataSpringExampleCode}/>
    <RandomizeExample chartBounds={chartBounds} />
    <CodeView code={randomizeExampleCode}/>
    <AreaExample chartBounds={chartBounds} seriesOne={seriesOne} />
    <CodeView code={areaExampleCode}/>
    <AnimationStartExample chartBounds={chartBounds} seriesOne={seriesOne} seriesTwo={seriesTwo} />
    <CodeView code={animationStartExampleCode}/>
    <SparklineSpringExample chartBounds={{ ...chartBounds, xMax: 30 }} seriesOne={seriesOne} />
    <CodeView code={sparklineSpringExampleCode}/>
  </React.Fragment>
)

ReactDOM.render(
  <ExamplesApp seriesOne={seriesOne} seriesTwo={seriesTwo} />,
  document.getElementById('app-root'),
);
