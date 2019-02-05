export const scaleTo = (num, inMin, inMax, outMin, outMax) => {
  /**
  * Scales a value given the min/max scopes
  * @param {number} num - the value to be scaled
  * @param {number} inMin - min for the scale of num
  * @param {number} inMax - max for the scale of num
  * @param {number} outMin - outMin min for scale num is being to converted to
  * @param {number} outMax - outMax min for scale num is being to converted to
  * @return {number} - the scaled value of num
  */
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

export const planeDistance = (x1, y1, x2, y2) => {
  /**
  * Calculate the distance between two sets of x/y coordinates
  * @param {number} x1 - x value for the first set of coordinates
  * @param {number} y1 - y value for the first set of coordinates
  * @param {number} x2 - x value for the second set of coordinates
  * @param {number} y2 - y value for the second set of coordinates
  * @return {number} - the distance between two points
  */
  const xDist = x1 - x2,
    yDist = y1 - y2;
  return Math.hypot(xDist, yDist);
};

export const originCalculator = (animationStart, point, bounds, scale, isArea, customAnimationStart) => {
  /**
  * Calculates the origin for an animated x/y value set
  * @param {string} animationStart - the type of origin to be calculated
  * @param {number} point.x - the x for the animating point
  * @param {number} point.y - the y for the animating point
  * @param {number} bounds.xMin - the x min bound
  * @param {number} bounds.yMin - the y min bound
  * @param {number} bounds.xMax - the x max bound
  * @param {number} bounds.yMax - the y max bound
  * @param {object} scale.x - a data-ui scale object, used in xy-chart range calculation
  * @param {object} scale.y - a data-ui scale object, used in xy-chart range calculation
  * @param {boolean} isArea - is the animating point part of an area series
  * @return {object} - The x and y values for the animationStart point
  */
  const originPoint = { ...point };
  switch (animationStart) {
    case 'bottom':
      if (isArea) {
        originPoint.y0 = bounds.yMin;
        originPoint.y1 = bounds.yMin;
      } else {
        originPoint.y = bounds.yMin;
      }
      return originPoint;
    case 'top':
      if (isArea) {
        originPoint.y0 = bounds.yMax;
        originPoint.y1 = bounds.yMax;
      } else {
        originPoint.y = bounds.yMax;
      }
      return originPoint;
    case 'left':
      return {
        ...originPoint,
        x: bounds.xMin,
      };
    case 'right':
      return {
        ...originPoint,
        x: bounds.xMax,
      };
    case 'bottomLeft':
      if (isArea) {
        originPoint.y0 = bounds.yMax;
        originPoint.y1 = bounds.yMax;
      } else {
        originPoint.y = bounds.yMax;
      }
      return {
        ...originPoint,
        x: bounds.xMin,
        y: bounds.yMin,
      };
    case 'bottomRight':
      if (isArea) {
        originPoint.y0 = bounds.yMin;
        originPoint.y1 = bounds.yMin;
      } else {
        originPoint.y = bounds.yMin;
      }
      return {
        ...originPoint,
        x: bounds.xMin,
      };
    case 'topRight':
      if (isArea) {
        originPoint.y0 = bounds.yMax;
        originPoint.y1 = bounds.yMax;
      } else {
        originPoint.y = bounds.yMax;
      }
      return {
        ...originPoint,
        x: bounds.xMax,
      };
    case 'topLeft':
      if (isArea) {
        originPoint.y0 = bounds.yMax;
        originPoint.y1 = bounds.yMax;
      } else {
        originPoint.y = bounds.yMax;
      }
      return {
        ...originPoint,
        x: bounds.xMin,
      };
    case 'edge':
      if (isArea) return point;
      const xRange = scale.x.range(),
        yRange = scale.y.range();

      const boundsPixels = {
        xMax: xRange[1],
        xMin: xRange[0],
        yMax: yRange[0],
        yMin: yRange[1],
      };

      const pointsPixels = {
        x: scaleTo(point.x, bounds.xMin, bounds.xMax, boundsPixels.xMin, boundsPixels.xMax),
        y: scaleTo(point.y, bounds.yMin, bounds.yMax, boundsPixels.yMin, boundsPixels.yMax),
      };

      // If the point is out of bounds, do not animate
      const outOfBounds = (pointsPixels.x > boundsPixels.xMax
        || pointsPixels.x < boundsPixels.xMin
        || pointsPixels.y > boundsPixels.yMax
        || pointsPixels.y < boundsPixels.yMin);
      if (outOfBounds) return point;

      // Edge points that are within a radial threshold of the corner will animate origin from the corner
      const cornerDistances = {
        bottomLeft: planeDistance(pointsPixels.x, pointsPixels.y, boundsPixels.xMin, boundsPixels.yMin),
        bottomRight: planeDistance(pointsPixels.x, pointsPixels.y, boundsPixels.xMax, boundsPixels.yMin),
        topRight: planeDistance(pointsPixels.x, pointsPixels.y, boundsPixels.xMax, boundsPixels.yMax),
        topLeft: planeDistance(pointsPixels.x, pointsPixels.y, boundsPixels.xMin, boundsPixels.yMax),
      };
      const cornerThreshold = (boundsPixels.xMax * 0.2);
      if (cornerDistances.bottomLeft < cornerThreshold) return { ...point, x: bounds.xMin, y: bounds.yMin };
      if (cornerDistances.bottomRight < cornerThreshold) return { ...point, x: bounds.xMax, y: bounds.yMin };
      if (cornerDistances.topRight < cornerThreshold) return { ...point, x: bounds.xMax, y: bounds.yMax };
      if (cornerDistances.topLeft < cornerThreshold) return { ...point, x: bounds.xMin, y: bounds.yMax };

      const edgeDist = {
        xMax: boundsPixels.xMax - pointsPixels.x,
        xMin: boundsPixels.xMin + pointsPixels.x,
        yMax: boundsPixels.yMax - pointsPixels.y,
        yMin: boundsPixels.yMin + pointsPixels.y,
      };
      const xEdge = edgeDist.xMax > edgeDist.xMin ? 'xMin' : 'xMax',
        yEdge = edgeDist.yMax > edgeDist.yMin ? 'yMin' : 'yMax',
        boundTo = edgeDist[xEdge] > edgeDist[yEdge] ? 'y' : 'x',
        closestEdge = (boundTo === 'y') ? yEdge : xEdge;

      return {
        ...point,
        [boundTo]: bounds[closestEdge],
      };
    case 'custom':
      const customCalculation = customAnimationStart(point);

      return {
        ...customCalculation,
      }
    default:
      return {
        ...point,
      };
  }
};

export const calcFlattenedStart = (props) => {
  /**
  * Calculates animation start values for an array of x/y objects
  * and returns a flattened dictionary of key/value pairs for react-spring animations
  * @param {array} - props.data - the data-ui series
  * @param {string} props.animationStart - the type of origin to be animated
  * @param {function} - props.sizeCalculator - function to be used to calculate a size start value for animation
  * @param props.bounds.xMin - the x min bound
  * @param props.bounds.yMin - the y min bound
  * @param props.bounds.xMax - the x max bound
  * @param props.bounds.yMax - the y max bound
  * @param {object} props.xScale - a data-ui scale object, used in xy-chart range calculation
  * @param {object} props.yScale - a data-ui scale object, used in xy-chart range calculation
  * @return {object} - an object representing the props.data series flattened with calculated animation origins
  */
  const {
    data, animationStart, sizeCalculator, bounds, xScale, yScale, customAnimationStart
  } = props;

  const motionPoints = {
    from: {},
    to: {},
  };
  if (data === undefined) return motionPoints;
  data.map((point, index) => {
    const isArea = point.hasOwnProperty('y0') && point.hasOwnProperty('y1');

    const origin = originCalculator(
      animationStart,
      point,
      bounds,
      { x: xScale, y: yScale },
      isArea,
      customAnimationStart,
    );
    motionPoints.from[`x${index}`] = origin.x;
    motionPoints.to[`x${index}`] = point.x;
    motionPoints.from[`y${index}`] = origin.y;
    motionPoints.to[`y${index}`] = point.y;

    if (isArea) {
      motionPoints.from[`y0${index}`] = origin.y0;
      motionPoints.to[`y0${index}`] = point.y0;
      motionPoints.from[`y1${index}`] = origin.y1;
      motionPoints.to[`y1${index}`] = point.y1;
    }
    if (sizeCalculator) {
      motionPoints.from.size = 1;
      motionPoints.to.size = sizeCalculator(point);
    }
    return point;
  });

  return motionPoints;
};

export const constructArray = (values, data, isArea) => {
  /** Constructs an array of x/y objects from a flattened object representation
  */
  return data.map((entry, index) => {
    const point = {
      ...entry,
      x: values[`x${index}`],
      y: values[`y${index}`],
    };
    if (isArea) {
      point.y0 = values[`y0${index}`];
      point.y1 = values[`y1${index}`];
    }
    return point;
  });
};
