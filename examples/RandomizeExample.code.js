const codeText = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import { XYChart, XAxis, YAxis, LineSeries, PointSeries } from '@data-ui/xy-chart';
  import { config } from 'react-spring';
  import { PointSeriesSpring, LineSeriesSpring } from '@data-spring/xy-chart';
  import { exampleSeries } from './exampleData';
  import { colors, styles } from './styles.js'

  export default class RandomizeExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seriesOne: exampleSeries(10, ['y'], false),
        seriesTwo: exampleSeries(10, ['y'], false),
        seriesThree: exampleSeries(10, ['y'], false),
        seriesFour: exampleSeries(10, ['y'], false),
       }
    }

    handleClick() {
      this.setState({
        seriesOne: exampleSeries(10, ['y'], false),
        seriesTwo: exampleSeries(10, ['y'], false),
        seriesThree: exampleSeries(10, ['y'], false),
        seriesFour: exampleSeries(10, ['y'], false),
      });
    }

    render() {
      const { seriesOne, seriesTwo, seriesThree, seriesFour } = this.state;
      const {chartBounds } = this.props;

      return (
        <div style={styles.flexContainer}>
          <div style={styles.toggleWrapper}>
            <Typography variant="h4">Animate controlled changes in state data.</Typography>
            <Button
              variant="contained"
              onClick={() => this.handleClick()}
              style={{marginTop: '1rem'}}
            >
              Randomize
            </Button>
          </div>
          <div style={styles.chartWrapper}>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              <PointSeriesSpring
                stroke={colors.orange}
                fill={colors.orange}
                data={seriesOne}
                animationStart="bottomLeft"
                bounds={chartBounds}
                springConfig={config.stiff}
              />
              <PointSeriesSpring
                stroke={colors.purple}
                fill={colors.purple}
                data={seriesTwo}
                animationStart="bottomLeft"
                bounds={chartBounds}
                springConfig={config.wobbly}
              />
            </XYChart>
          </div>
          <div style={styles.chartWrapper}>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              <PointSeriesSpring
                stroke={colors.green}
                fill={colors.green}
                data={seriesThree}
                animationStart="bottomLeft"
                bounds={chartBounds}
                springConfig={config.stiff}
              />
              <PointSeriesSpring
                stroke={colors.orange}
                fill={colors.orange}
                data={seriesFour}
                animationStart="bottomLeft"
                bounds={chartBounds}
                springConfig={config.wobbly}
              />
            </XYChart>
          </div>
        </div>
      )
    }
  };
`;
export default codeText
