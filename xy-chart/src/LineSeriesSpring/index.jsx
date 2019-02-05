import React from 'react';
import { LineSeries } from '@data-ui/xy-chart';
import { Spring, config } from 'react-spring';
import { calcFlattenedStart, constructArray } from '../utils/motionUtil';


const LineSeriesSpring = (props) => {
  const motionPoints = calcFlattenedStart(props);

  return (
    <Spring
      {...props}
      config={props.springConfig}
      from={motionPoints.from}
      to={motionPoints.to}
    >
      {values => {
        return (
          <LineSeries
            {...props}
            data={constructArray(values, props.data)}
          />
        );
      }}
    </Spring>
  );
};

LineSeriesSpring.displayName = 'LineSeriesSpring';
LineSeriesSpring.defaultProps = {
  animationStart: 'bottomLeft',
  springConfig: config.default,
  customAnimationStart: (point) => point,
};
export default LineSeriesSpring;
