const codeText = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import { XYChart, XAxis, YAxis, LineSeries, PointSeries } from '@data-ui/xy-chart';
  import { config } from 'react-spring';
  import { PointSeriesSpring, LineSeriesSpring } from '@data-spring/xy-chart';
  import { colors, styles } from './styles.js';

  export default class DataSpringExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props,
        show: true,
       }
    }

    handleClick() {
      this.handleToggle();
      setTimeout(() => this.handleToggle(), 1500);
    }

    handleToggle() {
      this.setState({ show: !this.state.show });
    }

    render() {
      const { seriesOne, seriesTwo } = this.state;
      const { chartBounds } = this.props;

      return (
        <div style={styles.flexContainer}>
          <div style={styles.toggleWrapper}>
            <Button
              variant="contained"
              disabled={!this.state.show}
              onClick={() => this.handleClick()}
              style={{marginTop: '1rem'}}
            >
              Spring
            </Button>
          </div>
          <div style={styles.chartWrapper}>
            <Typography variant="h5" style={styles.headerStyles}>Not animated.</Typography>
            <XYChart
              width={700}
              height={350}
              xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
              yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
            >
              <XAxis label="Time" />
              <YAxis label="Doggo Memes" />
              { this.state.show &&
                <LineSeries
                  key="line-series"
                  interpolation="basis"
                  stroke={colors.green}
                  fill={colors.green}
                  strokeWidth={2}
                  data={seriesOne}
                />
              }
              { this.state.show &&
                <PointSeries
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                />
              }
            </XYChart>
          </div>
          <div style={styles.chartWrapper}>
            <Typography variant="h5" style={styles.headerStyles}>With spring animations.</Typography>
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
                  springConfig={config.gentle}
                />
              }
              { this.state.show &&
                <PointSeriesSpring
                  stroke={colors.purple}
                  fill={colors.purple}
                  data={seriesTwo}
                  animationStart="bottomLeft"
                  bounds={chartBounds}
                  springConfig={config.wobbly}
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
