const codeText = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import { XYChart, XAxis, YAxis, LineSeries, PointSeries } from '@data-ui/xy-chart';
  import { config } from 'react-spring';
  import { PointSeriesSpring, LineSeriesSpring } from '@data-spring/xy-chart';
  import { colors, styles } from './styles.js'

  export default class AnimationStartExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props,
        show: true,
       }
    }

    handleClick() {
      this.handleToggle();
      process.nextTick(() => this.handleToggle());
    }

    handleToggle() {
      this.setState({ show: !this.state.show });
    }

    render() {
      const { seriesOne, seriesTwo } = this.state;
      const {chartBounds } = this.props;

      return (
        <div style={styles.flexContainer}>
          <div style={styles.toggleWrapper}>
            <Typography variant="h4">Data spring has built in animation start value options.</Typography>
            <Button
              variant="contained"
              onClick={() => this.handleClick()}
              style={{marginTop: '1rem'}}
            >
              Spring
            </Button>
          </div>
          <div style={styles.chartWrapper}>
            <Typography variant="h5" style={styles.headerStyles}>bottom</Typography>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              { this.state.show &&
                <LineSeriesSpring
                  interpolation="basis"
                  stroke={colors.green}
                  fill={colors.green}
                  strokeWidth={2}
                  data={seriesOne}
                  animationStart="bottom"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="bottom"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
            </XYChart>
          </div>
          <div style={styles.chartWrapper}>
            <Typography variant="h5" style={styles.headerStyles}>top left</Typography>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              { this.state.show &&
                <LineSeriesSpring
                  interpolation="basis"
                  stroke={colors.green}
                  fill={colors.green}
                  strokeWidth={2}
                  data={seriesOne}
                  animationStart="topLeft"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="topLeft"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
            </XYChart>
          </div>
          <div style={styles.toggleWrapper}>
            <Button
              variant="contained"
              onClick={() => this.handleClick()}
              style={{marginTop: '1rem'}}
            >
              Spring
            </Button>
          </div>
          <div style={styles.chartWrapper}>
            <Typography variant="h5" style={styles.headerStyles}>closest edge</Typography>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="edge"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
            </XYChart>
          </div>
          <div style={styles.chartWrapper}>
            <Typography variant="h5" style={styles.headerStyles}>and more...</Typography>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="topRight"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="topLeft"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="top"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="bottomRight"
                  bounds={chartBounds}
                  springConfig={config.molasses}
                />
              }
            </XYChart>
          </div>
        </div>
      )
    }
  };
`;
export default codeText
