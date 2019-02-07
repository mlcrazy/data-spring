import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { XYChart, XAxis, YAxis, LineSeries, PointSeries } from '@data-ui/xy-chart';
import { config } from 'react-spring';
import { AreaSeriesSpring } from '@data-spring/xy-chart';
import { areas } from './exampleData';
import { colors, styles } from './styles.js'

export default class AreaExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
     }
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { chartBounds, seriesOne } = this.props;

    return (
      <div style={styles.flexContainer}>
        <div style={styles.toggleWrapper}>
          <Switch
            checked={this.state.show}
            onChange={() => this.handleClick()}
          />
          <Typography
            inline
            onClick={() => this.handleClick()}
            style={{ cursor: 'pointer' }}
          >
            Click Here!
          </Typography>
        </div>
        <div style={styles.chartWrapper}>
          <Typography variant="h5" style={styles.headerStyles}>Area series</Typography>
          <XYChart
            width={700}
            height={350}
            xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
            yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
          >
            <XAxis label="Numbers" />
            <YAxis label="Doggo Memes" />
            { this.state.show &&
              <AreaSeriesSpring
                strokeWidth={0.3}
                curve="monotoneX"
                fillOpacity=".75"
                fill={colors.green}
                stroke={colors.green}
                animationStart="bottom"
                data={seriesOne}
                bounds={chartBounds}
                springConfig={config.gentle}
              />
            }
          </XYChart>
        </div>
        <div style={styles.chartWrapper}>
          <Typography variant="h5" style={styles.headerStyles}>Bound areas</Typography>
          <XYChart
            width={700}
            height={350}
            xScale={{ type: 'linear', domain: [0, chartBounds.xMax] }}
            yScale={{ type: 'linear', domain: [0, chartBounds.yMax] }}
          >
            <XAxis label="Numbers" />
            <YAxis label="Doggo Memes" />
            { this.state.show &&
              <AreaSeriesSpring
                strokeWidth={0.3}
                curve="monotoneX"
                fillOpacity=".75"
                fill={colors.purple}
                stroke={colors.purple}
                animationStart="bottom"
                data={areas.areaOne}
                bounds={chartBounds}
                springConfig={config.wobbly}
              />
            }
            { this.state.show &&
              <AreaSeriesSpring
                strokeWidth={0.3}
                curve="monotoneX"
                fillOpacity=".75"
                fill={colors.green}
                stroke={colors.green}
                animationStart="bottom"
                data={areas.areaTwo}
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
