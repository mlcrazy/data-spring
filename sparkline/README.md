# data-spring/sparkline
Components and utility functions for using react-spring animations in data-ui/sparkline data series visualizations. [See some examples here!](https://mlcrazy.github.io/data-spring/)

## Combining data-ui/sparkline With react-spring Wrappers
A data-spring/sparkline series component works by wrapping a data-ui series component in react-spring containers. Use spring series components within the SparklineSpring the same way you would use a data-ui Sparkline component but with additional props for configuring react-spring and calculating the default data-spring animation start values.

### Installation
```
$yarn add @data-spring/sparkline
```

### For Example
```javascript
import React from 'react';
import { LineSeries } from '@data-ui/sparkline';
import { config } from 'react-spring';
import { SparklineSpring } from '@data-spring/sparkline';

const lineSeriesData = [
  { x: 0 , y: 7 },
  { x: 4 , y: 4 },
  { x: 8 , y: 9 },
  { x: 14 , y: 3 },
  { x: 20 , y: 2 },
];

const chartBounds = {
  xMin: 0,
  yMin: 0,
  xMax: 20,
  yMax: 10,
};

const DemonstrativeAnimatedSparkline = (props) => (
  <SparklineSpring
    width={500}
    height={250}
    ariaLabel="Demonstrative animated line"
    min={chartBounds.yMin}
    max={chartBounds.yMax}
    data={lineSeriesData}
    animationStart="bottom"
    bounds={chartBounds}
    springConfig={config.gentle}
  >
    <LineSeries
      curve="cardinal"
      strokeWidth={2}
      stroke="blue"
    />
  </SparklineSpring>
);

```

### Coming Soon...
Utilities for easier unmount animations
