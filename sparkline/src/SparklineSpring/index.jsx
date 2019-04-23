import React from 'react';
import { Sparkline } from '@data-ui/sparkline';
import { Spring, config } from 'react-spring';
import { calcFlattenedStart, constructArray } from '../utils/motionUtil';


const SparklineSpring = (props) => {
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
          <Sparkline
            {...props}
            data={constructArray(values, props.data)}
          >
            {props.children}
          </Sparkline>
        );
      }}
    </Spring>
  );
};

SparklineSpring.displayName = 'SparklineSpring';
SparklineSpring.defaultProps = {
  animationStart: 'bottom',
  springConfig: config.default,
  customAnimationStart: (point) => point,
};
export default SparklineSpring;
