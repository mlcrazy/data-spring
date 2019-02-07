export const exampleSeries = (length, yKeys, sequentialX=true) => {
  const series = [...Array(length)];

  return series.map((point, index) => {
    let generatedObject = sequentialX ? { x: index } : { x: Math.floor(Math.random() * Math.floor(length)) };
    yKeys.map(key => {
      generatedObject[key] = Math.floor(Math.random() * Math.floor(length + 1));
    })
    return generatedObject;
  })
}

export const areas = {
  areaOne: [
    {
      x: 2,
      y0: 0,
      y1: 6,
    },
    {
      x: 4,
      y0: 0,
      y1: 6,
    },
  ],
  areaTwo: [
    {
      x: 5,
      y0: 0,
      y1: 3,
    },
    {
      x: 8,
      y0: 0,
      y1: 3,
    },
  ],
}
