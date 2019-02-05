import React from 'react';
import { PointSeries } from '@data-ui/xy-chart';
import { Spring, config } from 'react-spring';
import { calcFlattenedStart, constructArray } from '../../utils/motionUtil';

const PointSeriesSpring = (props) => {
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
          <PointSeries
            {...props}
            size={values.size}
            data={constructArray(values, props.data)}
          />
        );
      }}
    </Spring>
  );
};

PointSeriesSpring.displayName = 'PointSeriesSpring';
PointSeriesSpring.defaultProps = {
  animationStart: 'bottomLeft',
  sizeCalculator: (point, props) => props.size,
  springConfig: config.default,
  customAnimationStart: (point) => point,
};
export default PointSeriesSpring;
