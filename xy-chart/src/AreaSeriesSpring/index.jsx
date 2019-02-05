import React from 'react';
import { AreaSeries } from '@data-ui/xy-chart';
import { Spring, config } from 'react-spring';
import { calcFlattenedStart, constructArray } from '../../utils/motionUtil';


const AreaSeriesSpring = (props) => {
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
          <AreaSeries
            {...props}
            data={constructArray(values, props.data)}
          />
        );
      }}
    </Spring>
  );
};

AreaSeriesSpring.displayName = 'AreaSeriesSpring';
AreaSeriesSpring.defaultProps = {
  animationStart: 'bottom',
  springConfig: config.default,
  customAnimationStart: (point) => point,
};
export default AreaSeriesSpring;
