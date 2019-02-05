# data-spring/xy-chart
Components and utility functions for using react-spring animations in data-ui/xy-chart data series visualizations.

## Combining data-ui/xy-chart With react-spring Wrappers
A data-spring/xy-chart series component works by wrapping a data-ui series component in react-spring containers. Use spring series components within the data-ui/xy-chart the same way you would use a data-ui series component but with additional props for configuring react-spring and calculating the default data-spring animation start values.

### For Example
```javascript
import React from 'react';
import { XYChart, XAxis, YAxis } from '@data-ui/xy-chart';
import { config } from 'react-spring';
import { PointSeriesSpring, LineSeriesSpring } from '@data-spring/xy-chart';

const lineSeriesData = [
  { x: 0 , y: 7 },
  { x: 4 , y: 4 },
  { x: 8 , y: 9 },
  { x: 14 , y: 3 },
  { x: 20 , y: 2 },
];

const pointSeriesData = [
  { x: 0 , y: 3 },
  { x: 6 , y: 9 },
  { x: 12 , y: 10 },
  { x: 14 , y: 6 },
  { x: 19 , y: 7 },
];

const chartBounds = {
  xMin: 0,
  yMin: 0,
  xMax: 20,
  yMax: 10,
};

const DemonstrativeXYChart = (props) => (
  <XYChart
    width={500}
    height={250}
    xScale={{ type: 'linear' }}
    yScale={{ type: 'linear' }}
  >
    <XAxis label="X-axis Label" />
    <YAxis label="Y-axis Label" />
    <CrossHair showHorizontalLine={false} fullHeight stroke="pink" />
    <LineSeriesSpring
      {...props}
      key="line-series"
      stroke="#1dc083"
      data={lineSeriesData}
      animationStart="bottom"
      bounds={chartBounds}
      springConfig={config.gentle}
    />
    <PointSeriesSpring
      {...props}
      key="point-series"
      stroke="#4867e9"
      data={pointSeriesData}
      animationStart="edge"
      bounds={chartBounds}
      springConfig={config.wobbly}
    />
  </XYChart>
);

```

### Coming Soon...
Utilities for easier unmount animations
